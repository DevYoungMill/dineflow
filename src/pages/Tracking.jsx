import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import { getOrderById, getOrderByIdForEmail } from '../services/apiOrders';
import supabase from '../services/supabase';

const DELIVERY_STEPS = [
  { key: 'new', title: 'Order Confirmed' },
  { key: 'preparing', title: 'Preparing' },
  { key: 'on_the_way', title: 'On the Way' },
  { key: 'delivered', title: 'Delivered' },
];

const PICKUP_STEPS = [
  { key: 'new', title: 'Order Confirmed' },
  { key: 'preparing', title: 'Preparing' },
  { key: 'ready', title: 'Ready' },
  { key: 'completed', title: 'Completed' },
];

const TERMINAL_STATUSES = new Set(['completed', 'delivered', 'cancelled']);

function normalizeStatus(status) {
  const normalized = String(status || 'new')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');

  if (normalized === 'ready_for_pickup') return 'ready';
  return normalized || 'new';
}

function getEstimatedMinutes(orderType) {
  if (orderType === 'delivery') return 35;
  if (orderType === 'takeaway') return 20;
  return 15;
}

function formatOrderItem(item) {
  const raw = item.note || 'Order item';
  const [name] = raw.split(' - ');
  return `${item.quantity || 1}x ${name}`;
}

function Tracking() {
  const [searchParams] = useSearchParams();
  const orderIdFromQuery = searchParams.get('order');
  const emailFromQuery = searchParams.get('email');
  const orderIdFromStorage =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('dineflow:last-order-id')
      : null;
  const orderId = orderIdFromQuery || orderIdFromStorage;
  const emailForLookup =
    emailFromQuery ||
    (typeof window !== 'undefined'
      ? window.localStorage.getItem('dineflow:last-order-email')
      : '');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setNow(Date.now());
    }, 30000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    const loadOrder = async () => {
      try {
        setLoading(true);
        setError('');
        if (!orderId) {
          throw new Error('No order selected for tracking yet.');
        }

        let data;
        if (emailForLookup) {
          data = await getOrderByIdForEmail(orderId, emailForLookup);
        } else {
          data = await getOrderById(orderId);
        }

        if (!ignore) setOrder(data);
      } catch (err) {
        if (!ignore) {
          setOrder(null);
          setError(
            err?.message || 'Unable to load tracking details for this order.',
          );
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadOrder();
    return () => {
      ignore = true;
    };
  }, [emailForLookup, orderId]);

  useEffect(() => {
    if (!order?.id) return undefined;

    const channel = supabase
      .channel(`track-order-${order.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${order.id}`,
        },
        (payload) => {
          setOrder((prev) => ({ ...(prev || {}), ...payload.new }));
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [order?.id]);

  const orderStatus = normalizeStatus(order?.status);
  const steps = order?.orderType === 'delivery' ? DELIVERY_STEPS : PICKUP_STEPS;
  const currentStepIndex = Math.max(
    steps.findIndex((step) => step.key === orderStatus),
    0,
  );

  const remainingMinutes = useMemo(() => {
    if (!order) return 0;
    if (TERMINAL_STATUSES.has(orderStatus)) return 0;

    const createdAt = new Date(order.createdAt || Date.now()).getTime();
    const elapsed = Math.floor((now - createdAt) / 60000);
    return Math.max(getEstimatedMinutes(order.orderType) - elapsed, 1);
  }, [now, order, orderStatus]);

  const headingText = TERMINAL_STATUSES.has(orderStatus)
    ? 'Order Completed'
    : `Arriving in ${remainingMinutes} min`;

  const itemLines = (order?.orderItems || []).map(formatOrderItem);

  return (
    <>
      <Navbar />

      <div className="flex justify-center px-4 lg:px-10 py-10 lg:py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
            {loading ? (
              <div className="py-6">
                <Spinner />
              </div>
            ) : null}

            {!loading && error ? (
              <div className="space-y-3">
                <p className="text-sm text-red-500">{error}</p>
                <Link
                  to="/menu"
                  className="inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Continue to menu
                </Link>
              </div>
            ) : null}

            {!loading && !error && order ? (
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">
                    Live Update
                  </span>
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-secondary dark:text-white mt-3">
                    {headingText}
                  </h1>
                  <p className="text-sm text-secondary/70 dark:text-gray-400 mt-1">
                    Order #{order.orderNumber || order.id} -{' '}
                    {String(orderStatus).replace(/_/g, ' ').toUpperCase()}
                  </p>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const isDone = index <= currentStepIndex;
                    return (
                      <div key={step.key} className="flex items-center gap-3">
                        <span
                          className={`size-6 rounded-full border flex items-center justify-center text-xs ${
                            isDone
                              ? 'bg-primary text-white border-primary'
                              : 'bg-transparent text-secondary/40 border-gray-300 dark:border-white/20'
                          }`}
                        >
                          {isDone ? 'OK' : index + 1}
                        </span>
                        <span
                          className={`font-medium ${
                            isDone
                              ? 'text-secondary dark:text-white'
                              : 'text-secondary/50 dark:text-gray-500'
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-secondary dark:text-white mb-4">
              Order Details
            </h3>

            {loading ? null : (
              <div className="space-y-3">
                {itemLines.length ? (
                  itemLines.map((line, index) => (
                    <p
                      key={`${line}-${index}`}
                      className="text-sm text-secondary dark:text-white"
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-secondary/60 dark:text-gray-400">
                    No item details available.
                  </p>
                )}
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex justify-between text-sm">
              <span className="text-secondary/60 dark:text-gray-400">Total</span>
              <span className="font-bold text-secondary dark:text-white">
                ${Number(order?.totalAmount || 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Tracking;




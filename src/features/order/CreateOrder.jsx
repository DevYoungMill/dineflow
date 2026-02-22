import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SpinnerMini from '../../components/SpinnerMini';
import { clearCart, selectCartItems, selectCartTotals } from '../cart/cartSlice';
import { getCurrentUserWithProfile } from '../../services/apiAuth';
import { createOrderForUserEmail } from '../../services/apiOrders';

const VALID_ORDER_TYPES = new Set(['table', 'takeaway', 'delivery']);
const DELIVERY_FEE = 4.99;
const SERVICE_FEE = 2.0;
const TAX_RATE = 0.08;

function getInitialOrderType(stateType, queryType) {
  if (VALID_ORDER_TYPES.has(stateType)) return stateType;
  if (VALID_ORDER_TYPES.has(queryType)) return queryType;
  return 'delivery';
}

function CreateOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const cartItems = useSelector(selectCartItems);
  const { totalAmount } = useSelector(selectCartTotals);
  const selectedFromCheckout = getInitialOrderType(
    location.state?.orderType,
    searchParams.get('type')?.toLowerCase(),
  );
  const hasLockedType =
    VALID_ORDER_TYPES.has(location.state?.orderType) ||
    VALID_ORDER_TYPES.has(searchParams.get('type')?.toLowerCase());

  const [orderType, setOrderType] = useState(() =>
    selectedFromCheckout,
  );
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    deliveryInstructions: '',
  });
  const [currentUserId, setCurrentUserId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const loadUser = async () => {
      try {
        const user = await getCurrentUserWithProfile();
        if (ignore) return;
        setCurrentUserId(user?.id || null);

        setForm((prev) => ({
          ...prev,
          fullName: user?.profile?.fullName || '',
          email: user?.profile?.email || user?.email || '',
          phone: user?.profile?.phone || '',
        }));
      } catch (err) {
        if (!ignore) {
          setError(err?.message || 'Unable to load your profile.');
        }
      }
    };

    loadUser();
    return () => {
      ignore = true;
    };
  }, []);

  const taxAmount = totalAmount * TAX_RATE;
  const appliedDeliveryFee = orderType === 'delivery' ? DELIVERY_FEE : 0;
  const grandTotal = useMemo(
    () => totalAmount + appliedDeliveryFee + SERVICE_FEE + taxAmount,
    [appliedDeliveryFee, taxAmount, totalAmount],
  );

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!cartItems.length) {
      setError('Your cart is empty. Add menu items before placing an order.');
      return;
    }

    const formEmail = String(form.email || '')
      .trim()
      .toLowerCase();

    if (!formEmail) {
      setError('Email is required.');
      return;
    }

    if (!form.fullName.trim()) {
      setError('Full name is required.');
      return;
    }

    if (!form.phone.trim()) {
      setError('Phone number is required.');
      return;
    }

    if (orderType === 'delivery') {
      if (!form.streetAddress.trim()) {
        setError('Street address is required for delivery.');
        return;
      }
      if (!form.city.trim()) {
        setError('City is required for delivery.');
        return;
      }
    }

    try {
      setSubmitting(true);
      const createdOrder = await createOrderForUserEmail({
        name: form.fullName,
        email: formEmail,
        phone: form.phone,
        orderType,
        tableNumber: null,
        totalAmount: Number(grandTotal.toFixed(2)),
        status: 'new',
        userId: currentUserId,
        deliveryDetails:
          orderType === 'delivery'
            ? {
                streetAddress: form.streetAddress,
                apartment: form.apartment,
                city: form.city,
                instructions: form.deliveryInstructions,
              }
            : null,
        items: cartItems.map((item) => ({
          quantity: item.qty,
          price: Number(item.price || 0),
          name: item.name,
          note: item.description
            ? `${item.name} - ${item.description}`
            : item.name,
        })),
      });

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'dineflow:last-order-id',
          String(createdOrder.id),
        );
        window.localStorage.setItem('dineflow:last-order-email', formEmail);
      }

      dispatch(clearCart());
      navigate(
        `/tracking?order=${createdOrder.id}&email=${encodeURIComponent(formEmail)}`,
      );
    } catch (err) {
      setError(err?.message || 'Unable to place your order right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <form className="max-w-4xl mx-auto px-4 py-10" onSubmit={onSubmit}>
        <div className="bg-white dark:bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 space-y-8">
          {/* ================= CUSTOMER INFO ================= */}
          <div>
            <h2 className="font-heading text-xl font-bold text-secondary dark:text-white mb-6">
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  placeholder="john@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  placeholder="+234..."
                />
              </div>
            </div>
          </div>

          {/* ================= ORDER TYPE ================= */}
          <div>
            <h2 className="font-heading text-xl font-bold text-secondary dark:text-white mb-6">
              Order Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['table', 'takeaway', 'delivery'].map((type) => (
                <label
                  key={type}
                  className={`rounded-xl border p-4 flex items-center gap-3 transition-all ${
                    hasLockedType && orderType !== type
                      ? 'opacity-45 cursor-not-allowed'
                      : 'cursor-pointer'
                  } ${
                    orderType === type
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 dark:border-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value={type}
                    checked={orderType === type}
                    disabled={hasLockedType && orderType !== type}
                    onChange={(e) => setOrderType(e.target.value)}
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      orderType === type ? 'border-primary' : 'border-gray-400'
                    }`}
                  >
                    {orderType === type && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="capitalize font-semibold">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ================= DELIVERY DETAILS ================= */}
          {orderType === 'delivery' && (
            <div className="border-t pt-8">
              <h2 className="font-heading text-xl font-bold text-secondary dark:text-white mb-6">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={form.streetAddress}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                    Apartment / Suite
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={form.apartment}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-secondary dark:text-gray-300">
                    Delivery Instructions
                  </label>
                  <textarea
                    rows="2"
                    name="deliveryInstructions"
                    value={form.deliveryInstructions}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10
    text-secondary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary hover:border-primary/60"
                    placeholder="Gate code, drop-off details..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= SUBMIT ================= */}
          <div className="rounded-xl border border-gray-100 dark:border-white/10 bg-background-light/40 dark:bg-background-dark/40 p-4 text-sm text-secondary/80 dark:text-gray-200 space-y-1">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery Fee</span>
              <span className="font-semibold">${appliedDeliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service Fee</span>
              <span className="font-semibold">${SERVICE_FEE.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax (8%)</span>
              <span className="font-semibold">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10 flex items-center justify-between font-bold text-base text-secondary dark:text-white">
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {error ? (
            <div className="text-sm text-red-500 font-medium">{error}</div>
          ) : null}

          <div className="pt-6">
            <button
              type="submit"
              disabled={submitting || !cartItems.length}
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? <SpinnerMini /> : 'Place Order Now'}
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default CreateOrder;

import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const VALID_ORDER_TYPES = new Set(['table', 'takeaway', 'delivery']);

function getInitialOrderType(stateType, queryType) {
  if (VALID_ORDER_TYPES.has(stateType)) return stateType;
  if (VALID_ORDER_TYPES.has(queryType)) return queryType;
  return 'delivery';
}

function CreateOrder() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
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

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
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
          <div className="pt-6">
            <button className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateOrder;

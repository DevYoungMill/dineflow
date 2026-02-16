import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItem,
  increaseItem,
  removeItem,
  selectCartItems,
  selectCartTotals,
} from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { totalQty, totalAmount } = useSelector(selectCartTotals);
  const [orderType, setOrderType] = useState('delivery');

  const deliveryFee = 4.99;
  const serviceFee = 2.0;
  const taxRate = 0.08;
  const taxAmount = totalAmount * taxRate;
  const appliedDeliveryFee = orderType === 'delivery' ? deliveryFee : 0;
  const grandTotal = totalAmount + appliedDeliveryFee + serviceFee + taxAmount;

  return (
    <>
      <Navbar />
      <div className="px-4 lg:px-10 py-8 md:py-10 lg:py-16 flex justify-center w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SECTION */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-end justify-between border-b border-gray-200 dark:border-white/10 pb-6">
              <div>
                <h1 className="font-heading text-2xl  md:text-3xl font-extrabold text-secondary dark:text-white">
                  Checkout
                </h1>
                <p className="text-secondary/60 dark:text-gray-400 mt-2 text-xs md:text-base">
                  Complete your order details below
                </p>
              </div>
              <Link
                to="/menu"
                className="text-primary font-bold text-[10px] md:text-sm hover:underline"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Cart */}
            <div className="bg-white dark:bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
              <h2 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  shopping_cart
                </span>
                Your Cart
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-1">
                  ({cartItems.length} items)
                </span>
              </h2>

              <div className="flex flex-col gap-6">
                {/* Cart Item */}
                {cartItems.length === 0 ? (
                  <div className="text-secondary/60 dark:text-gray-400 text-sm">
                    Your cart is empty.
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex gap-4 sm:gap-6 items-start">
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-200 bg-cover bg-center shrink-0 border border-gray-100 dark:border-white/5"
                          style={{
                            backgroundImage: item.image
                              ? `url("${item.image}")`
                              : undefined,
                          }}
                        />

                        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-heading font-bold text-sm md:text-base text-secondary dark:text-white">
                                {item.name}
                              </h3>
                            </div>

                            <p className="text-xs md:text-sm text-secondary/60 dark:text-gray-400 mb-3 max-w-63.5">
                              {item.description}
                            </p>

                            <button
                              onClick={() => dispatch(removeItem(item.id))}
                              className="text-xs text-red-500 font-medium hover:text-red-600 flex items-center gap-1 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[12px]">
                                delete
                              </span>
                              Remove
                            </button>
                          </div>

                          <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-4 w-full sm:w-auto">
                            <span className="font-heading font-bold text-base md:text-lg text-secondary dark:text-white">
                              ${item.price.toFixed(2)}
                            </span>

                            <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark rounded-lg p-1 border border-gray-100 dark:border-white/5">
                              <button
                                onClick={() => dispatch(decreaseItem(item.id))}
                                className="w-7 h-7 flex items-center justify-center font-bold"
                              >
                                -
                              </button>
                              <span className="text-xs md:text-sm font-bold w-4 text-center">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => dispatch(increaseItem(item.id))}
                                className="w-7 h-7 flex items-center justify-center font-bold text-primary"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {index !== cartItems.length - 1 && (
                        <div className="h-px bg-gray-100 dark:bg-white/5 w-full my-6" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Delivery + Payment sections remain unchanged visually */}
            {/* You can plug form state here later */}
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 flex flex-col gap-6">
              {totalQty > 0 ? (
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5">
                  <h2 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-6">
                    Order Summary
                  </h2>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {[
                      {
                        type: 'table',
                        label: 'Table',
                        icon: 'table_restaurant',
                      },
                      {
                        type: 'takeaway',
                        label: 'Takeaway',
                        icon: 'shopping_bag',
                      },
                      {
                        type: 'delivery',
                        label: 'Delivery',
                        icon: 'two_wheeler',
                      },
                    ].map((option) => (
                      <button
                        type="button"
                        key={option.type}
                        onClick={() => setOrderType(option.type)}
                        className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg border transition-colors ${
                          orderType === option.type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 dark:border-white/10 text-secondary/55 dark:text-gray-400 hover:text-secondary/80 dark:hover:text-gray-300'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[13px] leading-none">
                          {option.icon}
                        </span>
                        <span className="text-[12px] font-medium">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary/60 dark:text-gray-400">
                        Subtotal
                      </span>
                      <span className="font-semibold">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary/60 dark:text-gray-400">
                        Delivery Fee
                      </span>
                      <span className="font-semibold">
                        ${appliedDeliveryFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary/60 dark:text-gray-400">
                        Service Fee
                      </span>
                      <span className="font-semibold">
                        ${serviceFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary/60 dark:text-gray-400">
                        Tax (8%)
                      </span>
                      <span className="font-semibold">
                        ${taxAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200 dark:border-white/10 my-6" />

                  <div className="flex justify-between items-end mb-8">
                    <span className="font-heading font-bold text-base  md:text-lg">
                      Grand Total
                    </span>
                    <span className="font-heading font-extrabold text-2xl  md:text-3xl text-primary">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid w-full">
                    <Button
                      size="large"
                      type="tertiary"
                      to={`/order/new?type=${orderType}`}
                      state={{ orderType }}
                    >
                      Order Confirmation
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;

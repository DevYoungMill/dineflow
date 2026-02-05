import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const cart = [
  {
    name: 'Spicy Tuna Roll Set',
    price: '$18.50',
    qty: 1,
    desc: 'Fresh tuna, cucumber, spicy mayo, topped with sesame seeds.',
  },
  {
    name: 'Truffle Parmesan Fries',
    price: '$9.00',
    qty: 1,
    desc: 'Crispy shoestring fries, truffle oil, aged parmesan, parsley.',
  },
  {
    name: 'Matcha Green Tea Latte',
    price: '$6.50',
    qty: 2,
    desc: 'Iced, Oat Milk substitution.',
  },
];

function Checkout() {
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
              <button className="text-primary font-bold text-[10px] md:text-sm hover:underline">
                Continue Shopping
              </button>
            </div>

            {/* Cart */}
            <div className="bg-white dark:bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
              <h2 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  shopping_cart
                </span>
                Your Cart
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-1">
                  (3 items)
                </span>
              </h2>

              <div className="flex flex-col gap-6">
                {/* Cart Item */}
                {cart.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-4 sm:gap-6 items-start">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-200 bg-cover bg-center shrink-0 border border-gray-100 dark:border-white/5" />

                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-heading font-bold text-sm md:text-base text-secondary dark:text-white">
                              {item.name}
                            </h3>
                          </div>

                          <p className="text-xs md:text-sm text-secondary/60 dark:text-gray-400 mb-3 max-w-63.5">
                            {item.desc}
                          </p>

                          <button className="text-xs text-red-500 font-medium hover:text-red-600 flex items-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-[12px]">
                              delete
                            </span>
                            Remove
                          </button>
                        </div>

                        <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-4 w-full sm:w-auto">
                          <span className="font-heading font-bold text-base md:text-lg text-secondary dark:text-white">
                            {item.price}
                          </span>

                          <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark rounded-lg p-1 border border-gray-100 dark:border-white/5">
                            <button className="w-7 h-7 flex items-center justify-center font-bold">
                              -
                            </button>
                            <span className="text-xs md:text-sm font-bold w-4 text-center">
                              {item.qty}
                            </span>
                            <button className="w-7 h-7 flex items-center justify-center font-bold text-primary">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index !== 2 && (
                      <div className="h-px bg-gray-100 dark:bg-white/5 w-full my-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery + Payment sections remain unchanged visually */}
            {/* You can plug form state here later */}
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5">
                <h2 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary/60 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="font-semibold">$40.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary/60 dark:text-gray-400">
                      Delivery Fee
                    </span>
                    <span className="font-semibold">$4.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary/60 dark:text-gray-400">
                      Service Fee
                    </span>
                    <span className="font-semibold">$2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary/60 dark:text-gray-400">
                      Tax (8%)
                    </span>
                    <span className="font-semibold">$3.80</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 dark:border-white/10 my-6" />

                <div className="flex justify-between items-end mb-8">
                  <span className="font-heading font-bold text-base  md:text-lg">
                    Grand Total
                  </span>
                  <span className="font-heading font-extrabold text-2xl  md:text-3xl text-primary">
                    $46.29
                  </span>
                </div>

                <div className="grid w-full">
                  <Button size="large" type="tertiary" to="/checkout">
                    Order Confirmation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;

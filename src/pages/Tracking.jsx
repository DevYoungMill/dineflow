import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Tracking() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center h-full px-4 lg:px-10 py-10 lg:py-16  ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                  Live Update
                </span>
                <span className="text-sm font-semibold text-secondary/40 dark:text-gray-500">
                  Order #2891
                </span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary dark:text-white leading-tight">
                Arriving in <span className="text-primary">15 min</span>
              </h1>
              <p className="text-secondary/70 dark:text-gray-400 text-sm">
                Your order from
                <span className="font-bold text-secondary dark:text-white">
                  The Grill
                </span>
                is on the way.
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none">
              <div className="flex gap-4 pb-10 relative">
                <div className="absolute left-4.75 top-10 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="relative z-10 size-10 flex-none rounded-full bg-primary/10 text-primary flex items-center justify-center border-[3px] border-white dark:border-surface-dark shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    check
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="font-heading font-bold text-secondary dark:text-white text-lg leading-none">
                    Order Confirmed
                  </h4>
                  <p className="text-xs font-medium text-secondary/40 dark:text-gray-500 mt-1">
                    12:15 PM
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pb-10 relative">
                <div className="absolute left-4.75 top-10 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="relative z-10 size-10 flex-none rounded-full bg-primary/10 text-primary flex items-center justify-center border-[3px] border-white dark:border-surface-dark shadow-sm">
                  <span className="material-symbols-outlined text-xl">
                    skillet
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="font-heading font-bold text-secondary dark:text-white text-lg leading-none">
                    Preparing
                  </h4>
                  <p className="text-xs font-medium text-secondary/40 dark:text-gray-500 mt-1">
                    12:20 PM
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pb-10 relative">
                <div className="absolute left-4.75 top-10 bottom-0 w-0.5 bg-gray-200 dark:bg-white/5 border-l border-dashed border-gray-300 dark:border-white/20"></div>
                <div className="relative z-10 size-10 flex-none rounded-full bg-primary text-white flex items-center justify-center border-4 border-primary/20 shadow-lg shadow-primary/30 animate-pulse">
                  <span className="material-symbols-outlined text-xl">
                    local_shipping
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="font-heading font-bold text-secondary dark:text-white text-lg leading-none">
                    On the Way
                  </h4>
                  <p className="text-sm text-secondary/70 dark:text-gray-400 mt-1">
                    Mike has picked up your order and is heading your way.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="relative z-10 size-10 flex-none rounded-full bg-gray-50 dark:bg-white/5 text-gray-300 dark:text-gray-600 flex items-center justify-center border-[3px] border-white dark:border-surface-dark">
                  <span className="material-symbols-outlined text-xl">
                    home_pin
                  </span>
                </div>
                <div className="pt-1 opacity-50">
                  <h4 className="font-heading font-bold text-secondary dark:text-white text-lg leading-none">
                    Delivered
                  </h4>
                  <p className="text-xs font-medium text-secondary/40 dark:text-gray-500 mt-1">
                    Est. 12:45 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="size-14 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-surface-dark shadow-md"
                    style={{
                      backgroundImage: "url('/agent.png')",
                    }}
                  ></div>

                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-surface-dark">
                    <span className="material-symbols-outlined text-[7px] leading-none">
                      check
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary dark:text-white">
                    Mike Ross
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-secondary/60 dark:text-gray-400 mt-0.5">
                    <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
                      <span className="material-symbols-outlined text-[6px] leading-none scale-75">
                        star
                      </span>
                      4.9
                    </span>

                    <span>•</span>
                    <span>Black Scooter</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-100 dark:border-white/5"
                  title="Message"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chat
                  </span>
                </button>
                <button
                  className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Call"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-50 dark:border-white/5">
                <h3 className="font-heading font-bold text-lg text-secondary dark:text-white">
                  Order Details
                </h3>
                <span className="text-xs font-bold bg-gray-100 dark:bg-white/10 text-secondary/60 dark:text-gray-400 px-2 py-1 rounded">
                  2 Items
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="font-bold text-primary text-sm">1x</span>
                    <div>
                      <p className="text-sm font-bold text-secondary dark:text-white">
                        Spicy Tuna Roll Set
                      </p>
                      <p className="text-xs text-secondary/50 dark:text-gray-500">
                        Extra spicy mayo, No cucumber
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-secondary dark:text-white">
                    $18.00
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <span className="font-bold text-primary text-sm">1x</span>
                    <div>
                      <p className="text-sm font-bold text-secondary dark:text-white">
                        Miso Soup
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-secondary dark:text-white">
                    $4.50
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                <span className="text-sm text-secondary/60 dark:text-gray-400">
                  Total To Be Paid
                </span>
                <span className="font-heading font-bold text-xl text-secondary dark:text-white">
                  $22.50
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-100 lg:h-auto lg:min-h-100 top-24 rounded-3xl overflow-hidden shadow-2xl shadow-secondary/5 dark:shadow-none border border-gray-200 dark:border-white/5 relative group">
            <div className="absolute inset-0 bg-map-pattern opacity-100"></div>
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/5 to-transparent dark:from-black/40"></div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="size-10 bg-white dark:bg-surface-dark rounded-lg shadow-lg text-secondary dark:text-white flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="size-10 bg-white dark:bg-surface-dark rounded-lg shadow-lg text-secondary dark:text-white flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="size-10 bg-white dark:bg-surface-dark rounded-lg shadow-lg text-primary flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition mt-2">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              style={{ zIndex: 0 }}
              viewBox="0 0 100 100"
            >
              <path
                className="opacity-60 drop-shadow-md"
                d="M 15 20 Q 35 35 70 65"
                fill="none"
                stroke="#e76b55"
                strokeDasharray="1 1"
                strokeLinecap="round"
                strokeWidth="1"
              ></path>
            </svg>
            <div className="absolute top-[35%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="relative w-12 h-12 bg-primary text-white rounded-full border-4 border-white dark:border-surface-dark shadow-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  moped
                </span>
              </div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-surface-dark px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-secondary dark:text-white whitespace-nowrap border border-gray-100 dark:border-white/10 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Mike
              </div>
            </div>
            <div className="absolute top-[20%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white dark:bg-surface-dark text-secondary dark:text-white rounded-full border-4 border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    storefront
                  </span>
                </div>
                <span className="mt-1 text-xs font-bold text-secondary/60 dark:text-gray-400 bg-white/80 dark:bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                  The Grill
                </span>
              </div>
            </div>
            <div className="absolute top-[65%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-secondary dark:bg-white text-white dark:text-secondary rounded-full border-4 border-white dark:border-surface-dark shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    home
                  </span>
                </div>
                <span className="mt-1 text-xs font-bold text-secondary dark:text-white bg-white/80 dark:bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                  You
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Tracking;

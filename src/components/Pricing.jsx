import Button from './Button';

export default function Pricing() {
  return (
    <section className="px-4 lg:px-10 py-20 flex justify-center bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-secondary dark:text-white text-3xl md:text-4xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-secondary/60 dark:text-gray-400">
            Choose the perfect plan for your restaurant size.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Starter Plan */}
          <div className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-secondary dark:text-white">
                Starter
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 text-sm mt-1">
                For small cafes & pop-ups
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-secondary dark:text-white">
                $0
              </span>
              <span className="text-secondary/60 dark:text-gray-400">/mo</span>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-secondary/80 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Up to 50 orders/mo
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Basic QR Menu
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Email Support
              </li>
            </ul>

            <Button type="secondary" size="large">
              Start Free
            </Button>
          </div>

          {/* Growth Plan (Featured) */}
          <div className="relative p-8 rounded-2xl bg-white dark:bg-surface-dark border-2 border-primary shadow-2xl shadow-primary/10 flex flex-col gap-6 scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading text-secondary dark:text-white">
                Growth
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 text-sm mt-1">
                For busy restaurants
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-secondary dark:text-white">
                $79
              </span>
              <span className="text-secondary/60 dark:text-gray-400">/mo</span>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-secondary/80 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check
                </span>
                Unlimited orders
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check
                </span>
                Real-time Kitchen Display
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check
                </span>
                Advanced Analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check
                </span>
                24/7 Priority Support
              </li>
            </ul>

            <Button size="large">Get Started</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-secondary dark:text-white">
                Enterprise
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 text-sm mt-1">
                For multi-location chains
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-secondary dark:text-white">
                $199
              </span>
              <span className="text-secondary/60 dark:text-gray-400">/mo</span>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-secondary/80 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Multi-location management
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Custom API Access
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-[20px]">
                  check
                </span>
                Dedicated Account Manager
              </li>
            </ul>

            <Button type="secondary" size="large">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: 'qr_code_scanner',
    title: 'Lightning Fast Ordering',
    text: 'QR code integration allows customers to order instantly from their table, reducing wait times by up to 40%.',
  },
  {
    icon: 'soup_kitchen',
    title: 'Real-Time Tracking',
    text: 'Kitchen display systems sync instantly with orders. Chefs see what needs to be cooked, when, and how.',
  },
  {
    icon: 'local_shipping',
    title: 'Smart Delivery',
    text: 'AI-optimized routes for your delivery fleet ensure food arrives hot and fresh, every single time.',
  },
];

export default function Features() {
  return (
    <section className="px-4 lg:px-10 py-20 flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="font-heading text-secondary dark:text-white text-3xl md:text-4xl font-bold">
            Why Top Restaurants Choose DineFlow
          </h2>
          <p className="text-secondary/70 dark:text-gray-400 text-base md:text-lg max-w-[720px] mx-auto">
            Streamline your operations with our premium suite of tools designed
            for speed, reliability, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
                  {feature.icon}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-secondary dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-secondary/60 dark:text-gray-400 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

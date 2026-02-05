import Button from './Button';

export default function Hero() {
  return (
    <section className="px-4 lg:px-10 py-12 lg:py-20 flex justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center gap-20">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="font-heading text-secondary dark:text-white text-4xl md:text-5xl font-extrabold leading-[1.15]">
            The Operating System for{' '}
            <span className="text-primary">Modern Dining</span>
          </h1>

          <p className="text-secondary/70 dark:text-gray-300 text-base md:text-lg max-w-135">
            From fast ordering to smart delivery, DineFlow powers the world's
            best restaurants with an all-in-one platform built for speed.
          </p>

          <div className="flex gap-4 mt-4">
            <Button type="tertiary">Order Food </Button>

            <Button type="secondary">For Restaurants</Button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative">
          {/* Glow background */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-60" />

          {/* Preview Card */}
          <div className="w-full aspect-4/3 bg-gray-100 dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 relative group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url("/hero.png")`,
              }}
            />

            {/* UI Overlay Mockup */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] md:text-xs font-semibold text-primary uppercase mb-1">
                    Incoming Order #2891
                  </p>
                  <h3 className="font-heading font-bold text-secondary dark:text-white text-xs md:text-lg">
                    Spicy Tuna Roll Set
                  </h3>
                </div>

                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-[8px] md:text-xs font-bold">
                  Ready for Pickup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LogoStrip() {
  return (
    <section className="px-4 lg:px-10 border-y border-gray-100 dark:border-white/5 bg-white dark:bg-surface-dark py-10">
      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full text-center">
          <p className="text-sm font-semibold text-secondary/40 dark:text-gray-500 mb-8 uppercase tracking-widest">
            Trusted by top establishments worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-heading font-black text-2xl text-secondary dark:text-white">
              BISTRO<span className="text-primary">.</span>
            </span>

            <span className="font-heading font-bold text-xl italic text-secondary dark:text-white">
              TheGrill
            </span>

            <span className="font-heading font-light text-2xl tracking-tighter text-secondary dark:text-white">
              noodle<span className="font-bold">house</span>
            </span>

            <span className="font-heading font-bold text-xl text-secondary dark:text-white border-2 border-current p-1">
              URBAN
            </span>

            <span className="font-heading font-black text-2xl text-secondary dark:text-white">
              ROOTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

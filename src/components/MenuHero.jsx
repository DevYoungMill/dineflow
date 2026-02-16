function MenuHero({ selectedCategory, onCategoryChange }) {
  const categoryTabs = [
    { label: 'All', value: 'All' },
    { label: 'Popular', value: 'Popular Items' },
    { label: 'Main Courses', value: 'Main Courses' },
    { label: 'Desserts', value: 'Desserts' },
  ];

  return (
    <>
      <section className="relative h-75 lg:h-75 w-full ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero.png")`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        <div className="relative h-full px-4 lg:px-10 flex flex-col justify-end pb-8 lg:pb-12 mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Open Now
                </span>
                <span className="text-white/80 text-sm font-medium">
                  Italian • Premium • Cocktails
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 shadow-black/50 drop-shadow-md">
                The Urban Harvest
              </h1>

              <p className="text-white/80 max-w-xl text-base  sm:text-lg">
                Farm-to-table dining experience featuring organic ingredients
                and handcrafted pasta.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 sm:p-3 text-white min-w-25 text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                  <span className="material-symbols-outlined fill-current text-[20px]">
                    star
                  </span>
                  <span className="font-bold text-white text-base sm:text-lg">
                    4.8
                  </span>
                </div>
                <div className="text-xs text-white/70">500+ Ratings</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 sm:p-3 text-white min-w-25 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                  <span className="font-bold text-base sm:text-lg">25-35</span>
                </div>
                <div className="text-xs text-white/70">Minutes</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 sm:p-3 text-white min-w-25 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[20px]">
                    local_shipping
                  </span>
                  <span className="font-bold text-base sm:text-lg">$0</span>
                </div>
                <div className="text-xs text-white/70">Delivery Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Menu Categories */}
      <div className="sticky top-18.25 z-40 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-white/5 shadow-sm">
        <div className="px-4 lg:px-10 flex justify-center">
          <div className="w-full flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => onCategoryChange(tab.value)}
                  className={
                    isActive
                      ? 'px-4 py-2 rounded-full bg-secondary text-white font-bold text-sm whitespace-nowrap shadow-lg shadow-secondary/20'
                      : 'px-4 py-2 rounded-full text-secondary/70 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer'
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuHero;

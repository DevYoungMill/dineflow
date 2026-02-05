import { useState } from 'react';
import menuCategories from './menuCategories';

export default function Menus() {
  const [counts, setCounts] = useState({});

  const increment = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  };

  return (
    <section className="px-4 lg:px-10 py-10 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="mx-auto w-full">
        {menuCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-secondary dark:text-white mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                {category.icon}
              </span>
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((menu) => (
                <div
                  key={menu.id}
                  className="group bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-primary/30 dark:border-primary/30 ring-1 ring-primary/20 transition-all duration-300"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      alt={menu.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={menu.image}
                    />
                  </div>

                  <div className="px-2 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-heading text-base font-bold text-secondary dark:text-white leading-tight">
                        {menu.name}
                      </h4>
                      <span className="text-primary font-bold text-lg">
                        ${menu.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-secondary/60 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {menu.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-xs font-medium text-secondary/40">
                        Customizable
                      </div>

                      <div className="flex items-center gap-3 bg-red-600 rounded-full px-1 py-1 shadow-lg shadow-red-600/30">
                        <button
                          onClick={() => decrement(menu.id)}
                          className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-400 text-white flex items-center justify-center transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            remove
                          </span>
                        </button>

                        <span className="text-white font-bold text-sm w-4 text-center">
                          {counts[menu.id] || 0}
                        </span>

                        <button
                          onClick={() => increment(menu.id)}
                          className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-400 text-white flex items-center justify-center transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            add
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

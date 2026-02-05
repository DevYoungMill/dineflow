import { useState } from 'react';
import menuCategories from './menuCategories';
import MenuCard from './MenuCard';
import AddNewCard from './AddNewCard';

function MenuItems() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <>
      {/* CATEGORY HEADER */}
      <div className="mb-8 overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 min-w-max border-b border-slate-200 dark:border-slate-700 pb-1">
          {menuCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-t-xl text-sm transition-all font-semibold flex items-center gap-2
                ${
                  activeCategory.title === category.title
                    ? 'bg-white dark:bg-surface-dark border-b-2 border-primary text-primary shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
            >
              <span className="material-icons-round text-lg">
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}

          {/* ADD CATEGORY */}
          <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors ml-2">
            <span className="material-icons-round text-xl">add</span>
          </button>
        </div>
      </div>

      {/* ITEMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {activeCategory.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}

        {/* ADD NEW ITEM */}
        <AddNewCard category={activeCategory.title} />
      </div>
    </>
  );
}

export default MenuItems;

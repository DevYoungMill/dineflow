import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuCard from './MenuCard';
import AddNewCard from './AddNewCard';
import Spinner from '../../components/Spinner';

function MenuItems() {
  const { items, loading } = useSelector((state) => state.menu);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuCategories = useMemo(() => {
    if (!items || items.length === 0) return [];

    const grouped = items.reduce((acc, item) => {
      const category = item.categories || {};
      const title = category.title || 'Menu';
      if (!acc[title]) {
        acc[title] = {
          title,
          icon: category.icon || 'restaurant',
          items: [],
        };
      }
      acc[title].items.push(item);
      return acc;
    }, {});

    return Object.values(grouped);
  }, [items]);

  const activeCategory = menuCategories[activeIndex];

  return (
    <>
      {/* CATEGORY HEADER */}
      <div className="mb-8 overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 min-w-max border-b border-slate-200 dark:border-slate-700 pb-1">
          {menuCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2.5 rounded-t-xl text-sm transition-all font-semibold flex items-center gap-2
                ${
                  activeCategory?.title === category.title
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
      {loading ? (
        <div className="py-4 flex items-center justify-center">
          <Spinner />
        </div>
      ) : menuCategories.length === 0 ? (
        <div className="py-10 text-sm text-slate-500 dark:text-slate-400">
          No menu items available.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {activeCategory?.items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}

          {/* ADD NEW ITEM */}
          {activeCategory ? (
            <AddNewCard category={activeCategory.title} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default MenuItems;

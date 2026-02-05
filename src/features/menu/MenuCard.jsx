function MenuCard({ item }) {
  return (
    <div className="group bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col">
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={item.image}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {item.name}
          </h3>
          <span className="text-primary font-bold text-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-md">
            In Stock
          </span>

          <div className="flex space-x-1">
            <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <span className="material-icons-round text-lg">edit</span>
            </button>
            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <span className="material-icons-round text-lg">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;

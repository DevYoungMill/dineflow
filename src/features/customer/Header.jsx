function Header() {
  return (
    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="relative w-full md:w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-icons-round text-slate-400 text-xl">
            search
          </span>
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-white transition-all"
          placeholder="Search by Order ID, Customer..."
          type="text"
        />
      </div>
      <div className="flex items-center space-x-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <select className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-xl px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20">
          <option>All Status</option>
          <option>Pending</option>
          <option>Preparing</option>
          <option>Ready</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        <div className="flex items-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 cursor-pointer shadow-sm hover:border-primary/50 transition-colors">
          <span className="material-icons-round text-slate-400 text-sm mr-2">
            calendar_today
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
            Oct 1 - Oct 31
          </span>
        </div>
        <button
          className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary hover:border-primary/50 rounded-xl p-2 transition-all"
          title="Filter"
        >
          <span className="material-icons-round">filter_list</span>
        </button>
      </div>
    </div>
  );
}

export default Header;

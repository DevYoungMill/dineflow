function OrderStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* All Orders */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">
            All Orders
          </p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
            1,245
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
          <span className="material-icons-round">inventory_2</span>
        </div>
      </div>

      {/* Pending */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">
            Pending
          </p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
            45
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 flex items-center justify-center">
          <span className="material-icons-round">hourglass_top</span>
        </div>
      </div>

      {/* Completed */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">
            Completed
          </p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
            1,156
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center">
          <span className="material-icons-round">check_circle</span>
        </div>
      </div>

      {/* Cancelled */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">
            Cancelled
          </p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1">
            44
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
          <span className="material-icons-round">cancel</span>
        </div>
      </div>
    </div>
  );
}

export default OrderStats;

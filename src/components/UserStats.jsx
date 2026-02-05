function UserStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {/* Total Orders */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Total Orders
            </p>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              128
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">shopping_basket</span>
          </div>
        </div>

        <p className="text-xs text-slate-400 font-medium">
          +4 orders this month
        </p>
      </div>

      {/* Total Spent */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Total Spent
            </p>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              $24,500
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <span className="material-symbols-outlined">payments</span>
          </div>
        </div>

        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mb-2">
          <div
            className="bg-emerald-500 h-1.5 rounded-full transition-all"
            style={{ width: '65%' }}
          />
        </div>

        <p className="text-xs text-slate-400">Monthly budget: 65% used</p>
      </div>

      {/* DinePoints */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              DinePoints
            </p>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              1,240
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <span className="material-symbols-outlined">stars</span>
          </div>
        </div>

        <p className="text-xs text-slate-400 font-medium">
          Redeemable for $12.40
        </p>
      </div>

      {/* Avg Rating */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Avg Rating Given
            </p>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              4.8
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <span className="material-symbols-outlined">thumb_up</span>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <span className="material-symbols-outlined text-amber-400 text-sm">
            star
          </span>
          <span className="material-symbols-outlined text-amber-400 text-sm">
            star
          </span>
          <span className="material-symbols-outlined text-amber-400 text-sm">
            star
          </span>
          <span className="material-symbols-outlined text-amber-400 text-sm">
            star
          </span>
          <span className="material-symbols-outlined text-amber-400 text-sm">
            star
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserStats;

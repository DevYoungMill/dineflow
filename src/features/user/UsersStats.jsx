function UsersStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      {/* Total Users */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl">group</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
          Total Users
        </p>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
          1,248
        </h3>
      </div>

      {/* Active Roles */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl">shield</span>
          </div>

          <span className="text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            4 Roles
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
          Active Roles
        </p>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
          112
        </h3>
      </div>

      {/* Online Now */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl">toggle_on</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
          Online Now
        </p>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
          42
        </h3>
      </div>

      {/* Pending Approvals */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-2xl">
              pending_actions
            </span>
          </div>

          <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full">
            Action Required
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
          Pending Approvals
        </p>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">7</h3>
      </div>
    </div>
  );
}

export default UsersStats;

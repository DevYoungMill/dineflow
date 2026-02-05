const roles = [
  'All Users',
  'Admins',
  'Managers',
  'Agents',
  'Supports',
  'Customers',
];

function UsersFilterBar({ activeRole, setActiveRole }) {
  return (
    <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700/50 flex flex-wrap gap-4 justify-between items-center">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {roles.map((role) => {
          const isActive = activeRole === role;

          return (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-grab
                ${
                  isActive
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-200'
                    : 'bg-white dark:bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200'
                }
              `}
            >
              {role}
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between space-x-2">
        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round">filter_list</span>
        </button>

        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round">sort</span>
        </button>
      </div>
    </div>
  );
}

export default UsersFilterBar;

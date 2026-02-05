function SavedAddress() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">Saved Addresses</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Quick selection for faster delivery
          </h2>
        </div>
      </div>

      {/* Address List */}
      <div className="space-y-3">
        {/* Address Item */}
        <div className="flex items-center p-3 rounded-xl border-2 border-primary bg-primary/5 transition-all">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
            <span className="material-symbols-outlined text-sm">home</span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-slate-800 dark:text-white">
              Home
            </p>
            <p className="text-xs text-slate-500">
              123 Maple Street, Apt 4B, NY
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="text-slate-400 hover:text-primary transition"
              title="Edit Address"
            >
              <span className="material-symbols-outlined text-[20px]">
                edit
              </span>
            </button>

            <button
              className="text-slate-400 hover:text-red-500 transition"
              title="Delete Address"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>

            {/* Selected Indicator */}
            <div className="w-4 h-4 rounded-full border-4 border-primary bg-white ml-1"></div>
          </div>
        </div>

        {/* Address Item */}
        <div className="flex items-center p-3 rounded-xl border-2 border-slate-100 dark:border-slate-700  dark:hover:bg-slate-800/50 transition-all hover:border-primary hover:bg-primary/5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mr-3">
            <span className="material-symbols-outlined text-sm">work</span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-slate-800 dark:text-white">
              Work
            </p>
            <p className="text-xs text-slate-500">
              888 Business Ave, Floor 12, NY
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="text-slate-400 hover:text-primary transition"
              title="Edit Address"
            >
              <span className="material-symbols-outlined text-[20px]">
                edit
              </span>
            </button>

            <button
              className="text-slate-400 hover:text-red-500 transition"
              title="Delete Address"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>

            <div className="w-4 h-4 rounded-full border border-slate-300 ml-1"></div>
          </div>
        </div>
      </div>

      {/* Add New Address */}
      <button className="w-full mt-6 flex items-center justify-center space-x-2 text-primary font-bold text-xs py-3 border border-dashed border-primary/40 rounded-xl hover:bg-primary/5 transition-all">
        <span className="material-symbols-outlined text-sm">add</span>
        <span>Add New Address</span>
      </button>
    </div>
  );
}

export default SavedAddress;

function Pagination() {
  return (
    <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Showing{' '}
        <span className="font-bold text-slate-700 dark:text-slate-200">
          1–6
        </span>{' '}
        of{' '}
        <span className="font-bold text-slate-700 dark:text-slate-200">
          1,245
        </span>{' '}
        entries
      </p>

      <div className="flex items-center space-x-1">
        {/* Previous */}
        <button className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round text-[10px] cursor-pointer">
            chevron_left
          </span>
        </button>

        {/* Page 1 - active */}
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-sm shadow-primary/30 cursor-pointer">
          1
        </button>

        {/* Page 2 */}
        <button className="w-7 h-7 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer">
          2
        </button>

        {/* Next */}
        <button className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round text-[10px] cursor-pointer">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Pagination;

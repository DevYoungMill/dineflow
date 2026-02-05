function InputGrid({ label, value, prefix, suffix }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-2.5 text-slate-400 font-semibold">
            {prefix}
          </span>
        )}

        <input
          className={`w-full ${
            prefix ? 'pl-8' : ''
          } bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary outline-none transition-all`}
          type="number"
          defaultValue={value}
        />

        {suffix && (
          <span className="absolute right-4 top-2.5 text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputGrid;

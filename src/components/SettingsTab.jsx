export default function SettingsTabs() {
  return (
    <div className="mb-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
      <div className="flex space-x-8 min-w-max">
        {[
          'Platform Fees',
          'Payment Gateways',
          'Notifications',
          'Branding',
          'System Preferences',
        ].map((tab, index) => (
          <button
            key={tab}
            className={`pb-3 text-sm font-medium border-b-2 transition-all ${
              index === 0
                ? 'text-primary border-primary'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

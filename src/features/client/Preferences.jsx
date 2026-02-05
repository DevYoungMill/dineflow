export default function Preferences() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">Preferences</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Manage your notifications and app preferences
          </h2>
        </div>
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm">
        {/* Preferences List */}
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {/* Order Updates */}
          <PreferenceItem
            title="Order Updates"
            description="Receive SMS updates about your order status"
            defaultChecked
          />

          {/* Promotional Emails */}
          <PreferenceItem
            title="Promotional Emails"
            description="Get notified about special deals and discounts"
          />

          {/* Push Notifications */}
          <PreferenceItem
            title="Push Notifications"
            description="Get real-time alerts on your device"
            defaultChecked
          />

          {/* Dark Mode */}
          <PreferenceItem
            title="Dark Mode"
            description="Enable dark theme across the app"
            defaultChecked
          />

          {/* Location Recommendations */}
          <PreferenceItem
            title="Nearby Deals"
            description="Receive recommendations based on your location"
          />

          {/* New Restaurant Alerts */}
          <PreferenceItem
            title="New Dishes Alerts"
            description="Get notified when new meals are added"
            defaultChecked
          />
        </div>
      </div>
    </div>
  );
}

/* Reusable Toggle Row */
function PreferenceItem({ title, description, defaultChecked = false }) {
  return (
    <div className="p-4 md:p-5 flex items-center justify-between">
      <div>
        <p className="font-medium text-secondary dark:text-white text-sm">
          {title}
        </p>
        <p className="text-xs text-secondary/50 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          defaultChecked={defaultChecked}
          type="checkbox"
          className="sr-only peer"
        />
        <div
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
        after:transition-all dark:border-gray-600 peer-checked:bg-primary"
        ></div>
      </label>
    </div>
  );
}

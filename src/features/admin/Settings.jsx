import Button from '../../components/Button';
import CommissionStructure from '../../components/CommissionStructure';
import DeliveryConfiguration from '../../components/DeliveryConfiguration';
import SettingsTabs from '../../components/SettingsTab';

function Settings() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Settings</span>
            <span className="material-icons-round text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">Configuration</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Configure system preferences
          </h2>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <Button type="secondary" size="small">
            <span className="text-slate-600">Discard Changes</span>
          </Button>
          <Button size="small">Save Changes</Button>
        </div>
      </div>

      {/* Settings */}
      <SettingsTabs />
      <CommissionStructure />
      <DeliveryConfiguration />
    </div>
  );
}

export default Settings;

import InputGrid from './InputGrid';

export default function DeliveryConfiguration() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Delivery Configuration
          </h3>
          <p className="text-sm text-slate-500">
            Configure base delivery fees and distance calculations.
          </p>
        </div>

        {/* <Toggle /> */}
      </div>

      <div className="space-y-6">
        <InputGrid label="Base Delivery Fee" prefix="$" value="3.99" />
        <InputGrid label="Fee per Km/Mile" prefix="$" value="0.75" />

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Surge Pricing Multiplier
          </label>

          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            defaultValue="1.5"
            className="w-full h-2 bg-slate-200 rounded-lg accent-primary"
          />
        </div>
      </div>
    </div>
  );
}

import InputGrid from './InputGrid';

export default function CommissionStructure() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 p-6 mb-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Commission Structure
          </h3>
          <p className="text-sm text-slate-500">
            Define the revenue share model for different order types.
          </p>
        </div>

        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <span className="material-icons-round">percent</span>
        </div>
      </div>

      <div className="space-y-6">
        <InputGrid label="Delivery Orders (%)" suffix="%" value="15.00" />
        <InputGrid label="Pickup Orders (%)" suffix="%" value="5.00" />
        <InputGrid label="Table Reservations (Fixed)" prefix="$" value="1.50" />
        <InputGrid label="Minimum Commission Cap" prefix="$" value="0.50" />
      </div>
    </div>
  );
}

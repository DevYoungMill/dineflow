import OrderCard from '../features/order/OrderCard';
import { STATUS_STYLES } from '../utils/statusStyles';

function StatusColumn({ column }) {
  const styles = STATUS_STYLES[column.status];

  return (
    <div className="flex flex-col h-full bg-gray-50/50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5 bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className={`size-3 rounded-full ${styles.dot}`} />

          <h3 className="font-heading font-bold text-secondary dark:text-white">
            {column.title}
          </h3>

          <span
            className={`px-2 py-0.5 ${styles.badgeBg} ${styles.badgeText} text-xs rounded-full font-bold`}
          >
            {column.count}
          </span>
        </div>

        <button class="text-secondary/40 hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-sm">more_horiz</span>
        </button>
      </div>

      {/* Orders */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {column.orders.map((order) => (
          <OrderCard key={order.id} order={order} status={column.status} />
        ))}
      </div>
    </div>
  );
}

export default StatusColumn;

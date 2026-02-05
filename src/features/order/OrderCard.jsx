import { STATUS_STYLES } from '../../utils/statusStyles';

function OrderCard({ order, status }) {
  const styles = STATUS_STYLES[status];

  return (
    <div
      className={`bg-white dark:bg-surface-dark rounded-xl p-3 border-l-4 ${styles.border} shadow-sm cursor-grab space-y-4`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-lg font-bold font-heading text-secondary dark:text-white">
            {order.id}
          </span>

          <div className="flex items-center gap-1 text-xs font-medium text-secondary/60 mt-1">
            <span className="material-symbols-outlined text-[14px]">
              {order.icon}
            </span>
            {order.type}
          </div>
        </div>

        {order.time && (
          <div className="flex flex-col items-end gap-1">
            <span
              className={`text-sm font-bold ${styles.timeText} ${styles.timeBg} px-3 py-1 rounded-lg`}
            >
              {order.time}
            </span>
            <span className="text-[11px] text-secondary/40">
              {order.createdAt}
            </span>
          </div>
        )}
      </div>

      {/* Items */}
      <div className="space-y-3">
        {order.items.map((item, index) =>
          typeof item === 'string' ? (
            <p key={index} className="text-sm text-secondary/70">
              {item}
            </p>
          ) : (
            <div key={index} className="flex gap-1 text-sm">
              <span className="font-bold w-4">{item.qty}x</span>
              <div>
                <p className="font-medium">{item.name}</p>
                {item.note && (
                  <p className="text-xs italic text-secondary/50">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-2.5 rounded-lg ${styles.actionBg} ${styles.actionText} text-xs font-bold uppercase cursor-pointer tracking-wider ${styles.actionHover} transition-colors`}
      >
        {styles.actionLabel}
      </button>
    </div>
  );
}

export default OrderCard;

import OrderStats from '../../components/OrderStats';
import OrderBoard from '../order/OrderBoard';

function Orders() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <span className="material-icons-round text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">Orders</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Real-time order management
          </h2>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Date Range:
          </span>
          <div className="flex items-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 cursor-pointer shadow-sm hover:border-primary/50 transition-colors">
            <span className="material-icons-round text-slate-400 text-sm mr-2">
              calendar_today
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
              Oct 1 - Oct 31
            </span>
          </div>
        </div>
      </div>
      <OrderStats />
      <OrderBoard />
    </div>
  );
}

export default Orders;

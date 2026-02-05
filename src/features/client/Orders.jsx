import UserOrders from '../../components/UserOrders';

function Orders() {
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
            <span className="text-primary font-medium">Order History</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Track, reorder, and manage your past meals
          </h2>
        </div>
      </div>

      <UserOrders />
    </div>
  );
}

export default Orders;

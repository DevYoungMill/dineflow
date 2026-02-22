import { Link } from 'react-router-dom';
import UserOrders from '../../components/UserOrders';
import UserStats from '../../components/UserStats';
import { useUser } from '../../context/useUser';

function Dashboard() {
  const { fullName } = useUser();
  const firstName = (fullName || 'User').trim().split(/\s+/)[0] || 'User';

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
            <span className="text-primary font-medium">Home</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Welcome back, <span className="text-primary">{firstName}!</span>{' '}
            Here's a quick look at your appetite.
          </h2>
        </div>
      </div>

      {/* Menu Items */}
      <UserStats />

      <div class="flex items-center justify-between mb-6">
        <h3 class="font-heading text-xl font-bold text-secondary dark:text-white">
          Recent Orders
        </h3>
        <Link
          class="text-primary text-sm font-semibold hover:underline"
          to="/user/orders"
        >
          View All
        </Link>
      </div>
      <UserOrders limit={3} />
    </div>
  );
}

export default Dashboard;

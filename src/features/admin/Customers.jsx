import Button from '../../components/Button';
import CustomerTable from '../customer/CustomerTable';

function Customers() {
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
            <span className="text-primary font-medium">Customers</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Manage all customer orders in real time
          </h2>
        </div>

        <div class="mt-4 md:mt-0 flex items-center space-x-3">
          <Button type="secondary" size="small">
            <span class="material-icons-round text-base text-slate-600">
              file_download
            </span>
            <span class="text-sm font-medium text-slate-600">Export CSV</span>
          </Button>
        </div>
      </div>

      {/* Menu Items */}
      <CustomerTable />
    </div>
  );
}

export default Customers;

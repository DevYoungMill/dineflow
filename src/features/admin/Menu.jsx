import Button from '../../components/Button';
import MenuItems from '../menu/MenuItems';

function Menu() {
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
            <span className="text-primary font-medium">Menu Management</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Instant menu updates in real time
          </h2>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <Button size="small" type="secondary">
            <span className="material-icons-round text-base text-slate-500">
              category
            </span>
            <span className="text-sm font-medium text-slate-500">
              Edit Categories
            </span>
          </Button>
        </div>
      </div>

      {/* Menu Items */}
      <MenuItems />
    </div>
  );
}

export default Menu;

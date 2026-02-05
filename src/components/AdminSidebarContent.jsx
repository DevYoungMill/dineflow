import SidebarLink from './SidebarLink';

export default function AdminSidebarContent() {
  return (
    <>
      {/* Logo */}
      <div className="hidden lg:flex h-24 items-center px-8 border-b border-slate-300 dark:border-slate-800">
        <img src="/dineflow.png" alt="DineFlow Logo" width="150" />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">
          Dashboard
        </div>

        <SidebarLink to="/admin/dashboard" icon="dashboard" label="Analytics" />

        <SidebarLink to="/admin/menu" icon="restaurant_menu" label="Menu" />

        <SidebarLink
          to="/admin/orders"
          icon="receipt_long"
          label="Orders"
          badge="12"
        />

        <SidebarLink to="/admin/customers" icon="people" label="Customers" />

        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-4 px-4">
          Settings
        </div>
        <SidebarLink
          to="/admin/user-roles"
          icon="admin_panel_settings"
          label="User & Roles"
        />
        <SidebarLink
          to="/admin/settings"
          icon="settings"
          label="Configuration"
        />
      </nav>
    </>
  );
}

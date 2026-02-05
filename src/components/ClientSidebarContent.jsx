import SidebarLink from './SidebarLink';

export default function ClientSidebarContent() {
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

        <SidebarLink to="/user/dashboard" icon="home" label="Home" />

        <SidebarLink
          to="/user/orders"
          icon="receipt_long"
          label="Order History"
          badge="12"
        />

        <SidebarLink
          to="/user/address"
          icon="location_on"
          label="Saved Address"
        />

        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-4 px-4">
          Settings
        </div>
        <SidebarLink to="/user/profile" icon="person" label="Profile" />
        <SidebarLink to="/user/settings" icon="settings" label="Preferences" />
      </nav>
    </>
  );
}

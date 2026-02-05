import AdminSidebarContent from './AdminSidebarContent';
import ClientSidebarContent from './ClientSidebarContent';

export default function Sidebar({ open, onClose, variant = 'admin' }) {
  const SidebarContent =
    variant === 'admin' ? AdminSidebarContent : ClientSidebarContent;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-sidebar-light dark:bg-sidebar-dark hidden xl:flex flex-col fixed inset-y-0 z-40 shadow-xl">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ${
          open ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          onClick={onClose}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-300 dark:border-slate-800">
            <img src="/dineflow.png" width="140" alt="logo" />
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-primary"
            >
              <span className="material-icons-round text-2xl">close</span>
            </button>
          </div>

          <SidebarContent />
        </aside>
      </div>
    </>
  );
}

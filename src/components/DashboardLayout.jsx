import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';

export default function DashboardLayout({ variant = 'admin' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = variant === 'admin' || variant === 'user';

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Sidebar only for admin */}
      {showSidebar && (
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          variant={variant}
        />
      )}

      <main
        className={`flex-1 flex flex-col h-screen overflow-hidden ${
          showSidebar ? 'xl:ml-72' : ''
        }`}
      >
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          showMenu={showSidebar}
        />

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

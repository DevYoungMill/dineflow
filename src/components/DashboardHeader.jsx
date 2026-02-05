export default function DashboardHeader({ onMenuClick }) {
  return (
    <header className="h-20 bg-surface-light dark:bg-surface-dark/50 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 z-40 sticky top-0 border-b border-slate-200 dark:border-white/5">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="xl:hidden p-2 text-slate-500 hover:text-primary transition-colors"
      >
        <span className="material-icons-round text-2xl">menu</span>
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2.5 w-96">
        <span className="material-icons-round text-slate-400 mr-2">search</span>
        <input
          className="bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 w-full"
          placeholder="Search orders, menus, or customers..."
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-2xl">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Messages */}
        <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round text-2xl">chat_bubble</span>
          <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
            4
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center pl-2">
          <img
            alt="Admin"
            className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxSYA4rejDe62Xp1d9K8YiUWYeBAy0j-c6sl3PEc_MviAAhGuyigoTKQkLrKZxuS4eKo9wYxdoS2aHU-gCdqnYXoi_hErm3w6JuoYcpxWGG-r_kzDI4yLY33U0QEqdbwNcARAOXduisdMGOngq1yKepxXC-SZeUfbAN9iOyeyWbxWDtUB65UKFb9NbjuVbcPJKkyg2NAPSyQ1WYHU0-V5moi4fZNeXZcv8J7qPxhp2BzBD5t0GmLsWNI56QjqQI97Rpbb72haXpuVY"
          />

          <div className="hidden md:block ml-3">
            <p className="text-sm font-bold text-slate-800 dark:text-white">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

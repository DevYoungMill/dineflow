import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/useUser';
import { signOut } from '../services/apiAuth';

export default function DashboardHeader({ onMenuClick, variant = 'user' }) {
  const navigate = useNavigate();
  const { fullName, role, avatarUrl } = useUser();
  const profileMenuRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const isProfileMenuOpen = isHovered || isPinnedOpen;
  const displayName = fullName || 'User';

  const normalizedRole = (role || variant || 'user').toLowerCase();
  const profilePath =
    normalizedRole === 'admin' ? '/admin/profile' : '/user/profile';

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsPinnedOpen(false);
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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
        <div
          ref={profileMenuRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            className="flex items-center pl-2 cursor-pointer"
            aria-haspopup="menu"
            aria-expanded={isProfileMenuOpen}
            onClick={() => {
              setIsPinnedOpen((open) => !open);
            }}
          >
            <img
              alt={displayName || 'Profile'}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm object-cover"
              src={
                avatarUrl ||
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSYA4rejDe62Xp1d9K8YiUWYeBAy0j-c6sl3PEc_MviAAhGuyigoTKQkLrKZxuS4eKo9wYxdoS2aHU-gCdqnYXoi_hErm3w6JuoYcpxWGG-r_kzDI4yLY33U0QEqdbwNcARAOXduisdMGOngq1yKepxXC-SZeUfbAN9iOyeyWbxWDtUB65UKFb9NbjuVbcPJKkyg2NAPSyQ1WYHU0-V5moi4fZNeXZcv8J7qPxhp2BzBD5t0GmLsWNI56QjqQI97Rpbb72haXpuVY'
              }
            />

            <div className="hidden md:flex md:flex-col ml-3">
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                {displayName}
              </p>
              <p className="text-xs text-left text-slate-500 dark:text-slate-400 capitalize">
                {role}
              </p>
            </div>

            <span className="material-symbols-outlined ml-1 text-slate-500 text-[20px]">
              keyboard_arrow_down
            </span>
          </button>

          <div
            className={`absolute right-0 top-full pt-2 w-40 z-50 transition-all duration-150 ${
              isProfileMenuOpen
                ? 'opacity-100 pointer-events-auto translate-y-0'
                : 'opacity-0 pointer-events-none translate-y-1'
            }`}
          >
            <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-lg p-1">
            <Link
              className="block rounded-md px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              to={profilePath}
              onClick={() => {
                setIsPinnedOpen(false);
                setIsHovered(false);
              }}
            >
              Profile
            </Link>
            <button
              className="w-full text-left rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
              onClick={async () => {
                setIsPinnedOpen(false);
                setIsHovered(false);
                await handleLogout();
              }}
              type="button"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Menu', path: '/menu', icon: 'restaurant_menu' },
    { name: 'About Us', path: '/about', icon: 'info' },
    { name: 'Checkout', path: '/checkout', icon: 'shopping_cart' },
    { name: 'Tracking', path: '/tracking', icon: 'bike_lane' },
  ];

  return (
    <header className="px-4 lg:px-10 sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f3e9e8] dark:border-white/10">
      <div className="py-4 flex justify-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <NavLink to="/">
            <img src="dineflow.png" alt="DineFlow Logo" width="150" />
          </NavLink>

          {/* Desktop Menu (from md) */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-colors
         ${
           isActive
             ? 'text-primary border-b-2 border-primary pb-1'
             : 'hover:text-primary'
         }`
                }
              >
                <span
                  className={
                    'material-symbols-outlined text-primary/85 text-[20px]'
                  }
                >
                  {link.icon}
                </span>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Buttons (from lg) */}
          <div className="hidden lg:flex gap-3">
            <Button size="small" to="/login" type="secondary">
              Log in
            </Button>
            <Button size="small" to="/signup">
              Get Started
            </Button>
          </div>

          {/* Hamburger (below md) */}
          <button
            className="lg:hidden text-primary hover:text-primary/80 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 pb-6 space-y-6 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col gap-4 pt-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-colors
         ${
           isActive
             ? 'text-primary border-b-2 border-primary pb-1'
             : 'hover:text-primary'
         }`
                }
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  {link.icon}
                </span>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Button to="/login" type="secondary" full>
              Log in
            </Button>
            <Button to="/signup" full>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

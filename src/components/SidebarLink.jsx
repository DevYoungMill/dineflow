import { NavLink } from 'react-router-dom';

export default function SidebarLink({ to, icon, label, badge }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 rounded-[10px] transition-all group ${
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-slate-500 hover:text-primary hover:bg-primary/10'
        }`
      }
    >
      <span className="material-icons-round text-xl mr-3 group-hover:text-primary transition-colors">
        {icon}
      </span>

      <span className="font-medium">{label}</span>

      {badge && (
        <span className="ml-auto bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  );
}

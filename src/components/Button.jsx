import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  type = 'primary',
  onClick,
  size = 'medium',
}) {
  // Base styles
  const base =
    'flex items-center justify-center gap-1 rounded-lg font-bold text-center tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer';

  // Type styles
  const types = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg',
    secondary:
      'bg-white text-secondary border border-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-primary',
    tertiary:
      'bg-primary text-white font-bold shadow-lg hover:-translate-y-1 transition-all',
  };

  // Size styles
  const sizes = {
    small: 'px-4 py-2 text-xs md:text-sm min-w-[120px]',
    medium: 'px-5 py-3 text-xs md:text-base min-w-[150px]',
    large: 'px-8 py-3 text-base min-w-[200px]',
  };

  const finalClass = `${base} ${types[type]} ${sizes[size]}`;

  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClass}>
      {children}
    </button>
  );
}

export default Button;

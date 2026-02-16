import { Outlet, useLocation } from 'react-router-dom';
import CartIndicator from './CartIndicator';

export default function AppLayout() {
  const location = useLocation();
  const showCartIndicator = ['/', '/menu', '/about'].includes(location.pathname);

  return (
    <div className="max-w-7xl mx-auto min-h-screen w-full bg-background-light dark:bg-background-dark">
      <Outlet />
      {showCartIndicator ? <CartIndicator /> : null}
    </div>
  );
}


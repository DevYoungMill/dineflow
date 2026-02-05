import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen w-full bg-background-light dark:bg-background-dark">
      <Outlet />
    </div>
  );
}

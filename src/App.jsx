import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About';

import DashboardLayout from './components/DashboardLayout';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMenu from './pages/admin/AdminMenu';
import AdminOrders from './pages/admin/AdminOrders';
import AdminSettings from './pages/admin/AdminSettings';
import AdminUsers from './pages/admin/AdminUsers';
import Checkout from './pages/Checkout';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientOrders from './pages/client/ClientOrders';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import Tracking from './pages/Tracking';
import ClientAddress from './pages/client/ClientAddress';
import ClientProfile from './pages/client/ClientProfile';
import ClientSettings from './pages/client/ClientSettings';
import { menuLoader } from './features/menu/menuLoaders';
import Spinner from './components/Spinner';
import { cartLoader } from './features/cart/cartLoaders';
import { requireRoleLoader } from './features/auth/authLoaders';
import AdminProfile from './pages/admin/AdminProfile';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Layout */}
      <Route element={<AppLayout />} loader={cartLoader}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} loader={menuLoader} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order/new" element={<CreateOrder />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Admin Layout */}
      <Route
        path="admin"
        element={<DashboardLayout variant="admin" />}
        loader={requireRoleLoader('admin')}
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />

        {/* future admin routes */}
        <Route path="orders" element={<AdminOrders />} />
        <Route path="menu" element={<AdminMenu />} loader={menuLoader} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="user-roles" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route>

      {/* Client Layout */}
      <Route
        path="user"
        element={<DashboardLayout variant="user" />}
        loader={requireRoleLoader('client')}
      >
        <Route index element={<ClientDashboard />} />
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="orders" element={<ClientOrders />} />
        <Route path="address" element={<ClientAddress />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="settings" element={<ClientSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </>,
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} hydrateFallbackElement={<Spinner />} />
  );
}

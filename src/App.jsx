import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* Admin Layout */}
        <Route path="admin" element={<DashboardLayout variant="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          {/* future admin routes */}
          <Route path="orders" element={<AdminOrders />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="user-roles" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Client Layout */}
        <Route path="user" element={<DashboardLayout variant="user" />}>
          <Route index element={<ClientDashboard />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="orders" element={<ClientOrders />} />
          <Route path="address" element={<ClientAddress />} />
          <Route path="profile" element={<ClientProfile />} />
          <Route path="settings" element={<ClientSettings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

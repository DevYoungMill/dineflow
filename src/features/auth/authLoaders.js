import { redirect } from 'react-router-dom';
import { getCurrentUserWithProfile, getSession } from '../../services/apiAuth';

export const requireUserLoader = async () => {
  const session = await getSession();
  if (!session) {
    return redirect('/login');
  }
  return null;
};

export const requireRoleLoader = (requiredRole) => async () => {
  const session = await getSession();
  if (!session) {
    return redirect('/login');
  }

  const currentUser = await getCurrentUserWithProfile();
  const currentRole = currentUser?.profile?.role?.toLowerCase();
  const normalizedRequiredRole = requiredRole?.toLowerCase();

  if (currentRole === normalizedRequiredRole) {
    return null;
  }

  if (currentRole === 'admin') {
    return redirect('/admin/dashboard');
  }

  if (currentRole === 'client') {
    return redirect('/user/dashboard');
  }

  return redirect('/login');
};

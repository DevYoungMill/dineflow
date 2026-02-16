import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCurrentUserWithProfile } from '../services/apiAuth';
import { UserContext } from './userContextStore';

const USER_CACHE_KEY = 'dineflow:user-cache';

function getCachedUser() {
  if (typeof window === 'undefined') return null;

  try {
    const cached = window.sessionStorage.getItem(USER_CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

export function UserProvider({ children, variant = 'user' }) {
  const [user, setUser] = useState(() => getCachedUser());
  const [loading, setLoading] = useState(() => !getCachedUser());

  const refreshUser = useCallback(async () => {
    try {
      const currentUser = await getCurrentUserWithProfile();
      setUser(currentUser);
      if (typeof window !== 'undefined') {
        if (currentUser) {
          window.sessionStorage.setItem(
            USER_CACHE_KEY,
            JSON.stringify(currentUser),
          );
        } else {
          window.sessionStorage.removeItem(USER_CACHE_KEY);
        }
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const fallbackRole = variant === 'admin' ? 'admin' : 'client';
  const role = user?.profile?.role || fallbackRole;

  const value = useMemo(
    () => ({
      user,
      loading,
      fullName: user?.profile?.fullName || 'User',
      role,
      avatarUrl: user?.profile?.avatarUrl || null,
      refreshUser,
    }),
    [loading, refreshUser, role, user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

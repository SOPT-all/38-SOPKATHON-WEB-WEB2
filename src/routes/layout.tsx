import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getOptionalStoredBrowserToken } from '@/pages/home/utils/home-session';
import { routePath } from '@/routes/path';
import BottomNavigation from '@/shared/ui/BottomNavigation';

import {
  bottomNavigationHistoryKey,
  isBottomNavigationPath,
} from './bottomNavigationHistory';

const Layout = () => {
  const { pathname } = useLocation();
  const hasToken = Boolean(getOptionalStoredBrowserToken());

  useEffect(() => {
    if (!hasToken) return;
    if (isBottomNavigationPath(pathname)) {
      sessionStorage.setItem(bottomNavigationHistoryKey, pathname);
    }
  }, [pathname, hasToken]);

  if (!hasToken) {
    return <Navigate to={routePath.ONBOARDING} replace />;
  }

  return (
    <>
      <main className='min-h-dvh pb-[8.3rem]'>
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  );
};

export default Layout;

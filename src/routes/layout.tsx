import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import BottomNavigation from '@/shared/ui/BottomNavigation';

import {
  bottomNavigationHistoryKey,
  isBottomNavigationPath,
} from './bottomNavigationHistory';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isBottomNavigationPath(pathname)) {
      sessionStorage.setItem(bottomNavigationHistoryKey, pathname);
    }
  }, [pathname]);

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

import { Outlet } from 'react-router-dom';

import BottomNavigation from '@/shared/ui/BottomNavigation';

const Layout = () => {
  return (
    <>
      <main className="min-h-dvh pb-[8.3rem]">
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  );
};

export default Layout;

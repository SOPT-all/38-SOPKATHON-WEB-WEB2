import { Outlet, useLocation } from 'react-router-dom';

import {
  bottomNavigationHistoryKey,
  isBottomNavigationPath,
} from '@/routes/bottomNavigationHistory';
import { routePath } from '@/routes/path';
import BackButton from '@/shared/ui/BackButton';

const getAnswerBackPath = () => {
  const lastBottomNavigationPath = sessionStorage.getItem(
    bottomNavigationHistoryKey,
  );

  return lastBottomNavigationPath &&
    isBottomNavigationPath(lastBottomNavigationPath)
    ? lastBottomNavigationPath
    : routePath.HOME;
};

const AnswerLayout = () => {
  const { pathname } = useLocation();
  const isAnswerDetailPage = pathname !== routePath.ANSWER;

  return (
    <main className='min-h-dvh bg-background'>
      <header className='flex items-center px-[2rem] pt-[1.6rem] pb-[1.2rem]'>
        {isAnswerDetailPage ? (
          <BackButton delta={-1} />
        ) : (
          <BackButton to={getAnswerBackPath()} />
        )}
      </header>

      <Outlet />
    </main>
  );
};

export default AnswerLayout;

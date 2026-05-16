import { NavLink } from 'react-router-dom';

import { routePath } from '@/routes/path';
import {
  IcHome,
  IcHomeFilled,
  IcRecord,
  IcRecordFilled,
} from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

const navigationItems = [
  {
    label: '홈',
    path: routePath.HOME,
    Icon: IcHome,
    ActiveIcon: IcHomeFilled,
  },
  {
    label: '기록',
    path: routePath.ARCHIVE,
    Icon: IcRecord,
    ActiveIcon: IcRecordFilled,
  },
] as const;

const BottomNavigation = () => {
  return (
    <nav
      aria-label='하단 내비게이션'
      className='fixed bottom-0 left-1/2 z-10 w-full max-w-[37.5rem] -translate-x-1/2 overflow-hidden rounded-t-[1.6rem] border-t border-neutral-100 bg-white p-[0.8rem]'
    >
      <ul className='flex items-center justify-center'>
        {navigationItems.map(({ label, path, Icon, ActiveIcon }) => (
          <li key={path} className='min-w-0 flex-1'>
            <NavLink
              to={path}
              end={path === routePath.HOME}
              className='flex flex-col items-center gap-[0.2rem] rounded-full px-[2rem] py-[0.8rem]'
            >
              {({ isActive }) => {
                const NavigationIcon = isActive ? ActiveIcon : Icon;

                return (
                  <>
                    <NavigationIcon
                      className={cn(
                        'size-[2.4rem]',
                        isActive ? 'text-primary-500' : 'text-neutral-100',
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={cn(
                        isActive ? 'typo-caption-sb-12' : 'typo-caption-r-12',
                        isActive ? 'text-neutral-900' : 'text-neutral-100',
                      )}
                    >
                      {label}
                    </span>
                  </>
                );
              }}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;

import { NavLink } from 'react-router-dom';

import { routePath } from '@/routes/path';
import { cn } from '@/shared/utils/cn';

const navigationItems = [
  { label: '홈', path: routePath.HOME },
  { label: '기록', path: routePath.ARCHIVE },
] as const;

const BottomNavigation = () => {
  return (
    <nav
      aria-label="하단 내비게이션"
      className="fixed bottom-0 left-1/2 z-10 w-full min-w-150 max-w-172 -translate-x-1/2 rounded-t-[2.4rem] bg-white px-[5.1rem] pb-[2.4rem] pt-[1.2rem] shadow-[0_-0.4rem_1rem_rgba(0,0,0,0.05)]"
    >
      <ul className="flex items-center justify-center gap-[12.7rem]">
        {navigationItems.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === routePath.HOME}
              className={({ isActive }) =>
                cn(
                  'typo-caption-sb-10 block min-w-[2.2rem] py-[1.35rem] text-center text-neutral-200',
                  isActive && 'text-primary-500',
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;

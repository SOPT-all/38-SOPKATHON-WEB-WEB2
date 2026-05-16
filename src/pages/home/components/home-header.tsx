import { useEffect, useRef, useState } from 'react';

import { IcMy } from '@/shared/assets/icons';
import { imgLogo } from '@/shared/assets/images';
import { useUserRole } from '@/shared/hooks/use-user-role';
import { type UserRole } from '@/shared/mocks/answer-progress.mock';
import { cn } from '@/shared/utils/cn';

const roleOptions = [
  { label: '부모님', value: 'parent' },
  { label: '자녀', value: 'child' },
] as const;

const HomeHeader = () => {
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const { isSwappingRole, selectUserRole, userRole } = useUserRole();
  const roleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeRoleMenu = (event: MouseEvent) => {
      if (
        roleMenuRef.current &&
        !roleMenuRef.current.contains(event.target as Node)
      ) {
        setIsRoleMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', closeRoleMenu);

    return () => {
      document.removeEventListener('mousedown', closeRoleMenu);
    };
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    selectUserRole(role);
    setIsRoleMenuOpen(false);
  };

  return (
    <header className='flex h-[5.6rem] w-full items-center justify-between bg-white px-[2.4rem]'>
      <img src={imgLogo} alt='머뭇' className='h-[2.6rem] w-[4.4rem]' />

      <div ref={roleMenuRef} className='relative'>
        <button
          type='button'
          aria-expanded={isRoleMenuOpen}
          aria-haspopup='menu'
          aria-label='사용자 모드 선택'
          onClick={() => {
            setIsRoleMenuOpen((prev) => !prev);
          }}
          className='flex size-[2.4rem] items-center justify-center text-black'
        >
          <IcMy className='size-[2.4rem] text-black' aria-hidden='true' />
        </button>

        {isRoleMenuOpen && (
          <div className='absolute top-[3.6rem] right-0 z-20 flex w-[18rem] flex-col gap-[1.2rem] rounded-[1.6rem] bg-white p-[1.2rem] shadow-[0_0_0.4rem_rgba(156,144,155,0.25)]'>
            <p className='typo-body-sb-14 px-[0.2rem] text-neutral-700'>
              사용자 모드
            </p>

            <div className='flex w-full items-center rounded-[1rem] bg-neutral-50'>
              {roleOptions.map(({ label, value }) => {
                const isSelected = userRole === value;

                return (
                  <button
                    key={value}
                    type='button'
                    role='menuitemradio'
                    aria-checked={isSelected}
                    disabled={isSwappingRole}
                    onClick={() => {
                      handleRoleSelect(value);
                    }}
                    className={cn(
                      'typo-body-r-14 flex flex-1 items-center justify-center rounded-[0.8rem] px-[0.4rem] py-[0.6rem] text-neutral-300',
                      isSelected &&
                        'typo-body-sb-14 border-primary-500 bg-background text-primary-500 border',
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;

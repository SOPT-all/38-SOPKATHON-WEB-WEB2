import { IcMy } from '@/shared/assets/icons';
import { imgLogo } from '@/shared/assets/images';

export const HomeHeader = () => {
  return (
    <header className='flex h-[5.6rem] w-full items-center justify-between bg-white px-[2.4rem]'>
      <img src={imgLogo} alt='머뭇' className='h-[2.6rem] w-[4.4rem]' />

      <button
        type='button'
        aria-label='마이페이지'
        className='flex size-[2.4rem] items-center justify-center text-black'
      >
        <IcMy className='size-[2.4rem] text-black' aria-hidden='true' />
      </button>
    </header>
  );
};

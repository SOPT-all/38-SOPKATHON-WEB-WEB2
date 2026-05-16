import { useNavigate } from 'react-router-dom';

import { routePath } from '@/routes/path';
import { IcChevronLeft } from '@/shared/assets/icons';

interface BackButtonProps {
  delta?: number;
  to?: string;
}

const BackButton = ({ delta, to = routePath.HOME }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      aria-label='Back'
      onClick={() => {
        if (typeof delta === 'number') {
          void navigate(delta);
          return;
        }

        void navigate(to);
      }}
      className='flex size-[4rem] items-center justify-center rounded-full bg-white text-black shadow-[0_0.2rem_0.4rem_rgba(0,0,0,0.05)]'
    >
      <IcChevronLeft className='size-[2rem] text-black' aria-hidden='true' />
    </button>
  );
};

export default BackButton;

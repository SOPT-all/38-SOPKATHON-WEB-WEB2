import { Link } from 'react-router-dom';

import { IcArrowRight, IcCameraFilled } from '@/shared/assets/icons';

interface RecordCardProps {
  question: string;
  date: string;
  to: string;
}

const RecordCard = ({ question, date, to }: RecordCardProps) => {
  return (
    <Link
      to={to}
      className='flex h-[8rem] w-[32.7rem] items-center gap-[1.6rem] rounded-[1.6rem] bg-white px-[1.4rem] py-[1.6rem] shadow-[0px_0px_4px_0px_#ffd0e8]'
    >
      <div className='bg-primary-50 flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full'>
        <IcCameraFilled className='text-primary-500 h-[1.8rem] w-[1.8rem]' />
      </div>
      <div className='flex flex-1 flex-col gap-[0.4rem]'>
        <div className='flex items-center justify-between gap-[0.8rem]'>
          <h3 className='typo-body-sb-16 text-neutral-900'>{question}</h3>
          <IcArrowRight className='h-[2rem] w-[2rem] text-neutral-200' />
        </div>
        <time className='typo-caption-r-12 text-neutral-200'>{date}</time>
      </div>
    </Link>
  );
};

export default RecordCard;

import { useNavigate } from 'react-router-dom';

import { routePath } from '@/routes/path';
import { TextButton } from '@/shared/ui';

interface HomeQuestionCardProps {
  hasAnsweredToday?: boolean;
  question?: string;
}

const HomeQuestionCard = ({
  hasAnsweredToday = false,
  question = '가장 행복했던 순간은 언제인가요?',
}: HomeQuestionCardProps) => {
  const navigate = useNavigate();

  return (
    <section className='flex w-[32.7rem] flex-col gap-[2.7rem] overflow-hidden rounded-[1.6rem] bg-white p-[1.6rem]'>
      <div className='flex flex-col gap-[1.9rem]'>
        <span className='typo-body-sb-14 bg-primary-50 text-primary-500 w-fit rounded-[0.4rem] px-[0.8rem] py-[0.2rem]'>
          오늘의 질문
        </span>

        <h2 className='typo-head-sb-18 flex items-center gap-[0.2rem] text-neutral-900'>
          <span className='text-primary-500'>Q.</span>
          <span>{question}</span>
        </h2>
      </div>

      <TextButton
        className='w-full'
        disabled={hasAnsweredToday}
        size='large'
        onClick={() => {
          void navigate(routePath.ANSWER);
        }}
      >
        {hasAnsweredToday ? '답변 완료' : '답변하기'}
      </TextButton>
    </section>
  );
};

export default HomeQuestionCard;

import { type ComponentPropsWithoutRef } from 'react';

import { Chip, TextButton } from '@/shared/ui';

type QuestionCardState = 'default' | 'complete';

type QuestionCardProps = Omit<ComponentPropsWithoutRef<'article'>, 'children'> &
  {
    question: string;
    state?: QuestionCardState;
    onAnswerClick?: () => void;
  };

export default function QuestionCard({
  question,
  onAnswerClick,
  state = 'default',
  ...props
}: QuestionCardProps) {
  const isComplete = state === 'complete';

  return (
    <article
      className='flex h-[17.4rem] w-[32.7rem] flex-col rounded-[1.6rem] bg-white p-[1.6rem]'
      {...props}
    >
      <Chip variant="question">오늘의 질문</Chip>

      <p className="mt-[1.9rem] truncate text-neutral-900 typo-head-sb-18">
        <span className="text-primary-500 mr-[0.2rem]">Q.</span>
        {question}
      </p>

      <TextButton
        className="mt-[2.7rem] w-full"
        onClick={onAnswerClick}
        size="small"
        state={isComplete ? 'disabled' : 'default'}
      >
        {isComplete ? '답변완료' : '답변하기'}
      </TextButton>
    </article>
  );
}

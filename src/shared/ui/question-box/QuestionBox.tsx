import { type ComponentPropsWithoutRef } from 'react';

import Chip from '@/shared/ui/chip/Chip';
import { cn, cva, type VariantProps } from '@/shared/utils/cn';

const questionBoxVariants = cva(
  'flex w-[32.7rem] items-center gap-[0.8rem] rounded-[1.6rem] bg-white shadow-[0_0_0.4rem_0_var(--color-primary-100)]',
  {
    variants: {
      variant: {
        complete: 'px-[2.4rem] py-[1.6rem]',
        today: 'px-[1.2rem] py-[1.6rem]',
      },
    },
    defaultVariants: {
      variant: 'complete',
    },
  },
);

const VARIANT_LABEL = {
  complete: '완료된 질문',
  today: '오늘의 질문',
} as const;

type QuestionBoxProps = Omit<ComponentPropsWithoutRef<'article'>, 'children'> &
  VariantProps<typeof questionBoxVariants> & {
    question: string;
    date: Date;
    imageSrc?: string;
    imageAlt?: string;
  };

const formatTwoDigits = (value: number) => String(value).padStart(2, '0');

export default function QuestionBox({
  variant = 'complete',
  question,
  date,
  imageSrc,
  imageAlt = '',
  className,
  ...props
}: QuestionBoxProps) {
  const currentVariant = variant ?? 'complete';
  const year = date.getFullYear();
  const month = formatTwoDigits(date.getMonth() + 1);
  const day = formatTwoDigits(date.getDate());

  return (
    <article
      className={cn(questionBoxVariants({ variant }), className)}
      {...props}
    >
      {currentVariant === 'today' && (
        <figure className='from-primary-100 to-primary-50 outline-primary-400 relative h-[6.4rem] w-[6.4rem] shrink-0 overflow-hidden rounded-full bg-gradient-to-br outline outline-[0.035rem] outline-offset-[-0.035rem]'>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className='absolute top-[1rem] left-[0.6rem] h-[7rem] w-[7rem] object-cover'
            />
          )}
        </figure>
      )}

      <div
        className={cn(
          'flex flex-1 flex-col items-start gap-[0.8rem]',
          currentVariant === 'today' && 'px-[1.6rem]',
        )}
      >
        <Chip
          variant='question'
          size='small'
          className='w-auto rounded-[0.4rem]'
        >
          {VARIANT_LABEL[currentVariant]}
        </Chip>
        <div className='flex flex-col items-start gap-[0.4rem]'>
          <p className='typo-body-sb-14 text-neutral-800'>{question}</p>
          <time
            className='typo-body-r-14 inline-flex items-center gap-[0.4rem] text-neutral-300'
            dateTime={`${year}-${month}-${day}`}
          >
            <span>{year}년</span>
            <span>{month}월</span>
            <span>{day}일</span>
          </time>
        </div>
      </div>
    </article>
  );
}

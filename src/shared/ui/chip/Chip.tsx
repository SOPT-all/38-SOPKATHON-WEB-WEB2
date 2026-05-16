import { type ComponentPropsWithoutRef } from 'react';

import { cn, cva, type VariantProps } from '@/shared/utils/cn';

const chipVariants = cva(
  'inline-flex h-[2.5rem] items-center justify-center rounded-[0.4rem] px-[0.8rem]',
  {
    variants: {
      size: {
        normal: 'w-[8rem] typo-body-sb-14',
        small: 'w-[5.3rem] rounded-full typo-body-r-14',
      },
      variant: {
        question: 'bg-primary-50 text-primary-500',
        me: 'bg-primary-500 text-white',
        you: 'bg-neutral-400 text-white',
        youYet: 'bg-neutral-200 text-white',
      },
    },
    defaultVariants: {
      size: 'normal',
      variant: 'question',
    },
  },
);

type ChipProps = ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof chipVariants>;

export default function Chip({
  children,
  className,
  size,
  variant,
  ...props
}: ChipProps) {
  return (
    <span className={cn(chipVariants({ size, variant }), className)} {...props}>
      {children}
    </span>
  );
}

import { type ComponentPropsWithoutRef } from 'react';

import { cn, cva, type VariantProps } from '@/shared/utils/cn';

const chipVariants = cva(
  'inline-flex h-[2.5rem] items-center justify-center rounded-[0.4rem] px-[0.8rem]',
  {
    variants: {
      size: {
        normal: 'w-[8rem] bg-primary-50 text-primary-500 typo-body-sb-14',
        small: 'w-[5.3rem] rounded-full bg-primary-500 text-white typo-body-r-14',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  },
);

type ChipProps = ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof chipVariants>;

export default function Chip({
  children,
  className,
  size,
  ...props
}: ChipProps) {
  return (
    <span className={cn(chipVariants({ size }), className)} {...props}>
      {children}
    </span>
  );
}

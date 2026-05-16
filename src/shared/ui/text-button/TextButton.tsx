import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn, cva, type VariantProps } from '@/shared/utils/cn';

const textButtonVariants = cva(
  'inline-flex items-center justify-center gap-[1.2rem] rounded-[1.2rem] typo-body-sb-16',
  {
    variants: {
      size: {
        large: 'h-[5.6rem] w-[32.7rem]',
        small: 'h-[4.8rem] w-[27.9rem]',
      },
      state: {
        default: 'bg-primary-500 text-neutral-50',
        disabled: 'cursor-not-allowed bg-primary-100 text-primary-50',
      },
    },
    defaultVariants: {
      size: 'small',
      state: 'default',
    },
  },
);

type TextButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof textButtonVariants> & {
    rightIcon?: ReactNode;
  };

export default function TextButton({
  children,
  className,
  disabled,
  rightIcon,
  size,
  state,
  type = 'button',
  ...props
}: TextButtonProps) {
  const isDisabled = disabled || state === 'disabled';

  return (
    <button
      className={cn(
        textButtonVariants({
          size,
          state: isDisabled ? 'disabled' : state,
        }),
        className,
      )}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {rightIcon && (
        <span className="[&>svg]:h-[1.8rem] [&>svg]:w-[1.8rem] [&>svg]:text-neutral-50">
          {rightIcon}
        </span>
      )}
    </button>
  );
}

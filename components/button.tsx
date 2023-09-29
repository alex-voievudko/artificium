import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: [
    'inline-flex justify-center items-center flex-shrink-0 font-semibold',
    'transition duration-200 ease-in-out',
  ],
  variants: {
    variant: {
      primary:
        'bg-stem-green-500 text-day-blue-900 hover:bg-stem-green-400 active:bg-stem-green-300',
      secondary:
        'bg-transparent border-[3px] border-stem-green-500 text-stem-green-500 hover:border-stem-green-400 hover:text-stem-green-400 active:border-stem-green-300 active:text-stem-green-300',
      tertiary:
        'bg-noble-black-600 text-noble-black-300 hover:bg-noble-black-500 hover:text-noble-black-200 active:bg-noble-black-400 active:text-noble-black-100',
      ghost:
        'bg-transparent text-noble-black-400 hover:text-noble-black-300 active:text-noble-black-200',
    },
    size: {
      small: 'px-3 pt-2 h-8 rounded-xl body-sm',
      medium: 'px-4 py-2 h-10 rounded-[10px] body-md',
      large: 'px-6 py-2 h-12 rounded-lg body-lg',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, size, fullWidth, className })} {...props}>
      {children}
    </button>
  );
};

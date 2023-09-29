import * as React from 'react';
import Image from 'next/image';
import { type VariantProps, tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'inline-flex justify-center items-center flex-shrink-0 font-semibold transition duration-200 ease-in-out bg-noble-black-600 gap-3 text-noble-black-400 hover:bg-noble-black-500 hover:text-noble-black-300 active:bg-noble-black-400 active:text-noble-black-200 rounded-[12px] px-6 py-2 h-12',
  variants: {
    variant: {
      google: '',
      apple: '',
    },
  },
  defaultVariants: {
    variant: 'google',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const SocialButton = ({ className, variant, children, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ className })} {...props}>
      <Image
        src={variant === 'google' ? '/icons/google.svg' : '/icons/apple.svg'}
        alt={variant!}
        width={20}
        height={20}
      />
      {children}
    </button>
  );
};

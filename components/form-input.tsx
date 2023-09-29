import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const inputVariants = tv({
  slots: {
    base: 'relative',
    input: [
      'h-12 px-4 py-3 w-full text-noble-black-200 bg-noble-black-600 rounded-lg border border-noble-black-500 caret-heisenberg-blue-500',
      'placeholder:text-noble-black-300 placeholder:body-lg placeholder:font-medium',
      'hover:outline-none hover:ring-4 hover:ring-noble-black-500/[.24]',
      'focus:outline-none focus:ring-4 focus:ring-heisenberg-blue-500/[.24] focus:border-heisenberg-blue-500',
      'transition duration-200 ease-in-out',
    ],
    icon: 'absolute text-noble-black-300 top-1/2 left-4 transform -translate-y-1/2 w-6 h-6',
  },
  variants: {
    error: {
      true: {
        input: 'border-red-power-600 focus:ring-red-power-600/[0.24] focus:border-red-power-600',
      },
    },
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  error?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, error, type, ...props }, ref) => {
    const { base, input, icon } = inputVariants({ error });
    return (
      <div className={base({ className })}>
        <input
          ref={ref}
          type={type}
          className={input({ className: leftIcon ? 'pl-[52px]' : '', error })}
          {...props}
        />
        {leftIcon && <div className={icon()}>{leftIcon}</div>}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';

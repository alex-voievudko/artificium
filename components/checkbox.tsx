'use client';

import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';
import CheckIcon from '@/public/icons/check.svg';

const checkboxVariants = tv({
  slots: {
    base: 'flex items-center gap-4',
    input: [
      'flex items-center justify-center h-6 w-6 bg-noble-black-600 rounded-[4px] border border-noble-black-500 peer',
      'focus:outline-none focus:ring-4 focus:ring-heisenberg-blue-500/[.24] focus:border-heisenberg-blue-500 focus:ring-offset-0',
      'checked:bg-day-blue-blue-green-500 checked:border-none checked:ring-0 checked:ring-offset-0',
      'hover:outline-none hover:ring-4 hover:ring-noble-black-500/[.24] cursor-pointer',
      'transition-colors duration-200 ease-in-out',
    ],
    icon: 'absolute h-3 w-3 peer-checked:opacity-100 opacity-0 pointer-events-none text-day-blue-900 transition-opacity duration-200 ease-in-out',
    text: 'body-lg font-medium text-noble-black-200',
  },
  variants: {
    error: {
      true: {
        input: 'border-red-power-600 ',
      },
    },
  },
});

export interface CheckboxProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    const { base, input, icon, text } = checkboxVariants({ error });
    return (
      <div className={base({ className })}>
        <div className='relative flex items-center justify-center'>
          <input type='checkbox' className={input()} ref={ref} {...props} />
          <CheckIcon className={icon()} />
        </div>
        {label && <label className={text()}>{label}</label>}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

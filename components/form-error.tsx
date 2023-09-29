import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';
import AlertIcon from '@/public/icons/alert-circle-solid.svg';

const errorVariants = tv({
  base: 'text-red-power-600 font-normal body-sm flex items-center gap-3',
});

export interface FormErrorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof errorVariants> {}

export const FormError = ({ className, children, ...props }: FormErrorProps) => {
  return (
    <div className={errorVariants({ className })} {...props}>
      {children && <AlertIcon className='h-4 w-4' />}
      {children}
    </div>
  );
};

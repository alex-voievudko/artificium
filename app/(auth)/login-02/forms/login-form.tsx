'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { FormError } from '@/components/form-error';
import { FormInput } from '@/components/form-input';
import { SocialButton } from '@/components/social-button';
import MailIcon from '@/public/icons/mail.svg';
import PasswordIcon from '@/public/icons/padlock.svg';

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  rememberMe: z.boolean().optional(),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onTouched',
  });

  return (
    <form className='flex w-[496px] flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
      <div className='mb-16'>
        <h1 className='heading-xl mb-6 font-normal text-white'>
          Let&apos;s get{' '}
          <span className='bg-day-blue-blue-green-500 bg-clip-text font-bold text-transparent'>
            creative!
          </span>
        </h1>
        <h2 className='body-xl font-medium text-noble-black-300'>
          Log in to Artificium to start creating magic.
        </h2>
      </div>

      <div>
        <div className='flex gap-6'>
          <SocialButton variant='google' className='flex-1'>
            Google Account
          </SocialButton>
          <SocialButton variant='apple' className='flex-1'>
            Apple Account
          </SocialButton>
        </div>

        <div className='my-12 flex items-center gap-4'>
          <div className='h-[1px] flex-1 bg-noble-black-500' />
          <div className='body-sm font-medium text-noble-black-400'>or continue with</div>
          <div className='h-[1px] flex-1 bg-noble-black-500' />
        </div>

        <div className='mb-6'>
          <FormInput
            type='email'
            placeholder='Email address'
            error={!!errors.email?.message}
            leftIcon={<MailIcon />}
            {...register('email')}
          />
          <FormError className='mt-2'>{errors.email?.message}</FormError>
        </div>

        <div>
          <FormInput
            type='password'
            placeholder='Password'
            error={!!errors.password?.message}
            leftIcon={<PasswordIcon />}
            {...register('password')}
          />
          <FormError className='mt-2'>{errors.password?.message}</FormError>
        </div>

        <div className='my-12 flex justify-between'>
          <Checkbox label='Remember me' {...register('rememberMe')} />
          <Link
            href='/forgot-password'
            className='bg-blue-green-500 bg-clip-text font-semibold text-transparent'
          >
            Forgot password?
          </Link>
        </div>

        <Button type='submit' fullWidth size='large'>
          Log in
        </Button>

        <p className='body-lg mt-12 text-center text-noble-black-400'>
          Don&apos;t have an account?{' '}
          <Link href='/register-01' className='bg-blue-green-500 bg-clip-text text-transparent'>
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

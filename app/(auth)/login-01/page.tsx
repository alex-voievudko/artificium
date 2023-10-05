import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import login01 from '@/public/images/login-01.jpg';
import { LoginForm } from './forms/login-form';

export const metadata: Metadata = {
  title: 'Login 01',
};

const Login01Page = () => {
  return (
    <>
      <main className='flex items-center justify-center h-screen xl:hidden px-12'>
        <h1 className='heading-xs text-center'>
          Please view this page on desktop to see the full experience. Thank you! 🙏
        </h1>
      </main>
      <main className='w-full h-screen grid grid-cols-2'>
        <div className='flex flex-col p-12'>
          <Image src='/logo.svg' alt='logo' width={32} height={32} priority />
          <div className='flex-1 flex justify-center items-center'>
            <LoginForm />
          </div>
          <p className='body-lg text-noble-black-400'>
            Don&apos;t have an account?{' '}
            <Link href='/register-01' className='bg-blue-green-500 bg-clip-text text-transparent'>
              Sign Up
            </Link>
          </p>
        </div>
        <div className='relative'>
          <Image
            src={login01}
            alt='login-01'
            fill
            priority
            className='object-cover rounded-tl-[24px] rounded-bl-[24px]'
          />
        </div>
      </main>
    </>
  );
};

export default Login01Page;

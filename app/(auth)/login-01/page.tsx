import Image from 'next/image';
import Link from 'next/link';
import login01 from '@/public/images/login-01.jpg';
import { LoginForm } from './forms/login-form';

const Login01Page = () => {
  return (
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
  );
};

export default Login01Page;

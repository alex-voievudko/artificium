import type { Metadata } from 'next';
import Image from 'next/image';
import login02 from '@/public/images/login-02.jpg';
import { LoginForm } from './forms/login-form';

export const metadata: Metadata = {
  title: 'Login 02',
};

const Login01Page = () => {
  return (
    <main className='w-full h-screen grid grid-cols-2'>
      <div className='flex flex-col p-12'>
        <Image src='/logo.svg' alt='logo' width={32} height={32} priority />
        <div className='flex-1 flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>
      <div className='relative'>
        <Image
          src={login02}
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

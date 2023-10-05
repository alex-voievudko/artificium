import Image from 'next/image';
import { PreviewCard } from '@/components/preview-card';
import previewImage from '@/public/og-image.jpg';

const cards = [
  {
    title: 'Login Page 01',
    image: '/screenshots/login-01.jpg',
    path: '/login-01',
  },
  {
    title: 'Login Page 02',
    image: '/screenshots/login-02.jpg',
    path: '/login-02',
  },
];

const HomePage = () => {
  return (
    <main>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 py-16 lg:grid lg:grid-cols-2 lg:gap-10'>
        <div>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl mb-6'>
            Welcome to{' '}
            <span className='bg-day-blue-blue-green-500 bg-clip-text text-transparent'>
              Artificium Project
            </span>
          </h1>
          <p className='mb-4 text-noble-black-300'>
            In Project Artificium, I undertook the exciting challenge of converting a captivating
            Figma design crafted by Mikołaj Niżnik into a fully functional frontend application.
            This project showcases my skills in web development, using a tech stack that includes
            Next.js, TypeScript, Tailwind CSS, ESLint, Prettier, React Hook Form, Zod.
          </p>
          <p className='mb-4 text-noble-black-300'>
            Join me on this journey as we bring this vision to life, one line of code at a time!
            Stay tuned for updates and further developments. 🚧
          </p>
        </div>
        <Image
          src={previewImage}
          alt='Artificium Project'
          priority
          className='rounded-[16px] border border-noble-black-600 shadow-medium bg-noble-black-800'
        />

        <div className='col-span-2 pt-10'>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-center'>
            Pages Preview
          </h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {cards.map((card) => (
              <PreviewCard
                key={card.title}
                title={card.title}
                image={card.image}
                href={card.path}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

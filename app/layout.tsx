import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://artificium-five.vercel.app'),
  title: {
    default: 'Artificium - AI Content Creation App',
    template: '%s | Artificium',
  },
  description:
    'Artificium is an AI content creation app that helps you create content for your blog, website, or social media.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'React Hook Form'],
  creator: 'Alex Voievudko',
  authors: [{ name: 'Alex Voievudko', url: 'https://alexvoievudko.com' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artificium-five.vercel.app/',
    title: 'Artificium - AI Content Creation App',
    description:
      'Artificium is an AI content creation app that helps you create content for your blog, website, or social media.',
    siteName: 'Artificium',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Artificium - AI Content Creation App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artificium - AI Content Creation App',
    description:
      'Artificium is an AI content creation app that helps you create content for your blog, website, or social media.',
    images: '/og-image.jpg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${jakarta.className} bg-noble-black-700 text-white`}>{children}</body>
    </html>
  );
};

export default RootLayout;

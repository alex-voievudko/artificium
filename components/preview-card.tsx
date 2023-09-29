import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type VariantProps, tv } from 'tailwind-variants';

const cardVariants = tv({
  slots: {
    base: [
      'flex flex-col rounded-[16px] bg-noble-black-800 border border-noble-black-600 shadow-medium overflow-hidden p-6 gap-4',
      'hover:scale-105',
      'transition-transform duration-300',
    ],
    imageStyle: 'rounded-[16px]',
    titleStyle: 'px-4 font-bold heading-xs',
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title: string;
  image: string;
  href: string;
}

export const PreviewCard = ({ title, image, className, href, ...props }: CardProps) => {
  const { base, imageStyle, titleStyle } = cardVariants();

  return (
    <Link href={href} className={base({ className })}>
      <Image src={image} className={imageStyle()} alt={title} width={320} height={227} />
      <h3 className={titleStyle()}>{title}</h3>
    </Link>
  );
};

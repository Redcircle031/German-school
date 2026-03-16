import React from 'react';
import Image from 'next/image';

interface ImageTextBlockProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  reverse?: boolean;
  badge?: string;
}

export default function ImageTextBlock({
  image,
  alt,
  title,
  description,
  reverse = false,
  badge,
}: ImageTextBlockProps) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-200 shadow-xl">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        {badge && (
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700">
            <span className="size-1.5 rounded-full bg-accent-500"></span>
            {badge}
          </span>
        )}
        <h2 className="mb-6 text-3xl font-medium text-neutral-900 md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}

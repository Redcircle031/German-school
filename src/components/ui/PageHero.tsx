import React from 'react';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  overlay?: 'dark' | 'light' | 'none';
  showBreadcrumb?: boolean;
}

export default function PageHero({
  title,
  description,
  image,
  badge,
  overlay = 'dark',
  showBreadcrumb = true,
}: PageHeroProps) {
  const overlays = {
    dark: 'bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50',
    light: 'bg-gradient-to-r from-white/90 via-white/70 to-white/50',
    none: '',
  };

  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 text-white md:py-24">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-30"
              sizes="100vw"
              priority
            />
          </div>
          <div className={`absolute inset-0 ${overlays[overlay]}`} />
        </>
      )}
      <div className="container-custom relative z-10">
        {showBreadcrumb && (
          <div className="mb-6">
            <Breadcrumb />
          </div>
        )}
        {badge && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-200/30 bg-accent-500/20 px-4 py-1.5 text-sm font-semibold text-accent-300 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent-400"></span>
            {badge}
          </span>
        )}
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

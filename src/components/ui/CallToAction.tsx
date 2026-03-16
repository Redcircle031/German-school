import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButton?: {
    href: string;
    label: string;
  };
  secondaryButton?: {
    href: string;
    label: string;
  };
  variant?: 'default' | 'red' | 'accent';
}

export default function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default',
}: CallToActionProps) {
  const variants = {
    default: 'bg-neutral-50',
    red: 'bg-red-600',
    accent: 'bg-[#faf8f5]',
  };

  const textColors = {
    default: {
      title: 'text-neutral-900',
      description: 'text-neutral-600',
    },
    red: {
      title: 'text-white',
      description: 'text-red-100',
    },
    accent: {
      title: 'text-neutral-900',
      description: 'text-neutral-600',
    },
  };

  return (
    <section className={`${variants[variant]} py-16 md:py-20`}>
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className={`mb-4 text-3xl font-bold leading-tight md:text-4xl ${textColors[variant].title}`}>
              {title}
            </h2>
            <p className={`text-lg leading-relaxed ${textColors[variant].description}`}>
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  variant === 'red'
                    ? 'bg-white text-red-600 hover:shadow-white/30'
                    : 'bg-red-600 text-white hover:bg-red-500 hover:shadow-red-600/30'
                }`}
              >
                {primaryButton.label}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-white/10 ${
                  variant === 'red'
                    ? 'border-white/30 text-white'
                    : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                }`}
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

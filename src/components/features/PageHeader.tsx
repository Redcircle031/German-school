'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  lang: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ lang, title, description, breadcrumbs }: PageHeaderProps) {
  const defaultBreadcrumbs = [{ label: lang === 'pl' ? 'Strona główna' : lang === 'de' ? 'Startseite' : 'Home', href: `/${lang}` }];
  const items = breadcrumbs || defaultBreadcrumbs;

  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 pb-16 pt-32 text-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-red-100">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="size-4" />}
              <Link href={item.href} className="transition-colors hover:text-white">
                {index === 0 ? <Home className="size-4" /> : item.label}
              </Link>
            </div>
          ))}
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">{title}</span>
        </nav>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {description && <p className="max-w-2xl text-xl text-red-100">{description}</p>}
      </div>
    </section>
  );
}

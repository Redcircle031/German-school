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
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-primary-100 mb-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              <Link href={item.href} className="hover:text-white transition-colors">
                {index === 0 ? <Home className="w-4 h-4" /> : item.label}
              </Link>
            </div>
          ))}
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-primary-100 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeaturedNewsItem } from './types';

interface FeaturedNewsProps {
  items: FeaturedNewsItem[];
  lang: 'pl' | 'de' | 'en';
  onItemClick?: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Format date helper
function formatDate(dateString: string, lang: 'pl' | 'de' | 'en'): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  
  const locales = {
    pl: 'pl-PL',
    de: 'de-DE',
    en: 'en-US',
  };
  
  return date.toLocaleDateString(locales[lang], options);
}

// Get category label
function getCategoryLabel(category: string | undefined, lang: 'pl' | 'de' | 'en'): string {
  const labels: Record<string, Record<string, string>> = {
    announcements: { pl: 'Ogłoszenie', de: 'Bekanntmachung', en: 'Announcement' },
    achievements: { pl: 'Osiągnięcie', de: 'Erfolg', en: 'Achievement' },
    current: { pl: 'Wydarzenie', de: 'Veranstaltung', en: 'Event' },
    upcoming: { pl: 'Nadchodzące', de: 'Kommend', en: 'Upcoming' },
  };
  
  return category ? labels[category]?.[lang] || labels[category]?.en || '' : '';
}

export default function FeaturedNews({ items, lang, onItemClick }: FeaturedNewsProps) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const categoryLabel = getCategoryLabel(item.category, lang);
        
        return (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <Link
              href={`/${lang}${item.href}`}
              onClick={onItemClick}
              className={cn(
                'group relative block overflow-hidden rounded-xl',
                'bg-neutral-100 hover:bg-white',
                'border border-transparent hover:border-neutral-200',
                'shadow-sm hover:shadow-md',
                'transition-all duration-300 ease-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
              )}
            >
              {/* Image Placeholder or Actual Image */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-red-100 to-red-50">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-red-200/50">
                      <Calendar className="size-8 text-red-400" />
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                {categoryLabel && (
                  <div className="absolute left-3 top-3">
                    <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-red-700 backdrop-blur-sm">
                      {categoryLabel}
                    </span>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-red-700">
                  {item.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-neutral-500">
                    <Calendar className="mr-1.5 size-3.5" />
                    <time dateTime={item.date}>
                      {formatDate(item.date, lang)}
                    </time>
                  </div>
                  
                  <ArrowRight className="size-4 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-red-500" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

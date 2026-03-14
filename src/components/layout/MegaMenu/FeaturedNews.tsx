'use client';

import Link from 'next/link';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                'group block relative overflow-hidden rounded-xl',
                'bg-neutral-100 hover:bg-white',
                'border border-transparent hover:border-neutral-200',
                'shadow-sm hover:shadow-md',
                'transition-all duration-300 ease-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
              )}
            >
              {/* Image Placeholder or Actual Image */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-200/50 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                {categoryLabel && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-white/90 text-primary-700 rounded-full backdrop-blur-sm">
                      {categoryLabel}
                    </span>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="font-semibold text-neutral-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <time dateTime={item.date}>
                      {formatDate(item.date, lang)}
                    </time>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

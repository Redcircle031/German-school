'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface NewsCardProps {
  news: {
    id: string;
    title: Record<string, string>;
    date: string | null;
    excerpt: Record<string, string>;
    category?: string;
  };
  lang: string;
  index?: number;
}

export default function NewsCard({ news, lang, index = 0 }: NewsCardProps) {
  const title = news.title[lang as keyof typeof news.title] || news.title.pl;
  const excerpt = news.excerpt[lang as keyof typeof news.excerpt] || news.excerpt.pl;
  
  const categoryColors: Record<string, string> = {
    'aktualne-wydarzenia': 'bg-blue-100 text-blue-800',
    'nadchodzace-wydarzenia': 'bg-green-100 text-green-800',
    'osiagniecia': 'bg-yellow-100 text-yellow-800',
    'ogloszenia': 'bg-purple-100 text-purple-800',
    'ogolne': 'bg-neutral-100 text-neutral-800',
  };

  const categoryNames: Record<string, string> = {
    'aktualne-wydarzenia': lang === 'pl' ? 'Wydarzenia' : lang === 'de' ? 'Veranstaltungen' : 'Events',
    'nadchodzace-wydarzenia': lang === 'pl' ? 'Nadchodzące' : lang === 'de' ? 'Kommend' : 'Upcoming',
    'osiagniecia': lang === 'pl' ? 'Osiągnięcia' : lang === 'de' ? 'Errungenschaften' : 'Achievements',
    'ogloszenia': lang === 'pl' ? 'Ogłoszenia' : lang === 'de' ? 'Bekanntmachungen' : 'Announcements',
    'ogolne': lang === 'pl' ? 'Ogólne' : lang === 'de' ? 'Allgemein' : 'General',
  };

  const category = news.category || 'ogolne';

  return (
    <article
      className="card-interactive bg-white rounded-xl overflow-hidden shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 bg-neutral-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
          <span className="text-sm">News {news.id}</span>
        </div>
        {category && (
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category] || categoryColors.ogolne}`}>
            {categoryNames[category] || categoryNames.ogolne}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        {news.date && (
          <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={news.date}>{formatDate(news.date, lang)}</time>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
          <Link href={`/${lang}/news/${news.id}`}>
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/${lang}/news/${news.id}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
        >
          {lang === 'pl' ? 'Czytaj więcej' : lang === 'de' ? 'Mehr lesen' : 'Read more'}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

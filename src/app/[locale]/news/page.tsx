import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles, getRecentArticles } from '@/lib/cms';
import { Calendar, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Aktualności | WBS', de: 'Nachrichten | WBS', en: 'News | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Najnowsze wiadomości i wydarzenia z życia szkoły WBS',
    de: 'Neueste Nachrichten und Veranstaltungen aus dem Schulleben der WBS',
    en: 'Latest news and events from WBS school life',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();

  // Get all articles for this locale
  const articles = getAllArticles(locale);

  // Group articles by category
  const categories = {
    news: articles.filter(a => a.category === 'news' || a.category === 'announcements'),
    events: articles.filter(a => a.category === 'events'),
    achievements: articles.filter(a => a.category === 'achievements'),
    other: articles.filter(a => a.category === 'other'),
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get category label
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      news: { pl: 'Aktualności', de: 'Nachrichten', en: 'News' },
      events: { pl: 'Wydarzenia', de: 'Veranstaltungen', en: 'Events' },
      achievements: { pl: 'Osiągnięcia', de: 'Erfolge', en: 'Achievements' },
      other: { pl: 'Inne', de: 'Andere', en: 'Other' },
    };
    return labels[category]?.[locale] || labels[category]?.en || category;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-16 pt-32">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {locale === 'pl' ? 'Aktualności' : locale === 'de' ? 'Aktuelles' : 'News'}
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              {locale === 'pl'
                ? 'Bądź na bieżąco z wydarzeniami, osiągnięciami i wiadomościami ze szkoły WBS.'
                : locale === 'de'
                  ? 'Bleiben Sie auf dem Laufenden mit Ereignissen, Erfolgen und Nachrichten der WBS Schule.'
                  : 'Stay up to date with events, achievements, and news from WBS School.'}
            </p>
          </div>
        </div>
      </section>

      {/* News Categories */}
      {Object.entries(categories).map(([category, categoryArticles]) => {
        if (categoryArticles.length === 0) return null;

        return (
          <section key={category} className="bg-white py-16">
            <div className="container-custom">
              <div className="mb-12">
                <span className="mb-4 inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
                  {getCategoryLabel(category)}
                </span>
                <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
                  {getCategoryLabel(category)}
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-accent-200 hover:shadow-xl"
                  >
                    {/* Featured Image */}
                    {article.featuredImage ? (
                      <Link href={`/${locale}/news/${article.slug}`} className="aspect-video relative block overflow-hidden bg-neutral-50">
                        <Image
                          src={article.featuredImage || ''}
                          alt={article.title}
                          fill
                          className={`${
                            article.featuredImage?.includes('logo') || article.featuredImage?.includes('wbs') 
                              ? 'object-contain p-8' 
                              : 'object-cover group-hover:scale-105'
                          } transition-all duration-300`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Link>
                    ) : (
                      <Link href={`/${locale}/news/${article.slug}`} className="aspect-video flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-50 to-accent-100">
                        <div className="p-6 text-center">
                          <Calendar className="mx-auto mb-2 size-12 text-accent-400" />
                          <p className="text-sm text-accent-600">{getCategoryLabel(category)}</p>
                        </div>
                      </Link>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2 text-sm text-neutral-500">
                        <Calendar className="size-4" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </div>

                      <Link href={`/${locale}/news/${article.slug}`}>
                        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="mb-4 line-clamp-3 leading-relaxed text-neutral-600">
                        {article.excerpt}
                      </p>

                      <Link
                        href={`/${locale}/news/${article.slug}`}
                        className="inline-flex items-center font-semibold text-red-600 transition-transform group-hover:translate-x-2"
                      >
                        {locale === 'pl' ? 'Czytaj dalej' : locale === 'de' ? 'Weiterlesen' : 'Read more'}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Empty State */}
      {articles.length === 0 && (
        <section className="bg-neutral-50 py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <Calendar className="mx-auto mb-6 size-16 text-neutral-300" />
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                {locale === 'pl'
                  ? 'Brak aktualności'
                  : locale === 'de'
                    ? 'Keine Nachrichten'
                    : 'No news available'}
              </h2>
              <p className="mb-8 text-neutral-600">
                {locale === 'pl'
                  ? 'Sprawdź później, aby zobaczyć najnowsze wiadomości ze szkoły.'
                  : locale === 'de'
                    ? 'Schauen Sie später vorbei für die neuesten Nachrichten der Schule.'
                    : 'Check back later for the latest news from the school.'}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                {locale === 'pl' ? 'Powrót do strony głównej' : locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

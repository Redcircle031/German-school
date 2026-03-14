import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getAllArticles, getRecentArticles } from '@/lib/cms';
import { Calendar, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
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
      <section className="relative min-h-[50vh] bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pt-32 pb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {locale === 'pl' ? 'Aktualności' : locale === 'de' ? 'Aktuelles' : 'News'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
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
          <section key={category} className="py-16 bg-white">
            <div className="container-custom">
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-4">
                  {getCategoryLabel(category)}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  {getCategoryLabel(category)}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-secondary-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Featured Image */}
                    {article.featuredImage ? (
                      <Link href={`/${locale}/news/${article.slug}`} className="block aspect-video overflow-hidden bg-neutral-100">
                        <img
                          src={article.featuredImage}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    ) : (
                      <Link href={`/${locale}/news/${article.slug}`} className="block aspect-video overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                        <div className="text-center p-6">
                          <Calendar className="w-12 h-12 text-secondary-400 mx-auto mb-2" />
                          <p className="text-sm text-secondary-600">{getCategoryLabel(category)}</p>
                        </div>
                      </Link>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </div>

                      <Link href={`/${locale}/news/${article.slug}`}>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-secondary-600 transition-colors">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <Link
                        href={`/${locale}/news/${article.slug}`}
                        className="inline-flex items-center text-secondary-600 font-semibold group-hover:translate-x-2 transition-transform"
                      >
                        {locale === 'pl' ? 'Czytaj dalej' : locale === 'de' ? 'Weiterlesen' : 'Read more'}
                        <ArrowRight className="w-4 h-4 ml-2" />
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
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {locale === 'pl'
                  ? 'Brak aktualności'
                  : locale === 'de'
                  ? 'Keine Nachrichten'
                  : 'No news available'}
              </h2>
              <p className="text-neutral-600 mb-8">
                {locale === 'pl'
                  ? 'Sprawdź później, aby zobaczyć najnowsze wiadomości ze szkoły.'
                  : locale === 'de'
                  ? 'Schauen Sie später vorbei für die neuesten Nachrichten der Schule.'
                  : 'Check back later for the latest news from the school.'}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 text-white font-semibold rounded-full hover:bg-secondary-700 transition-colors"
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

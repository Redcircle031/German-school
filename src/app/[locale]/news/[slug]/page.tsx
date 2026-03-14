import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles, getRecentArticles } from '@/lib/cms';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = getAllArticles(locale);
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations();

  // Get the article
  const article = getArticleBySlug(slug, locale);

  if (!article || article.draft) {
    notFound();
  }

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
      announcements: { pl: 'Ogłoszenia', de: 'Bekanntmachungen', en: 'Announcements' },
      other: { pl: 'Inne', de: 'Andere', en: 'Other' },
    };
    return labels[category]?.[locale] || labels[category]?.en || category;
  };

  // Get related articles
  const allArticles = getAllArticles(locale);
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* Back Link */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 py-4 text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'pl' ? 'Powrót do aktualności' : locale === 'de' ? 'Zurück zu den Nachrichten' : 'Back to News'}
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full">
                {getCategoryLabel(article.category)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary-600" />
                <time dateTime={article.date} className="font-medium">
                  {formatDate(article.date)}
                </time>
              </div>

              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-secondary-600" />
                  <span className="font-medium">{article.author}</span>
                </div>
              )}

              {article.tags && article.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-secondary-600" />
                  {article.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-neutral-100 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="w-full aspect-video bg-neutral-100 overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <main className="py-16 bg-white">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-neutral-900
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                prose-p:text-neutral-700 prose-p:leading-relaxed
                prose-a:text-secondary-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:text-neutral-700
                prose-blockquote:border-l-4 prose-blockquote:border-secondary-600 prose-blockquote:pl-6 prose-blockquote:italic
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Article Footer */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-2 text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {locale === 'pl' ? 'Wszystkie aktualności' : locale === 'de' ? 'Alle Nachrichten' : 'All News'}
              </Link>

              <div className="text-sm text-neutral-500">
                {locale === 'pl' ? 'Źródło:' : locale === 'de' ? 'Quelle:' : 'Source:'}{' '}
                <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary-600">
                  wbs.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              {locale === 'pl' ? 'Powiązane artykuły' : locale === 'de' ? 'Ähnliche Artikel' : 'Related Articles'}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <article key={related.slug} className="group">
                  <Link href={`/${locale}/news/${related.slug}`} className="block">
                    {related.featuredImage ? (
                      <div className="aspect-video overflow-hidden rounded-xl bg-neutral-100 mb-4">
                        <img
                          src={related.featuredImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-secondary-100 to-secondary-200 mb-4 flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-secondary-400" />
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-secondary-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>

                    <p className="text-neutral-600 text-sm mt-2 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

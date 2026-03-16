import { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleBySlug, getAllArticles, getRecentArticles } from '@/lib/cms';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug, locale);
  if (!article) {
    return { title: 'Article Not Found | WBS' };
  }
  return {
    title: `${article.title} | WBS`,
    description: article.excerpt,
  };
}

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const articles = getAllArticles(locale);

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = getTranslations(locale as any);

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
      <div className="border-b border-neutral-200 bg-neutral-50 pt-24">
        <div className="container-custom">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 py-4 font-medium text-red-600 transition-colors hover:text-red-700"
          >
            <ArrowLeft className="size-4" />
            {locale === 'pl' ? 'Powrót do aktualności' : locale === 'de' ? 'Zurück zu den Nachrichten' : 'Back to News'}
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
                {getCategoryLabel(article.category)}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-red-600" />
                <time dateTime={article.date} className="font-medium">
                  {formatDate(article.date)}
                </time>
              </div>

              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="size-5 text-red-600" />
                  <span className="font-medium">{article.author}</span>
                </div>
              )}

              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="size-5 text-red-600" />
                  {article.tags.map((tag, index) => (
                    <span key={index} className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
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
        <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-neutral-100 bg-neutral-50">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className={
              article.featuredImage.includes('logo') || article.featuredImage.includes('wbs')
                ? 'object-contain p-12'
                : 'object-cover'
            }
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <article className="mx-auto max-w-4xl">
            <div
              className="article-content prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-neutral-900
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                prose-p:leading-relaxed prose-p:text-neutral-700
                prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:pl-6 prose-blockquote:italic
                prose-ol:list-decimal prose-ul:list-disc
                prose-li:text-neutral-700
                prose-img:h-auto prose-img:max-w-full prose-img:rounded-xl prose-img:shadow-lg
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Article Footer */}
          <div className="mx-auto mt-16 max-w-4xl border-t border-neutral-200 pt-8">
            <div className="flex items-center justify-between">
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-2 font-medium text-red-600 transition-colors hover:text-red-700"
              >
                <ArrowLeft className="size-4" />
                {locale === 'pl' ? 'Wszystkie aktualności' : locale === 'de' ? 'Alle Nachrichten' : 'All News'}
              </Link>

              <div className="text-sm text-neutral-500">
                {locale === 'pl' ? 'Źródło:' : locale === 'de' ? 'Quelle:' : 'Source:'}{' '}
                <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">
                  wbs.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container-custom">
            <h2 className="mb-8 text-3xl font-medium text-neutral-900">
              {locale === 'pl' ? 'Powiązane artykuły' : locale === 'de' ? 'Ähnliche Artikel' : 'Related Articles'}
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <article key={related.slug} className="group">
                  <Link href={`/${locale}/news/${related.slug}`} className="block">
                    {related.featuredImage ? (
                      <div className="aspect-video relative mb-4 overflow-hidden rounded-xl bg-neutral-100">
                        <Image
                          src={related.featuredImage}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-50 to-accent-100">
                        <Calendar className="size-12 text-accent-400" />
                      </div>
                    )}

                    <h3 className="line-clamp-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                      {related.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
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

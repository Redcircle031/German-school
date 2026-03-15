import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Calendar, ArrowUpRight, Lightbulb } from 'lucide-react';
import { getRecentArticles } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Aktualności | WBS', de: 'Aktuelles | WBS', en: 'Current News | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Aktualności', subtitle: 'Najnowsze wiadomości ze szkoły', empty: 'Brak aktualności' },
  de: { title: 'Aktuelles', subtitle: 'Neueste Nachrichten aus der Schule', empty: 'Keine aktuellen Nachrichten' },
  en: { title: 'Current News', subtitle: 'Latest news from the school', empty: 'No current news' },
};

export default async function CurrentNewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const articles = getRecentArticles(20, locale);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/${locale}/news/${article.slug}`} className="group flex gap-6 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-red-200 hover:shadow-lg md:p-6">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100 md:size-32">
                    {article.featuredImage ? (
                      <Image src={article.featuredImage} alt={article.title} fill className="object-cover" sizes="128px" />
                    ) : (
                      <div className="flex size-full items-center justify-center"><Lightbulb className="size-8 text-neutral-300" /></div>
                    )}
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <div className="mb-2 flex items-center gap-2 text-sm text-neutral-400">
                      <Calendar className="size-3.5" />
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                    </div>
                    <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-red-600">{article.title}</h3>
                    <p className="line-clamp-2 text-sm text-neutral-600">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-neutral-500">{t.empty}</div>
          )}
        </div>
      </section>
    </>
  );
}

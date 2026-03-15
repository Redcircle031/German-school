import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/features/PageHeader';
import { Megaphone, Calendar } from 'lucide-react';
import { getArticlesByCategory } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Ogłoszenia | WBS', de: 'Bekanntmachungen | WBS', en: 'Announcements | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Ogłoszenia', subtitle: 'Oficjalne ogłoszenia szkolne', empty: 'Brak ogłoszeń' },
  de: { title: 'Bekanntmachungen', subtitle: 'Offizielle Schulbekanntmachungen', empty: 'Keine Bekanntmachungen' },
  en: { title: 'Announcements', subtitle: 'Official school announcements', empty: 'No announcements' },
};

export default async function AnnouncementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const articles = getArticlesByCategory('announcements', locale).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          {articles.length > 0 ? (
            <div className="space-y-4">
              {articles.map((article) => (
                <Link key={article.slug} href={`/${locale}/news/${article.slug}`} className="group block rounded-xl border border-neutral-200 p-6 transition-all hover:border-red-200 hover:shadow-lg">
                  <div className="mb-2 flex items-center gap-2 text-sm text-neutral-400">
                    <Calendar className="size-3.5" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-600">{article.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-neutral-500">
              <Megaphone className="mx-auto mb-4 size-12 text-neutral-300" />
              <p>{t.empty}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

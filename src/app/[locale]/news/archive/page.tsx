import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Calendar, Lightbulb } from 'lucide-react';
import { getAllArticles } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Archiwum | WBS', de: 'Archiv | WBS', en: 'Archive | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Archiwum Aktualności', subtitle: 'Wszystkie artykuły i wiadomości', empty: 'Brak artykułów' },
  de: { title: 'Nachrichtenarchiv', subtitle: 'Alle Artikel und Nachrichten', empty: 'Keine Artikel' },
  en: { title: 'News Archive', subtitle: 'All articles and news', empty: 'No articles' },
};

export default async function ArchivePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const allArticles = getAllArticles(locale).filter(a => !a.draft).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const grouped = allArticles.reduce<Record<string, typeof allArticles>>((acc, article) => {
    const year = new Date(article.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(article);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {years.length > 0 ? (
            <div className="space-y-12">
              {years.map((year) => (
                <div key={year}>
                  <h2 className="mb-6 border-b border-neutral-200 pb-3 text-2xl font-bold text-neutral-900">{year}</h2>
                  <div className="space-y-4">
                    {grouped[year].map((article) => (
                      <Link key={article.slug} href={`/${locale}/news/${article.slug}`} className="group flex items-center gap-4 rounded-xl bg-neutral-50 p-4 transition-colors hover:bg-red-50">
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                          {article.featuredImage ? (
                            <Image src={article.featuredImage} alt={article.title} fill className="object-cover" sizes="64px" />
                          ) : (
                            <div className="flex size-full items-center justify-center"><Lightbulb className="size-5 text-neutral-300" /></div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-neutral-400">{formatDate(article.date)}</p>
                          <h3 className="line-clamp-1 font-semibold text-neutral-900 group-hover:text-red-600">{article.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
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

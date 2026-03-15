import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/features/PageHeader';
import { Zap, Calendar } from 'lucide-react';
import { getArticlesByCategory } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Flash | WBS', de: 'Eilmeldungen | WBS', en: 'Flash News | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Flash — Komunikaty NTS',
    subtitle: 'Bieżące ogłoszenia Zarządu Niemiecko-Polskiego Towarzystwa Szkolnego',
    empty: 'Brak komunikatów flash',
    desc: 'W tej sekcji publikowane są bieżące komunikaty i ogłoszenia Zarządu NTS (Niemiecko-Polskiego Towarzystwa Szkolnego w Warszawie) dotyczące ważnych spraw szkolnych.',
  },
  de: {
    title: 'Flash — NTS-Mitteilungen',
    subtitle: 'Aktuelle Mitteilungen des Vorstands der Deutsch-Polnischen Schulgesellschaft',
    empty: 'Keine Flash-Mitteilungen',
    desc: 'In diesem Bereich werden aktuelle Mitteilungen und Bekanntmachungen des NTS-Vorstands (Deutsch-Polnische Schulgesellschaft in Warschau) zu wichtigen Schulangelegenheiten veröffentlicht.',
  },
  en: {
    title: 'Flash — NTS Announcements',
    subtitle: 'Current announcements from the German-Polish School Society Board',
    empty: 'No flash announcements',
    desc: 'This section publishes current announcements from the NTS Board (German-Polish School Society in Warsaw) regarding important school matters.',
  },
};

export default async function FlashPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <div className="mb-12 rounded-2xl bg-red-50 p-6">
            <div className="flex items-start gap-3">
              <Zap className="mt-1 size-5 text-red-600" />
              <p className="text-neutral-700">{t.desc}</p>
            </div>
          </div>

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
            <div className="py-12 text-center text-neutral-500">{t.empty}</div>
          )}
        </div>
      </section>
    </>
  );
}

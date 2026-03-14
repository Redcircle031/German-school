import { getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import SkipLink from '@/components/features/SkipLink';
import Link from 'next/link';
import { ArrowRight, Calendar, Mail, Lightbulb } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'WBS School',
    description: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      <SkipLink text="Skip to content" />
      <Header lang={locale} />
      <main id="main-content">
        {/* Hero */}
        <section className="min-h-screen bg-white flex items-center">
          <div className="container-custom">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {locale === 'pl' ? 'Dwie kultury. Jedna szkoła.' : locale === 'de' ? 'Zwei Kulturen. Eine Schule.' : 'Two cultures. One school.'}
            </h1>
            <Link href={`/${locale}/about`} className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full">
              {locale === 'pl' ? 'Odkryj WBS' : locale === 'de' ? 'Entdecke WBS' : 'Discover WBS'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              {locale === 'pl' ? 'Aktualności' : locale === 'de' ? 'Aktuelles' : 'News'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <article key={i} className="bg-white rounded-xl shadow-md p-6">
                  <div className="h-48 bg-red-100 flex items-center justify-center mb-4">
                    <Lightbulb className="w-16 h-16 opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{locale === 'pl' ? `Wiadomość ${i}` : locale === 'de' ? `Nachricht ${i}` : `News ${i}`}</h3>
                  <Link href="/pl/news" className="text-red-600">Read more →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              {locale === 'pl' ? 'Wydarzenia' : locale === 'de' ? 'Veranstaltungen' : 'Events'}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{locale === 'pl' ? `Wydarzenie ${i}` : locale === 'de' ? `Veranstaltung ${i}` : `Event ${i}`}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              {locale === 'pl' ? 'Programy' : locale === 'de' ? 'Programme' : 'Programs'}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: '⚽', title: { pl: 'Piłka', de: 'Fußball', en: 'Football' } },
                { icon: '🎵', title: { pl: 'Muzyka', de: 'Musik', en: 'Music' } },
                { icon: '📚', title: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' } },
                { icon: '👥', title: { pl: 'Samorząd', de: 'Schülerrat', en: 'Council' } },
              ].map((p, i) => (
                <Link key={i} href="/pl/students" className="bg-white rounded-2xl p-6 border hover:shadow-xl">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-bold">{p.title[locale === 'pl' ? 'pl' : locale === 'de' ? 'de' : 'en']}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-red-600 text-white text-center">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-6">{locale === 'pl' ? 'Dołącz do WBS' : locale === 'de' ? 'Werde Teil von WBS' : 'Join WBS'}</h2>
            <div className="flex gap-4 justify-center">
              <a href={`/${locale}/admissions`} className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold">
                {locale === 'pl' ? 'Umów wizytę' : locale === 'de' ? 'Besuch' : 'Visit'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={locale} />
      <CookieConsent lang={locale} />
    </>
  );
}

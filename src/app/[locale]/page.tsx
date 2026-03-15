import { getTranslations } from 'next-intl/server';
import Hero from '@/components/features/Homepage/Hero';
import QuickLinks from '@/components/features/Homepage/QuickLinks';
import AnimatedStats from '@/components/features/Homepage/AnimatedStats';
import AudienceCards from '@/components/features/Homepage/AudienceCards';
import TestimonialsSection from '@/components/features/Homepage/TestimonialsSection';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Mail, Lightbulb, ArrowUpRight } from 'lucide-react';
import { getRecentArticles } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: locale === 'pl' ? 'WBS - Polsko-Niemiecka Szkola' : locale === 'de' ? 'WBS - Deutsch-Polnische Schule' : 'WBS - Polish-German School',
    description: locale === 'pl'
      ? 'Polsko-Niemiecka Szkola Spotkan i Dialogu im. Willyego Brandta w Warszawie'
      : locale === 'de'
        ? 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau'
        : 'Polish-German School of Meetings and Dialogue named after Willy Brandt in Warsaw',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const articles = getRecentArticles(3, locale);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      news: { pl: 'Aktualnosci', de: 'Nachrichten', en: 'News' },
      events: { pl: 'Wydarzenia', de: 'Veranstaltungen', en: 'Events' },
      achievements: { pl: 'Osiagniecia', de: 'Erfolge', en: 'Achievements' },
      announcements: { pl: 'Ogloszenia', de: 'Bekanntmachungen', en: 'Announcements' },
      other: { pl: 'Inne', de: 'Andere', en: 'Other' },
    };
    return labels[category]?.[locale] || labels[category]?.en || category;
  };

  // Stats data
  const stats = [
    { value: 300, suffix: '+', label: locale === 'pl' ? 'Uczniow' : locale === 'de' ? 'Schuler' : 'Students' },
    { value: 47, label: locale === 'pl' ? 'Lat tradycji' : locale === 'de' ? 'Jahre Tradition' : 'Years of tradition' },
    { value: 2, label: locale === 'pl' ? 'Dyplomy' : locale === 'de' ? 'Abschlusse' : 'Diplomas' },
    { value: 15, suffix: '+', label: locale === 'pl' ? 'Narodowosci' : locale === 'de' ? 'Nationalitaten' : 'Nationalities' },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: locale === 'pl'
        ? 'WBS dala naszemu dziecku nie tylko swietne wyksztalcenie, ale tez prawdziwa miedzynarodowa perspektywe.'
        : locale === 'de'
          ? 'Die WBS hat unserem Kind nicht nur eine hervorragende Ausbildung, sondern auch eine echte internationale Perspektive gegeben.'
          : 'WBS gave our child not just excellent education, but a truly international perspective.',
      author: 'Anna K.',
      role: locale === 'pl' ? 'Rodzic ucznia klasy 8' : locale === 'de' ? 'Elternteil, Klasse 8' : 'Parent, Grade 8',
    },
    {
      quote: locale === 'pl'
        ? 'Dwujezyczne srodowisko sprawia, ze dzieci naturalnie przechodzą miedzy kulturami. To jest bezcenne.'
        : locale === 'de'
          ? 'Die zweisprachige Umgebung lasst Kinder naturlich zwischen Kulturen wechseln. Das ist unbezahlbar.'
          : 'The bilingual environment lets children naturally move between cultures. That is priceless.',
      author: 'Thomas M.',
      role: locale === 'pl' ? 'Rodzic ucznia klasy 5' : locale === 'de' ? 'Elternteil, Klasse 5' : 'Parent, Grade 5',
    },
    {
      quote: locale === 'pl'
        ? 'Od przedszkola do matury - WBS towarzyszy naszej rodzinie juz od 10 lat i nigdy nie zalowalismy tej decyzji.'
        : locale === 'de'
          ? 'Vom Kindergarten bis zum Abitur - die WBS begleitet unsere Familie seit 10 Jahren und wir haben die Entscheidung nie bereut.'
          : 'From kindergarten to graduation - WBS has been with our family for 10 years and we never regretted the decision.',
      author: 'Katarzyna W.',
      role: locale === 'pl' ? 'Rodzic absolwenta' : locale === 'de' ? 'Elternteil eines Absolventen' : 'Alumni parent',
    },
  ];

  return (
    <>
      {/* Hero - Client component with animations */}
        <Hero lang={locale} />

        {/* Quick Links Bar */}
        <QuickLinks lang={locale} />

        {/* Animated Stats Strip */}
        <AnimatedStats stats={stats} />

        {/* Audience Pathway Cards */}
        <AudienceCards lang={locale} />

        {/* News Section */}
        <section className="bg-neutral-50 py-24">
          <div className="container-custom">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
                  {locale === 'pl' ? 'Zycie szkoly' : locale === 'de' ? 'Schulleben' : 'School life'}
                </p>
                <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
                  {locale === 'pl' ? 'Co nowego w naszej spolecznosci?' : locale === 'de' ? 'Was passiert in unserer Gemeinschaft?' : 'What\'s happening in our community?'}
                </h2>
              </div>
              <Link
                href={`/${locale}/news`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                {locale === 'pl' ? 'Wszystkie aktualnosci' : locale === 'de' ? 'Alle Nachrichten' : 'All news'}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {articles.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-3">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-red-200 hover:shadow-xl"
                  >
                    <Link href={`/${locale}/news/${article.slug}`} className="aspect-video relative block overflow-hidden bg-neutral-50">
                      {article.featuredImage ? (
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className={`${
                            article.featuredImage.includes('logo') || article.featuredImage.includes('wbs')
                              ? 'object-contain p-8'
                              : 'object-cover group-hover:scale-105'
                          } transition-all duration-500`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                          <Lightbulb className="size-12 text-neutral-300" />
                        </div>
                      )}
                    </Link>

                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2 text-sm text-neutral-500">
                        <Calendar className="size-4" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        <span className="text-neutral-300">|</span>
                        <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                          {getCategoryLabel(article.category)}
                        </span>
                      </div>

                      <Link href={`/${locale}/news/${article.slug}`}>
                        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                        {article.excerpt}
                      </p>

                      <Link
                        href={`/${locale}/news/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 transition-all group-hover:gap-2"
                      >
                        {locale === 'pl' ? 'Czytaj dalej' : locale === 'de' ? 'Weiterlesen' : 'Read more'}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-neutral-200 bg-white py-12 text-center">
                <Lightbulb className="mx-auto mb-4 size-12 text-neutral-300" />
                <p className="text-neutral-600">
                  {locale === 'pl' ? 'Brak aktualnosci' : locale === 'de' ? 'Keine Nachrichten' : 'No news available'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials - Parent voices early for trust */}
        <TestimonialsSection testimonials={testimonials} locale={locale} />

        {/* Programs Section */}
        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
                {locale === 'pl' ? 'Programy' : locale === 'de' ? 'Programme' : 'Programs'}
              </p>
              <h2 className="mb-4 text-3xl font-medium text-neutral-900 md:text-4xl">
                {locale === 'pl' ? 'Gdzie pasje staja sie talentami' : locale === 'de' ? 'Wo Leidenschaften zu Talenten werden' : 'Where passions become talents'}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: '⚽', title: { pl: 'Akademia Pilki', de: 'Fussball-Akademie', en: 'Football Academy' }, href: '/students/football-academy' },
                { icon: '🎵', title: { pl: 'Akademia Muzyki', de: 'Musik-Akademie', en: 'Music Academy' }, href: '/students/music-academy' },
                { icon: '📚', title: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' }, href: '/students/library' },
                { icon: '👥', title: { pl: 'Samorzad', de: 'Schulerrat', en: 'Student Council' }, href: '/students/student-council' },
              ].map((p, i) => (
                <Link
                  key={i}
                  href={`/${locale}${p.href}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center transition-all duration-300 hover:border-accent-200 hover:shadow-xl"
                >
                  <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-red-600">
                    {p.title[locale as keyof typeof p.title] || p.title.en}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Red background with subtle pattern */}
          <div className="absolute inset-0 bg-red-600" />
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="cta-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="container-custom relative z-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-200">
              {locale === 'pl' ? 'Rekrutacja 2026/2027' : locale === 'de' ? 'Aufnahme 2026/2027' : 'Admissions 2026/2027'}
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {locale === 'pl' ? 'Dolacz do naszej rodziny' : locale === 'de' ? 'Werde Teil unserer Familie' : 'Become part of our family'}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {locale === 'pl'
                ? 'Miejsce, gdzie Twoje dziecko odkryje swoj glos w dwoch jezykach i dwoch kulturach'
                : locale === 'de'
                  ? 'Ein Ort, an dem Ihr Kind seine Stimme in zwei Sprachen und zwei Kulturen entdeckt'
                  : 'A place where your child will discover their voice in two languages and two cultures'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-xl"
              >
                {locale === 'pl' ? 'Odwiedz nas' : locale === 'de' ? 'Besuchen Sie uns' : 'Visit us'}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                <Mail className="size-5" />
                {locale === 'pl' ? 'Kontakt' : locale === 'de' ? 'Kontakt' : 'Contact'}
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}

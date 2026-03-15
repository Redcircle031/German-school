import { getTranslations } from 'next-intl/server';
import Hero from '@/components/features/Homepage/Hero';
import QuickLinks from '@/components/features/Homepage/QuickLinks';
import AnimatedStats from '@/components/features/Homepage/AnimatedStats';
import DirectorWelcome from '@/components/features/Homepage/DirectorWelcome';
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

        {/* Director's Welcome */}
        <DirectorWelcome lang={locale} />

        {/* Audience Pathway Cards */}
        <AudienceCards lang={locale} />

        {/* News Section — Editorial magazine layout */}
        <section className="bg-neutral-50 py-24 lg:py-32">
          <div className="container-custom">
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
                  {locale === 'pl' ? 'Życie szkoły' : locale === 'de' ? 'Schulleben' : 'School life'}
                </p>
                <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
                  {locale === 'pl' ? 'Co nowego w naszej społeczności?' : locale === 'de' ? 'Was passiert in unserer Gemeinschaft?' : 'What\'s happening in our community?'}
                </h2>
              </div>
              <Link
                href={`/${locale}/news`}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:border-red-200 hover:text-red-600"
              >
                {locale === 'pl' ? 'Wszystkie aktualności' : locale === 'de' ? 'Alle Nachrichten' : 'All news'}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {articles.length > 0 ? (
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Featured article — large */}
                <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/5">
                  <Link href={`/${locale}/news/${articles[0].slug}`} className="relative block aspect-[16/10] overflow-hidden bg-neutral-100">
                    {articles[0].featuredImage ? (
                      <Image
                        src={articles[0].featuredImage}
                        alt={articles[0].title}
                        fill
                        className={`${
                          articles[0].featuredImage.includes('logo') || articles[0].featuredImage.includes('wbs')
                            ? 'object-contain p-12'
                            : 'object-cover transition-transform duration-700 group-hover:scale-105'
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
                        <Lightbulb className="size-16 text-neutral-200" />
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </Link>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                        {getCategoryLabel(articles[0].category)}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-neutral-400">
                        <Calendar className="size-3.5" />
                        <time dateTime={articles[0].date}>{formatDate(articles[0].date)}</time>
                      </span>
                    </div>
                    <Link href={`/${locale}/news/${articles[0].slug}`}>
                      <h3 className="mb-3 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                        {articles[0].title}
                      </h3>
                    </Link>
                    <p className="mb-6 line-clamp-3 text-base leading-relaxed text-neutral-600">
                      {articles[0].excerpt}
                    </p>
                    <Link
                      href={`/${locale}/news/${articles[0].slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all group-hover:gap-3"
                    >
                      {locale === 'pl' ? 'Czytaj dalej' : locale === 'de' ? 'Weiterlesen' : 'Read more'}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>

                {/* Secondary articles — stacked */}
                <div className="flex flex-col gap-8">
                  {articles.slice(1).map((article) => (
                    <article
                      key={article.slug}
                      className="group flex overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-red-900/5"
                    >
                      <Link href={`/${locale}/news/${article.slug}`} className="relative block w-2/5 shrink-0 overflow-hidden bg-neutral-100">
                        {article.featuredImage ? (
                          <Image
                            src={article.featuredImage}
                            alt={article.title}
                            fill
                            className={`${
                              article.featuredImage.includes('logo') || article.featuredImage.includes('wbs')
                                ? 'object-contain p-6'
                                : 'object-cover transition-transform duration-700 group-hover:scale-105'
                            }`}
                            sizes="(max-width: 1024px) 40vw, 20vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
                            <Lightbulb className="size-10 text-neutral-200" />
                          </div>
                        )}
                      </Link>
                      <div className="flex flex-col justify-center p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                            {getCategoryLabel(article.category)}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <Link href={`/${locale}/news/${article.slug}`}>
                          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500">
                          {article.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-neutral-200 bg-white py-12 text-center">
                <Lightbulb className="mx-auto mb-4 size-12 text-neutral-300" />
                <p className="text-neutral-600">
                  {locale === 'pl' ? 'Brak aktualności' : locale === 'de' ? 'Keine Nachrichten' : 'No news available'}
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

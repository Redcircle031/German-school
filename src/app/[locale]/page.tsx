import { getTranslations } from '@/lib/i18n';
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
  const t = getTranslations(locale as any);
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
  const t = getTranslations(locale as any);

  const articles = getRecentArticles(6, locale);

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
    { value: 400, suffix: '+', label: locale === 'pl' ? 'Uczniow' : locale === 'de' ? 'Schüler' : 'Students' },
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

      {/* News Section — Editorial magazine layout */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-custom">
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-500">
                {locale === 'pl' ? 'Życie szkoły' : locale === 'de' ? 'Schulleben' : 'School life'}
              </p>
              <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
                {locale === 'pl' ? 'Co nowego w naszej społeczności?' : locale === 'de' ? 'Was passiert in unserer Gemeinschaft?' : "What's happening in our community?"}
              </h2>
            </div>
            <Link
              href={`/${locale}/news`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:border-red-200 hover:text-red-600"
            >
              {locale === 'pl' ? 'Wszystkie aktualności' : locale === 'de' ? 'Alle Nachrichten' : 'All news'}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {articles.length > 0 ? (
            <>
              {/* Top row: featured (2/3) + 2 secondary cards (1/3) */}
              <div className="grid gap-4 lg:grid-cols-3">

                {/* Featured — photo overlay, text at bottom */}
                <Link
                  href={`/${locale}/news/${articles[0].slug}`}
                  className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl lg:col-span-2"
                >
                  {articles[0].featuredImage ? (
                    <Image
                      src={articles[0].featuredImage}
                      alt={articles[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="relative z-10 p-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                        {getCategoryLabel(articles[0].category)}
                      </span>
                      <span className="text-xs text-white/60">
                        <time dateTime={articles[0].date}>{formatDate(articles[0].date)}</time>
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold leading-snug text-white md:text-2xl">
                      {articles[0].title}
                    </h3>
                    {articles[0].excerpt && (
                      <p className="line-clamp-2 text-sm text-white/70">
                        {articles[0].excerpt}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-all group-hover:gap-2.5">
                      {locale === 'pl' ? 'Czytaj dalej' : locale === 'de' ? 'Weiterlesen' : 'Read more'}
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>

                {/* Right column — 2 stacked cards */}
                <div className="flex flex-col gap-4">
                  {articles.slice(1, 3).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/${locale}/news/${article.slug}`}
                      className="group relative flex flex-1 flex-col justify-end overflow-hidden rounded-2xl"
                    >
                      <div className="relative h-full min-h-[216px] w-full">
                        {article.featuredImage ? (
                          <Image
                            src={article.featuredImage}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 p-5">
                          <p className="mb-1 text-[11px] font-semibold text-white/60">
                            <time dateTime={article.date}>{formatDate(article.date)}</time>
                          </p>
                          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white transition-opacity group-hover:opacity-80">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom row — 3 horizontal mini cards */}
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {articles.slice(3, 6).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${locale}/news/${article.slug}`}
                    className="group flex gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-4 transition-all duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-md"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-neutral-200">
                      {article.featuredImage && (
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-[11px] font-semibold text-red-600">
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </p>
                      <h3 className="line-clamp-3 text-xs font-bold leading-snug text-neutral-800 transition-colors group-hover:text-red-600">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 py-12 text-center">
              <Lightbulb className="mx-auto mb-4 size-12 text-neutral-300" />
              <p className="text-neutral-600">
                {locale === 'pl' ? 'Brak aktualności' : locale === 'de' ? 'Keine Nachrichten' : 'No news available'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Director's Welcome */}
      <DirectorWelcome lang={locale} />

      {/* Audience Pathway Cards */}
      <AudienceCards lang={locale} />

      {/* Testimonials - Parent voices early for trust */}
      <TestimonialsSection testimonials={testimonials} locale={locale} />

      {/* Programs Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Programy' : locale === 'de' ? 'Programme' : 'Programs'}
            </p>
            <h2 className="mb-4 text-3xl font-medium text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Gdzie pasje stają się talentami' : locale === 'de' ? 'Wo Leidenschaften zu Talenten werden' : 'Where passions become talents'}
            </h2>
            <p className="mx-auto max-w-xl text-base text-neutral-500">
              {locale === 'pl' ? 'Odkryj wyjątkowe programy, które rozwijają każdego ucznia.' : locale === 'de' ? 'Entdecke besondere Programme, die jeden Schüler fördern.' : 'Discover exceptional programmes that develop every student.'}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                photo: '/images/football-academy/football-01.jpg',
                tag: { pl: 'Sport', de: 'Sport', en: 'Sport' },
                title: { pl: 'Akademia Piłki Nożnej', de: 'Fußball-Akademie', en: 'Football Academy' },
                desc: { pl: 'Trening z BVB Dortmund. 300+ zawodników.', de: 'Training mit BVB Dortmund. 300+ Spieler.', en: 'Training with BVB Dortmund. 300+ players.' },
                href: '/students/football-academy',
                accent: 'from-red-900/80 via-red-800/50 to-transparent',
              },
              {
                photo: '/images/music-academy/music-01.jpg',
                tag: { pl: 'Muzyka', de: 'Musik', en: 'Music' },
                title: { pl: 'Akademia Muzyczna', de: 'Musik-Akademie', en: 'Music Academy' },
                desc: { pl: '14 instrumentów. Egzaminy ABRSM.', de: '14 Instrumente. ABRSM-Prüfungen.', en: '14 instruments. ABRSM exams.' },
                href: '/students/music-academy',
                accent: 'from-neutral-900/80 via-neutral-800/50 to-transparent',
              },
              {
                photo: '/images/campus/campus-08.jpg',
                tag: { pl: 'Wiedza', de: 'Wissen', en: 'Knowledge' },
                title: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' },
                desc: { pl: '18 000+ książek. Centrum mediów.', de: '18 000+ Bücher. Medienzentrum.', en: '18,000+ books. Media centre.' },
                href: '/students/library',
                accent: 'from-neutral-900/80 via-neutral-900/40 to-transparent',
              },
              {
                photo: '/images/campus/campus-05.jpg',
                tag: { pl: 'Społeczność', de: 'Gemeinschaft', en: 'Community' },
                title: { pl: 'Samorząd Uczniowski', de: 'Schülerrat', en: 'Student Council' },
                desc: { pl: 'Głos uczniów. Projekty. Inicjatywy.', de: 'Stimme der Schüler. Projekte.', en: 'Student voice. Projects. Initiatives.' },
                href: '/students/student-council',
                accent: 'from-neutral-900/80 via-neutral-900/40 to-transparent',
              },
            ].map((p, i) => (
              <Link
                key={i}
                href={`/${locale}${p.href}`}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 lg:h-96"
              >
                {/* Photo background */}
                <Image
                  src={p.photo}
                  alt={p.title.en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
                {/* Content */}
                <div className="relative z-10 p-6">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                    {p.tag[locale as keyof typeof p.tag] || p.tag.en}
                  </span>
                  <h3 className="text-xl font-bold text-white drop-shadow">
                    {p.title[locale as keyof typeof p.title] || p.title.en}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {p.desc[locale as keyof typeof p.desc] || p.desc.en}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition-all duration-300 group-hover:gap-2">
                    {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — split photo layout */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* Left: Photo */}
          <div className="relative h-72 lg:h-auto lg:min-h-[520px]">
            <Image
              src="/images/campus/campus-07.jpg"
              alt="WBS Campus — red corridor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle dark overlay for depth */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Flags badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
              <span className="text-lg">🇵🇱</span>
              <span className="text-sm font-semibold text-neutral-600">+</span>
              <span className="text-lg">🇩🇪</span>
              <span className="ml-1 text-sm font-semibold text-neutral-700">seit 1978</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center bg-red-600 px-8 py-16 lg:px-16 lg:py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-200">
              {locale === 'pl' ? 'Rekrutacja 2026/2027' : locale === 'de' ? 'Aufnahme 2026/2027' : 'Admissions 2026/2027'}
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {locale === 'pl' ? 'Dołącz do naszej rodziny' : locale === 'de' ? 'Werde Teil unserer Familie' : 'Become part of our family'}
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-red-100">
              {locale === 'pl'
                ? 'Miejsce, gdzie Twoje dziecko odkryje swój głos w dwóch językach i dwóch kulturach.'
                : locale === 'de'
                  ? 'Ein Ort, an dem Ihr Kind seine Stimme in zwei Sprachen und zwei Kulturen entdeckt.'
                  : 'A place where your child will discover their voice in two languages and two cultures.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {locale === 'pl' ? 'Odwiedź nas' : locale === 'de' ? 'Besuchen Sie uns' : 'Visit us'}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                <Mail className="size-5" />
                {locale === 'pl' ? 'Kontakt' : locale === 'de' ? 'Kontakt' : 'Contact'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

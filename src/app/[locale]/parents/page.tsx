import { getTranslations } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, FileText, Utensils, Clock, Bell, Download, Users, Shield } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as any, 'parents');

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function ParentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    pl: {
      heroTitle: 'Strefa Rodzica',
      heroDescription: 'Wszystko, czego potrzebujesz, aby być na bieżąco z życiem szkolnym Twojego dziecka.',
      quickAccessTitle: 'Szybki Dostęp',
      quickAccessDescription: 'Najważniejsze informacje i formularze w jednym miejscu.',
      infoTitle: 'Informacje Praktyczne',
      infoDescription: 'Plan lekcji, stołówka, opieka popołudniowa - wszystko co musisz wiedzieć.',
      ctaTitle: 'Masz pytania?',
      ctaDescription: 'Jesteśmy tu, aby Ci pomóc. Skontaktuj się z nami w dowolnej sprawie.',
      ctaButton: 'Skontaktuj się',
    },
    de: {
      heroTitle: 'Elternbereich',
      heroDescription: 'Alles, was Sie brauchen, um über das Schulleben Ihres Kindes informiert zu sein.',
      quickAccessTitle: 'Schnellzugriff',
      quickAccessDescription: 'Die wichtigsten Informationen und Formulare an einem Ort.',
      infoTitle: 'Praktische Informationen',
      infoDescription: 'Stundenplan, Kantine, Nachmittagsbetreuung - alles was Sie wissen müssen.',
      ctaTitle: 'Haben Sie Fragen?',
      ctaDescription: 'Wir sind hier, um Ihnen zu helfen. Kontaktieren Sie uns bei allen Anliegen.',
      ctaButton: 'Kontaktieren Sie uns',
    },
    en: {
      heroTitle: 'Parent Zone',
      heroDescription: 'Everything you need to stay informed about your child\'s school life.',
      quickAccessTitle: 'Quick Access',
      quickAccessDescription: 'The most important information and forms in one place.',
      infoTitle: 'Practical Information',
      infoDescription: 'Lesson schedule, canteen, aftercare - everything you need to know.',
      ctaTitle: 'Have questions?',
      ctaDescription: 'We\'re here to help. Contact us for any matters.',
      ctaButton: 'Contact Us',
    },
  };

  const c = content[locale as keyof typeof content] || content.pl;

  const quickAccessItems = [
    {
      icon: FileText,
      title: { pl: 'Formularze', de: 'Formulare', en: 'Forms' },
      description: {
        pl: 'Wnioski, zgody, oświadczenia. Pobierz potrzebne dokumenty.',
        de: 'Anträge, Einwilligungen, Erklärungen. Laden Sie benötigte Dokumente herunter.',
        en: 'Applications, consents, declarations. Download necessary documents.',
      },
      href: `/${locale}/parents/forms`,
      color: 'bg-red-600',
    },
    {
      icon: Calendar,
      title: { pl: 'Rekrutacja', de: 'Rekrutierung', en: 'Admissions' },
      description: {
        pl: 'Proces rekrutacji, terminy, wymagane dokumenty.',
        de: 'Aufnahmeverfahren, Fristen, erforderliche Unterlagen.',
        en: 'Admission process, deadlines, required documents.',
      },
      href: `/${locale}/parents/recruitment`,
      color: 'bg-neutral-900',
    },
    {
      icon: Shield,
      title: { pl: 'Regulaminy', de: 'Ordnungen', en: 'Regulations' },
      description: {
        pl: 'Statut szkoły, regulamin samorządu, procedury.',
        de: 'Schulsatzung, VV-Ordnung, Verfahren.',
        en: 'School statutes, regulations, procedures.',
      },
      href: `/${locale}/parents/regulations`,
      color: 'bg-red-600',
    },
    {
      icon: Download,
      title: { pl: 'Portal Rodzica', de: 'Elternportal', en: 'Parent Portal' },
      description: {
        pl: 'Oceny, frekwencja, wiadomości od nauczycieli.',
        de: 'Noten, Anwesenheit, Nachrichten von Lehrern.',
        en: 'Grades, attendance, messages from teachers.',
      },
      href: `/${locale}/parent-portal`,
      external: true,
      color: 'bg-neutral-900',
    },
  ];

  const infoItems = [
    {
      icon: Utensils,
      title: { pl: 'Stołówka', de: 'Kantine', en: 'Canteen' },
      description: {
        pl: 'Menu tygodniowe, zasady, płatności.',
        de: 'Wochenmenü, Regeln, Zahlungen.',
        en: 'Weekly menu, rules, payments.',
      },
      href: `/${locale}/parents/canteen`,
      accent: 'bg-red-50 border-red-100',
    },
    {
      icon: Clock,
      title: { pl: 'Opieka Popołudniowa', de: 'Nachmittagsbetreuung', en: 'Aftercare' },
      description: {
        pl: 'Zajęcia popołudniowe, godziny, zapisy.',
        de: 'Nachmittagsangebote, Zeiten, Anmeldung.',
        en: 'Afternoon activities, hours, registration.',
      },
      href: `/${locale}/parents/aftercare`,
      accent: 'bg-red-50 border-red-100',
    },
    {
      icon: Bell,
      title: { pl: 'Plan Lekcji', de: 'Stundenplan', en: 'Bell Schedule' },
      description: {
        pl: 'Godziny zajęć, dzwonki, przerwy.',
        de: 'Unterrichtszeiten, Klingeln, Pausen.',
        en: 'Class times, bells, breaks.',
      },
      href: `/${locale}/parents/bell-schedule`,
      accent: 'bg-neutral-50 border-neutral-100',
    },
    {
      icon: Calendar,
      title: { pl: 'Kalendarz Świąt', de: 'Feiertagskalender', en: 'Holiday Calendar' },
      description: {
        pl: 'Dni wolne od zajęć, ferie, wakacje.',
        de: 'Unterrichtsfreie Tage, Ferien, Urlaub.',
        en: 'Days off, holidays, vacations.',
      },
      href: `/${locale}/parents/holidays`,
      accent: 'bg-red-50 border-red-100',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-16 pt-32">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {c.heroTitle}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90 md:text-2xl">
              {c.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-red-700 transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-lg"
              >
                <Calendar className="size-5" />
                {locale === 'pl' ? 'Rekrutacja 2026/2027' : locale === 'de' ? 'Aufnahme 2026/2027' : 'Admissions 2026/2027'}
              </a>
              <a
                href={`/${locale}/parents/forms`}
                className="inline-flex items-center gap-2 rounded-full border border-red-400 bg-red-500 px-8 py-4 font-semibold text-white transition-all hover:bg-red-400"
              >
                <Download className="size-5" />
                {locale === 'pl' ? 'Pobierz formularze' : locale === 'de' ? 'Formulare herunterladen' : 'Download Forms'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
                {c.quickAccessTitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {c.quickAccessTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {c.quickAccessDescription}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {quickAccessItems.map((item, index) => (
              <StaggerItem key={index}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? '_blank' : undefined}
                  className="group block h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
                >
                  <div className={`size-16 ${item.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="size-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">
                    {item.title[locale as keyof typeof item.title] || item.title.en}
                  </h3>
                  <p className="mb-4 leading-relaxed text-neutral-600">
                    {item.description[locale as keyof typeof item.description] || item.description.en}
                  </p>
                  <span className="inline-flex items-center font-semibold text-red-600 transition-transform group-hover:translate-x-2">
                    {locale === 'pl' ? 'Przejdź' : locale === 'de' ? 'Gehen' : 'Go'}
                    <ArrowRight className="ml-2 size-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-medium text-red-700">
                {c.infoTitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {c.infoTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {c.infoDescription}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoItems.map((item, index) => (
              <StaggerItem key={index}>
                <Link
                  href={item.href}
                  className={`group ${item.accent} block h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="size-7 text-neutral-700" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">
                    {item.title[locale as keyof typeof item.title] || item.title.en}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {item.description[locale as keyof typeof item.description] || item.description.en}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Important Notices Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-neutral-50 p-8 md:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <span className="mb-6 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-800">
                    {locale === 'pl' ? 'Ważne informacje' : locale === 'de' ? 'Wichtige Informationen' : 'Important Notices'}
                  </span>
                  <h3 className="mb-4 text-3xl font-bold text-neutral-900">
                    {locale === 'pl'
                      ? 'Rok Szkolny 2026/2027'
                      : locale === 'de'
                      ? 'Schuljahr 2026/2027'
                      : 'School Year 2026/2027'}
                  </h3>
                  <p className="mb-6 text-lg text-neutral-700">
                    {locale === 'pl'
                      ? 'Rozpoczęcie roku szkolnego: 1 września 2026. Zapoznaj się z organizacją pierwszego tygodnia i harmonogramem spotkań z wychowawcami.'
                      : locale === 'de'
                      ? 'Beginn des Schuljahres: 1. September 2026. Informieren Sie sich über die Organisation der ersten Woche und den Zeitplan für Treffen mit Klassenlehrern.'
                      : 'School year begins: September 1, 2026. Learn about the first week\'s organization and schedule for meetings with homeroom teachers.'}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/${locale}/parents/recruitment`}
                      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:bg-red-700"
                    >
                      {locale === 'pl' ? 'Sprawdź terminy' : locale === 'de' ? 'Termine prüfen' : 'Check Dates'}
                    </Link>
                    <Link
                      href={`/${locale}/parents/forms`}
                      className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-white px-6 py-3 font-semibold text-red-700 transition-all hover:bg-red-50"
                    >
                      <Download className="size-4" />
                      {locale === 'pl' ? 'Dokumenty' : locale === 'de' ? 'Dokumente' : 'Documents'}
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-white shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <div className="text-center">
                        <Calendar className="mx-auto mb-4 size-16 opacity-50" />
                        <p className="text-sm">School calendar placeholder</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 size-32 rounded-2xl bg-red-600" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parent Community Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-medium text-red-700">
                {locale === 'pl' ? 'Społeczność Rodziców' : locale === 'de' ? 'Elterngemeinschaft' : 'Parent Community'}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {locale === 'pl' ? 'Zaangażuj się' : locale === 'de' ? 'Engagieren Sie sich' : 'Get Involved'}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {locale === 'pl'
                  ? 'Dołącz do Rady Rodziców, uczestnicz w wydarzeniach szkolnych, wspieraj inicjatywy uczniów.'
                  : locale === 'de'
                  ? 'Treten Sie dem Elternrat bei, nehmen Sie an Schulveranstaltungen teil, unterstützen Sie Schülerinitiativen.'
                  : 'Join the Parent Council, participate in school events, support student initiatives.'}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8">
                <Users className="mb-6 size-12 text-red-600" />
                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Rada Rodziców' : locale === 'de' ? 'Elternrat' : 'Parent Council'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Reprezentacja rodziców, wpływ na decyzje szkoły, organizacja wydarzeń.'
                    : locale === 'de'
                    ? 'Elternvertretung, Einfluss auf Schulentscheidungen, Veranstaltung von Events.'
                    : 'Parent representation, influence on school decisions, event organization.'}
                </p>
                <Link href={`/${locale}/parents/council`} className="font-semibold text-red-600 hover:text-red-700">
                  {locale === 'pl' ? 'Dowiedz się więcej →' : locale === 'de' ? 'Mehr erfahren →' : 'Learn more →'}
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8">
                <Calendar className="mb-6 size-12 text-neutral-700" />
                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Wydarzenia dla Rodziców' : locale === 'de' ? 'Elternveranstaltungen' : 'Parent Events'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Spotkania z nauczycielami, warsztaty, wykłady, integracje.'
                    : locale === 'de'
                    ? 'Treffen mit Lehrern, Workshops, Vorträge, Integration.'
                    : 'Teacher meetings, workshops, lectures, social events.'}
                </p>
                <Link href={`/${locale}/events`} className="font-semibold text-red-600 hover:text-red-700">
                  {locale === 'pl' ? 'Zobacz kalendarz →' : locale === 'de' ? 'Kalender ansehen →' : 'View calendar →'}
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8">
                <FileText className="mb-6 size-12 text-red-600" />
                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Wolontariat' : locale === 'de' ? 'Freiwilligenarbeit' : 'Volunteering'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Pomoc przy wydarzeniach, wycieczkach, projektach szkolnych.'
                    : locale === 'de'
                    ? 'Hilfe bei Veranstaltungen, Ausflügen, Schulprojekten.'
                    : 'Help with events, trips, school projects.'}
                </p>
                <Link href={`/${locale}/parents/volunteering`} className="font-semibold text-red-600 hover:text-red-700">
                  {locale === 'pl' ? 'Zostań wolontariuszem →' : locale === 'de' ? 'Freiwilliger werden →' : 'Become a volunteer →'}
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-red-600 py-24 text-white">
        <div className="absolute left-0 top-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />
        <div className="absolute bottom-0 right-0 size-96 translate-x-1/3 translate-y-1/3 rounded-full bg-red-700" />

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {c.ctaTitle}
              </h2>
              <p className="mb-10 text-xl leading-relaxed text-white/90">
                {c.ctaDescription}
              </p>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-lg"
              >
                {c.ctaButton}
                <ArrowRight className="size-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

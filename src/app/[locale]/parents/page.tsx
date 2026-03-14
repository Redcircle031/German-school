import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, FileText, Utensils, Clock, Bell, Download, Users, Shield } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'parents' });

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
      color: 'bg-blue-500',
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
      color: 'bg-green-500',
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
      color: 'bg-purple-500',
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
      color: 'bg-orange-500',
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
      accent: 'bg-blue-50 border-blue-100',
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
      accent: 'bg-green-50 border-green-100',
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
      accent: 'bg-purple-50 border-purple-100',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pt-32 pb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {c.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-neutral-100 transition-all hover:shadow-lg hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                {locale === 'pl' ? 'Rekrutacja 2026/2027' : locale === 'de' ? 'Aufnahme 2026/2027' : 'Admissions 2026/2027'}
              </a>
              <a
                href={`/${locale}/parents/forms`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-400 transition-all border border-primary-400"
              >
                <Download className="w-5 h-5" />
                {locale === 'pl' ? 'Pobierz formularze' : locale === 'de' ? 'Formulare herunterladen' : 'Download Forms'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-6">
              {c.quickAccessTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {c.quickAccessTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {c.quickAccessDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickAccessItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? '_blank' : undefined}
                className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title[locale as keyof typeof item.title] || item.title.en}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {item.description[locale as keyof typeof item.description] || item.description.en}
                </p>
                <span className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {locale === 'pl' ? 'Przejdź' : locale === 'de' ? 'Gehen' : 'Go'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white text-primary-700 text-sm font-medium rounded-full border border-primary-100 mb-6">
              {c.infoTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {c.infoTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {c.infoDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group ${item.accent} rounded-2xl p-8 border hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <item.icon className="w-7 h-7 text-neutral-700" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title[locale as keyof typeof item.title] || item.title.en}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description[locale as keyof typeof item.description] || item.description.en}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
                  {locale === 'pl' ? 'Ważne informacje' : locale === 'de' ? 'Wichtige Informationen' : 'Important Notices'}
                </span>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  {locale === 'pl'
                    ? 'Rok Szkolny 2026/2027'
                    : locale === 'de'
                    ? 'Schuljahr 2026/2027'
                    : 'School Year 2026/2027'}
                </h3>
                <p className="text-lg text-neutral-700 mb-6">
                  {locale === 'pl'
                    ? 'Rozpoczęcie roku szkolnego: 1 września 2026. Zapoznaj się z organizacją pierwszego tygodnia i harmonogramem spotkań z wychowawcami.'
                    : locale === 'de'
                    ? 'Beginn des Schuljahres: 1. September 2026. Informieren Sie sich über die Organisation der ersten Woche und den Zeitplan für Treffen mit Klassenlehrern.'
                    : 'School year begins: September 1, 2026. Learn about the first week\'s organization and schedule for meetings with homeroom teachers.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/parents/recruitment`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-all"
                  >
                    {locale === 'pl' ? 'Sprawdź terminy' : locale === 'de' ? 'Termine prüfen' : 'Check Dates'}
                  </Link>
                  <Link
                    href={`/${locale}/parents/forms`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-all border border-amber-300"
                  >
                    <Download className="w-4 h-4" />
                    {locale === 'pl' ? 'Dokumenty' : locale === 'de' ? 'Dokumente' : 'Documents'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">School calendar placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-400 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Community Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white text-primary-700 text-sm font-medium rounded-full border border-primary-100 mb-6">
              {locale === 'pl' ? 'Społeczność Rodziców' : locale === 'de' ? 'Elterngemeinschaft' : 'Parent Community'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {locale === 'pl' ? 'Zaangażuj się' : locale === 'de' ? 'Engagieren Sie sich' : 'Get Involved'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'pl'
                ? 'Dołącz do Rady Rodziców, uczestnicz w wydarzeniach szkolnych, wspieraj inicjatywy uczniów.'
                : locale === 'de'
                ? 'Treten Sie dem Elternrat bei, nehmen Sie an Schulveranstaltungen teil, unterstützen Sie Schülerinitiativen.'
                : 'Join the Parent Council, participate in school events, support student initiatives.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <Users className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Rada Rodziców' : locale === 'de' ? 'Elternrat' : 'Parent Council'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Reprezentacja rodziców, wpływ na decyzje szkoły, organizacja wydarzeń.'
                  : locale === 'de'
                  ? 'Elternvertretung, Einfluss auf Schulentscheidungen, Veranstaltung von Events.'
                  : 'Parent representation, influence on school decisions, event organization.'}
              </p>
              <Link href={`/${locale}/parents/council`} className="text-primary-600 font-semibold hover:text-primary-700">
                {locale === 'pl' ? 'Dowiedz się więcej →' : locale === 'de' ? 'Mehr erfahren →' : 'Learn more →'}
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <Calendar className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Wydarzenia dla Rodziców' : locale === 'de' ? 'Elternveranstaltungen' : 'Parent Events'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Spotkania z nauczycielami, warsztaty, wykłady, integracje.'
                  : locale === 'de'
                  ? 'Treffen mit Lehrern, Workshops, Vorträge, Integration.'
                  : 'Teacher meetings, workshops, lectures, social events.'}
              </p>
              <Link href={`/${locale}/events`} className="text-green-600 font-semibold hover:text-green-700">
                {locale === 'pl' ? 'Zobacz kalendarz →' : locale === 'de' ? 'Kalender ansehen →' : 'View calendar →'}
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <FileText className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Wolontariat' : locale === 'de' ? 'Freiwilligenarbeit' : 'Volunteering'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Pomoc przy wydarzeniach, wycieczkach, projektach szkolnych.'
                  : locale === 'de'
                  ? 'Hilfe bei Veranstaltungen, Ausflügen, Schulprojekten.'
                  : 'Help with events, trips, school projects.'}
              </p>
              <Link href={`/${locale}/parents/volunteering`} className="text-purple-600 font-semibold hover:text-purple-700">
                {locale === 'pl' ? 'Zostań wolontariuszem →' : locale === 'de' ? 'Freiwilliger werden →' : 'Become a volunteer →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {c.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {c.ctaDescription}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-neutral-100 transition-all hover:shadow-lg hover:scale-105"
            >
              {c.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

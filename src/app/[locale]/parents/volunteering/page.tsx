import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Heart, Users, Calendar, BookOpen, Utensils, Music } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Wolontariat rodziców | WBS', de: 'Eltern-Ehrenamt | WBS', en: 'Parent Volunteering | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Wolontariat Rodziców',
    subtitle: 'Wspieraj swoją szkołę',
    intro: 'Rodzice WBS odgrywają kluczową rolę w życiu szkoły. Zapraszamy do zaangażowania się w różne formy wolontariatu — od pomocy przy wydarzeniach szkolnych po wsparcie w bibliotece czy kuchni.',
    areasTitle: 'Obszary wolontariatu',
    areas: [
      { icon: 'calendar', title: 'Wydarzenia szkolne', desc: 'Pomoc w organizacji festynów, Dnia Otwartego, koncertów i imprez integracyjnych.' },
      { icon: 'book', title: 'Biblioteka', desc: 'Pomoc w katalogowaniu książek, organizacji czytań i wydarzeń literackich.' },
      { icon: 'utensils', title: 'Stołówka i kiermasz', desc: 'Wsparcie przy organizacji kiermaszy ciast, śniadań wielokulturowych.' },
      { icon: 'music', title: 'Chór rodziców', desc: 'Dołącz do SchELF — chóru rodziców i pracowników WBS.' },
      { icon: 'users', title: 'Rada Rodziców', desc: 'Aktywne uczestnictwo w życiu szkoły poprzez Radę Rodziców.' },
      { icon: 'heart', title: 'Akcje charytatywne', desc: 'Organizacja i wsparcie zbiórek charytatywnych, np. WOŚP.' },
    ],
    contactTitle: 'Jak się zaangażować?',
    contactDesc: 'Jeśli chcesz zostać wolontariuszem, skontaktuj się z Radą Rodziców lub sekretariatem szkoły. Każda forma pomocy jest mile widziana!',
  },
  de: {
    title: 'Eltern-Ehrenamt',
    subtitle: 'Unterstützen Sie Ihre Schule',
    intro: 'WBS-Eltern spielen eine Schlüsselrolle im Schulleben. Wir laden Sie ein, sich in verschiedenen Formen des Ehrenamts zu engagieren — von der Hilfe bei Schulveranstaltungen bis zur Unterstützung in der Bibliothek.',
    areasTitle: 'Einsatzbereiche',
    areas: [
      { icon: 'calendar', title: 'Schulveranstaltungen', desc: 'Hilfe bei der Organisation von Schulfesten, Tag der offenen Tür und Konzerten.' },
      { icon: 'book', title: 'Bibliothek', desc: 'Hilfe bei der Katalogisierung von Büchern und Organisation von Lesungen.' },
      { icon: 'utensils', title: 'Kantine und Basar', desc: 'Unterstützung bei Kuchenbasaren und multikulturellen Frühstücken.' },
      { icon: 'music', title: 'Elternchor', desc: 'Werden Sie Mitglied des SchELF — Eltern- und Mitarbeiterchor der WBS.' },
      { icon: 'users', title: 'Elternbeirat', desc: 'Aktive Teilnahme am Schulleben über den Elternbeirat.' },
      { icon: 'heart', title: 'Wohltätigkeitsaktionen', desc: 'Organisation und Unterstützung von Spendenaktionen, z.B. WOŚP.' },
    ],
    contactTitle: 'Wie engagieren?',
    contactDesc: 'Wenn Sie sich ehrenamtlich engagieren möchten, kontaktieren Sie den Elternbeirat oder das Sekretariat. Jede Form der Hilfe ist willkommen!',
  },
  en: {
    title: 'Parent Volunteering',
    subtitle: 'Support your school',
    intro: 'WBS parents play a key role in school life. We invite you to get involved in various forms of volunteering — from helping at school events to supporting the library or kitchen.',
    areasTitle: 'Volunteering Areas',
    areas: [
      { icon: 'calendar', title: 'School Events', desc: 'Help organising festivals, Open Day, concerts, and community events.' },
      { icon: 'book', title: 'Library', desc: 'Help cataloguing books and organising reading events.' },
      { icon: 'utensils', title: 'Canteen & Bazaar', desc: 'Support for cake bazaars and multicultural breakfasts.' },
      { icon: 'music', title: 'Parent Choir', desc: 'Join SchELF — the WBS parent and staff choir.' },
      { icon: 'users', title: 'Parents\' Council', desc: 'Active participation in school life through the Parents\' Council.' },
      { icon: 'heart', title: 'Charity Campaigns', desc: 'Organising and supporting fundraisers, e.g., WOŚP.' },
    ],
    contactTitle: 'How to get involved?',
    contactDesc: 'If you want to volunteer, contact the Parents\' Council or the school office. Every form of help is welcome!',
  },
};

const areaIcons: Record<string, typeof Heart> = { calendar: Calendar, book: BookOpen, utensils: Utensils, music: Music, users: Users, heart: Heart };

export default async function VolunteeringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.areasTitle}</h2>
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.areas.map((area, i) => {
              const Icon = areaIcons[area.icon] || Heart;
              return (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                  <Icon className="mb-4 size-8 text-red-600" />
                  <h3 className="mb-2 font-semibold text-neutral-900">{area.title}</h3>
                  <p className="text-sm text-neutral-600">{area.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-red-600 p-8 text-white">
            <Heart className="mb-4 size-10 text-red-200" />
            <h2 className="mb-3 text-2xl font-bold">{t.contactTitle}</h2>
            <p className="text-red-100">{t.contactDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
}

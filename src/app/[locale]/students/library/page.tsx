import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Book, Clock, Users, Search } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Biblioteka | WBS', de: 'Bibliothek | WBS', en: 'Library | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Biblioteka Szkolna',
    subtitle: 'Świat książek w dwóch językach',
    intro: 'Nasza biblioteka posiada bogaty zbiór literatury polskiej i niemieckiej. Oferujemy dostęp do książek, czasopism i zasobów cyfrowych wspierających naukę i rozwój czytelniczy. Bibliotekarka: Joanna Koszykowska (biblioteka@wbs.pl).',
    stats: [
      { value: '18,000+', label: 'Książek' },
      { value: '50+', label: 'Czasopism' },
      { value: '100+', label: 'Miejsc' },
    ],
    hours: 'Godziny otwarcia: Poniedziałek - Czwartek: 8:00 - 15:00, Piątek: 8:00 - 14:00',
  },
  de: {
    title: 'Schulbibliothek',
    subtitle: 'Die Welt der Bücher in zwei Sprachen',
    intro: 'Unsere Bibliothek verfügt über einen reichen Bestand an polnischer und deutscher Literatur. Wir bieten Zugang zu Büchern, Zeitschriften und digitalen Ressourcen. Bibliothekarin: Joanna Koszykowska (biblioteka@wbs.pl).',
    stats: [
      { value: '18,000+', label: 'Bücher' },
      { value: '50+', label: 'Zeitschriften' },
      { value: '100+', label: 'Plätze' },
    ],
    hours: 'Öffnungszeiten: Montag - Donnerstag: 8:00 - 15:00, Freitag: 8:00 - 14:00',
  },
  en: {
    title: 'School Library',
    subtitle: 'World of books in two languages',
    intro: 'Our library has a rich collection of Polish and German literature. We offer access to books, magazines, and digital resources supporting learning and reading development. Librarian: Joanna Koszykowska (biblioteka@wbs.pl).',
    stats: [
      { value: '18,000+', label: 'Books' },
      { value: '50+', label: 'Magazines' },
      { value: '100+', label: 'Seats' },
    ],
    hours: 'Opening Hours: Mon-Thu: 8:00-15:00, Fri: 8:00-14:00',
  },
};

export default async function LibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {t.stats.map((stat, i) => (
              <div key={i} className="rounded-xl bg-red-600 p-6 text-center text-white">
                <p className="mb-2 text-4xl font-bold">{stat.value}</p>
                <p className="text-red-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl bg-neutral-50 p-6">
            <Clock className="size-5 text-red-600" />
            <p className="text-neutral-700">{t.hours}</p>
          </div>
        </div>
      </section>
    </>
  );
}

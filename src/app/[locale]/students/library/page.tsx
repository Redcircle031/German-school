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
    intro: 'Nasza biblioteka posiada bogaty zbiór literatury polskiej i niemieckiej. Oferujemy dostęp do książek, czasopism i zasobów cyfrowych wspierających naukę i rozwój czytelniczy.',
    stats: [
      { value: '15,000+', label: 'Książek' },
      { value: '50+', label: 'Czasopism' },
      { value: '100+', label: 'Miejsc' },
    ],
    hours: 'Godziny otwarcia: Poniedziałek - Piątek: 8:00 - 16:00',
  },
  de: {
    title: 'Schulbibliothek',
    subtitle: 'Die Welt der Bücher in zwei Sprachen',
    intro: 'Unsere Bibliothek verfügt über einen reichen Bestand an polnischer und deutscher Literatur. Wir bieten Zugang zu Büchern, Zeitschriften und digitalen Ressourcen.',
    stats: [
      { value: '15,000+', label: 'Bücher' },
      { value: '50+', label: 'Zeitschriften' },
      { value: '100+', label: 'Plätze' },
    ],
    hours: 'Öffnungszeiten: Montag - Freitag: 8:00 - 16:00',
  },
  en: {
    title: 'School Library',
    subtitle: 'World of books in two languages',
    intro: 'Our library has a rich collection of Polish and German literature. We offer access to books, magazines, and digital resources supporting learning and reading development.',
    stats: [
      { value: '15,000+', label: 'Books' },
      { value: '50+', label: 'Magazines' },
      { value: '100+', label: 'Seats' },
    ],
    hours: 'Opening Hours: Monday - Friday: 8:00 - 16:00',
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-neutral-600 leading-relaxed">{t.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.stats.map((stat, i) => (
              <div key={i} className="bg-primary-600 text-white rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 rounded-xl p-6 flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-primary-600" />
            <p className="text-neutral-700">{t.hours}</p>
          </div>
        </div>
      </section>
    </>
  );
}

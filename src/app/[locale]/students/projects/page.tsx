import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Lightbulb, Heart, Globe, BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Projekty | WBS', de: 'Projekte | WBS', en: 'Projects | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Projekty Uczniowskie', subtitle: 'Inicjatywy i działania naszych uczniów' },
  de: { title: 'Schülerprojekte', subtitle: 'Initiativen und Aktivitäten unserer Schüler' },
  en: { title: 'Student Projects', subtitle: 'Initiatives and activities of our students' },
};

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const projects = [
    { title: 'Eco School', desc: locale === 'pl' ? 'Program ochrony środowiska' : locale === 'de' ? 'Umweltschutzprogramm' : 'Environmental protection program', icon: Globe },
    { title: 'Volunteer Club', desc: locale === 'pl' ? 'Pomoc lokalnej społeczności' : locale === 'de' ? 'Hilfe für die lokale Gemeinschaft' : 'Help for the local community', icon: Heart },
    { title: 'STEM Lab', desc: locale === 'pl' ? 'Projekty naukowe i techniczne' : locale === 'de' ? 'Wissenschaftliche und technische Projekte' : 'Scientific and technical projects', icon: Lightbulb },
    { title: 'Reading Club', desc: locale === 'pl' ? 'Spotkania miłośników książek' : locale === 'de' ? 'Treffen von Bücherliebhabern' : 'Book lovers meetings', icon: BookOpen },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <div key={i} className="rounded-xl bg-neutral-50 p-6">
                <p.icon className="mb-4 size-10 text-red-600" />
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">{p.title}</h3>
                <p className="text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

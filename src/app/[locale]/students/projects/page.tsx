import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Music, Leaf, BookOpen, FlaskConical, Theater, Globe, Landmark, Heart, Film, Trophy, Cake } from 'lucide-react';
import projectsData from '@/data/extracted/projects.json';

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

const iconMap: Record<string, typeof Music> = {
  music: Music,
  leaf: Leaf,
  book: BookOpen,
  flask: FlaskConical,
  theater: Theater,
  globe: Globe,
  landmark: Landmark,
  bridge: Globe,
  heart: Heart,
  film: Film,
  trophy: Trophy,
  cake: Cake,
};

const statusLabels: Record<string, Record<string, string>> = {
  active: { pl: 'Aktywny', de: 'Aktiv', en: 'Active' },
  completed: { pl: 'Zakończony', de: 'Abgeschlossen', en: 'Completed' },
};

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const projects = projectsData.projects;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const Icon = iconMap[p.icon] || Globe;
              const statusLabel = statusLabels[p.status]?.[locale] || statusLabels[p.status]?.en || p.status;
              return (
                <div key={p.id} className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-red-100">
                      <Icon className="size-6 text-red-600" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-600'}`}>
                      {statusLabel}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                    {p.title[locale as keyof typeof p.title] || p.title.en}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {p.description[locale as keyof typeof p.description] || p.description.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

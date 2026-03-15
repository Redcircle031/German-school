import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { FileText, Download, Shield, Calendar, BookOpen, Settings } from 'lucide-react';
import { getAllPdfs, formatFileSize } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Formularze | WBS', de: 'Formulare | WBS', en: 'Forms | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Dokumenty i Formularze', subtitle: 'Wszystkie dokumenty szkolne do pobrania' },
  de: { title: 'Dokumente und Formulare', subtitle: 'Alle Schuldokumente zum Download' },
  en: { title: 'Documents & Forms', subtitle: 'All school documents available for download' },
};

const categoryLabels: Record<string, Record<string, string>> = {
  forms: { pl: 'Formularze', de: 'Formulare', en: 'Forms' },
  regulations: { pl: 'Regulaminy', de: 'Ordnungen', en: 'Regulations' },
  schedules: { pl: 'Plany i terminy', de: 'Pläne und Termine', en: 'Schedules' },
  programs: { pl: 'Programy', de: 'Programme', en: 'Programs' },
  other: { pl: 'Inne dokumenty', de: 'Sonstige Dokumente', en: 'Other Documents' },
};

const categoryIcons: Record<string, typeof FileText> = {
  forms: FileText,
  regulations: Shield,
  schedules: Calendar,
  programs: BookOpen,
  other: Settings,
};

function cleanTitle(filename: string): string {
  return filename
    .replace(/\.pdf$/, '')
    .replace(/_/g, ' ')
    .replace(/%[0-9A-Fa-f]{2}/g, match => decodeURIComponent(match))
    .replace(/^\d+\.\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default async function FormsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const allPdfs = getAllPdfs();

  const grouped = allPdfs.reduce<Record<string, typeof allPdfs>>((acc, pdf) => {
    const cat = pdf.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(pdf);
    return acc;
  }, {});

  const categoryOrder = ['forms', 'regulations', 'schedules', 'programs', 'other'];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom mx-auto max-w-4xl space-y-12">
          {categoryOrder.map((cat) => {
            const pdfs = grouped[cat];
            if (!pdfs || pdfs.length === 0) return null;
            const Icon = categoryIcons[cat] || FileText;
            const label = categoryLabels[cat]?.[locale] || categoryLabels[cat]?.en || cat;

            return (
              <div key={cat}>
                <div className="mb-6 flex items-center gap-3 border-b border-neutral-200 pb-3">
                  <Icon className="size-6 text-red-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">{label}</h2>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-500">{pdfs.length}</span>
                </div>
                <div className="grid gap-3">
                  {pdfs.map((pdf) => (
                    <a
                      key={pdf.filename}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl bg-neutral-50 p-4 transition-colors hover:bg-red-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-red-100">
                          <FileText className="size-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900">{cleanTitle(pdf.filename)}</h3>
                          <p className="text-sm text-neutral-500">PDF &middot; {formatFileSize(pdf.size)}</p>
                        </div>
                      </div>
                      <Download className="size-5 text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

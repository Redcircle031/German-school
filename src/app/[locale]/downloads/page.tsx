import { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import { getAllPdfs, formatFileSize } from '@/lib/cms';
import { FileText, Download, Filter } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Dokumenty do pobrania | WBS', de: 'Downloads | WBS', en: 'Downloads | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Pobierz formularze, regulaminy i dokumenty szkolne',
    de: 'Formulare, Vorschriften und Schuldokumente herunterladen',
    en: 'Download school forms, regulations and documents',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function PdfDownloadsPage({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale as any);

  const pdfs = getAllPdfs();

  // Group PDFs by category
  const categories = {
    forms: pdfs.filter(p => p.category === 'forms'),
    regulations: pdfs.filter(p => p.category === 'regulations'),
    schedules: pdfs.filter(p => p.category === 'schedules'),
    programs: pdfs.filter(p => p.category === 'programs'),
    other: pdfs.filter(p => p.category === 'other'),
  };

  // Get category label
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      forms: { pl: 'Formularze', de: 'Formulare', en: 'Forms' },
      regulations: { pl: 'Regulaminy', de: 'Ordnungen', en: 'Regulations' },
      schedules: { pl: 'Harmonogramy', de: 'Pläne', en: 'Schedules' },
      programs: { pl: 'Programy', de: 'Programme', en: 'Programs' },
      other: { pl: 'Inne', de: 'Andere', en: 'Other' },
    };
    return labels[category]?.[locale] || labels[category]?.en || category;
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'forms':
        return '📝';
      case 'regulations':
        return '📋';
      case 'schedules':
        return '📅';
      case 'programs':
        return '📚';
      default:
        return '📄';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-16 pt-32">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              {locale === 'pl' ? 'Centrum Pobierania' : locale === 'de' ? 'Download-Center' : 'Download Center'}
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              {locale === 'pl'
                ? 'Pobierz formularze, regulaminy i inne dokumenty szkolne.'
                : locale === 'de'
                ? 'Laden Sie Formulare, Ordnungen und andere Schuldokumente herunter.'
                : 'Download forms, regulations, and other school documents.'}
            </p>
          </div>
        </div>
      </section>

      {/* PDF Categories */}
      {Object.entries(categories).map(([category, categoryPdfs]) => {
        if (categoryPdfs.length === 0) return null;

        return (
          <section key={category} className="border-b border-neutral-200 bg-white py-16">
            <div className="container-custom">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{getCategoryIcon(category)}</span>
                  <h2 className="text-3xl font-bold text-neutral-900">
                    {getCategoryLabel(category)}
                  </h2>
                </div>
                <p className="text-neutral-600">
                  {categoryPdfs.length}{' '}
                  {locale === 'pl'
                    ? 'dokumentów'
                    : locale === 'de'
                    ? 'Dokumente'
                    : 'documents'}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryPdfs.map((pdf) => (
                  <a
                    key={pdf.filename}
                    href={pdf.url}
                    download
                    className="group rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-100 transition-colors group-hover:bg-red-600">
                        <FileText className="size-6 text-red-600 transition-colors group-hover:text-white" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 line-clamp-2 font-semibold text-neutral-900 transition-colors group-hover:text-red-600">
                          {pdf.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Download className="size-3" />
                            PDF
                          </span>
                          <span>{formatFileSize(pdf.size)}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Empty State */}
      {pdfs.length === 0 && (
        <section className="bg-neutral-50 py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <FileText className="mx-auto mb-6 size-16 text-neutral-300" />
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                {locale === 'pl'
                  ? 'Brak dokumentów'
                  : locale === 'de'
                  ? 'Keine Dokumente'
                  : 'No documents available'}
              </h2>
              <p className="mb-8 text-neutral-600">
                {locale === 'pl'
                  ? 'Sprawdź później, aby zobaczyć nowe dokumenty.'
                  : locale === 'de'
                  ? 'Schauen Sie später vorbei für neue Dokumente.'
                  : 'Check back later for new documents.'}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
              >
                {locale === 'pl' ? 'Powrót do strony głównej' : locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {pdfs.length > 0 && (
        <section className="bg-red-600 py-16 text-white">
          <div className="container-custom">
            <div className="grid gap-8 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl font-bold">{pdfs.length}</div>
                <div className="text-red-100">
                  {locale === 'pl' ? 'Dokumentów' : locale === 'de' ? 'Dokumente' : 'Documents'}
                </div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">
                  {Object.keys(categories).filter(k => categories[k as keyof typeof categories].length > 0).length}
                </div>
                <div className="text-red-100">
                  {locale === 'pl' ? 'Kategorii' : locale === 'de' ? 'Kategorien' : 'Categories'}
                </div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">
                  {formatFileSize(pdfs.reduce((sum, pdf) => sum + pdf.size, 0))}
                </div>
                <div className="text-red-100">
                  {locale === 'pl' ? 'Łącznie' : locale === 'de' ? 'Insgesamt' : 'Total'}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

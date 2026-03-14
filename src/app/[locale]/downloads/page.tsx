import { getTranslations } from 'next-intl/server';
import { getAllPdfs, formatFileSize } from '@/lib/cms';
import { FileText, Download, Filter } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PdfDownloadsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();

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
      <section className="relative min-h-[40vh] bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pt-32 pb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {locale === 'pl' ? 'Centrum Pobierania' : locale === 'de' ? 'Download-Center' : 'Download Center'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
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
          <section key={category} className="py-16 bg-white border-b border-neutral-200">
            <div className="container-custom">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPdfs.map((pdf) => (
                  <a
                    key={pdf.filename}
                    href={pdf.url}
                    download
                    className="group bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-secondary-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-600 transition-colors">
                        <FileText className="w-6 h-6 text-secondary-600 group-hover:text-white transition-colors" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-secondary-600 transition-colors">
                          {pdf.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
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
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <FileText className="w-16 h-16 text-neutral-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {locale === 'pl'
                  ? 'Brak dokumentów'
                  : locale === 'de'
                  ? 'Keine Dokumente'
                  : 'No documents available'}
              </h2>
              <p className="text-neutral-600 mb-8">
                {locale === 'pl'
                  ? 'Sprawdź później, aby zobaczyć nowe dokumenty.'
                  : locale === 'de'
                  ? 'Schauen Sie später vorbei für neue Dokumente.'
                  : 'Check back later for new documents.'}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 text-white font-semibold rounded-full hover:bg-secondary-700 transition-colors"
              >
                {locale === 'pl' ? 'Powrót do strony głównej' : locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {pdfs.length > 0 && (
        <section className="py-16 bg-secondary-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">{pdfs.length}</div>
                <div className="text-secondary-100">
                  {locale === 'pl' ? 'Dokumentów' : locale === 'de' ? 'Dokumente' : 'Documents'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  {Object.keys(categories).filter(k => categories[k as keyof typeof categories].length > 0).length}
                </div>
                <div className="text-secondary-100">
                  {locale === 'pl' ? 'Kategorii' : locale === 'de' ? 'Kategorien' : 'Categories'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  {formatFileSize(pdfs.reduce((sum, pdf) => sum + pdf.size, 0))}
                </div>
                <div className="text-secondary-100">
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

import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { FileText, Download, FileCheck, FileSpreadsheet, FileSignature } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Formularze | WBS', de: 'Formulare | WBS', en: 'Forms | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const formsData = {
  pl: {
    title: 'Formularze do pobrania',
    categories: [
      { title: 'Rekrutacja', forms: [
        { name: 'Wniosek o przyjęcie', format: 'PDF', size: '245 KB', icon: FileText },
        { name: 'Zgoda na przetwarzanie danych', format: 'PDF', size: '156 KB', icon: FileCheck },
      ]},
      { title: 'Dokumentacja szkolna', forms: [
        { name: 'Wniosek o zwolnienie', format: 'PDF', size: '89 KB', icon: FileText },
        { name: 'Zgoda na wyjazd', format: 'PDF', size: '102 KB', icon: FileSignature },
      ]},
    ],
  },
  de: {
    title: 'Formulare zum Download',
    categories: [
      { title: 'Rekrutierung', forms: [
        { name: 'Aufnahmeantrag', format: 'PDF', size: '245 KB', icon: FileText },
        { name: 'Datenschutzeinwilligung', format: 'PDF', size: '156 KB', icon: FileCheck },
      ]},
      { title: 'Schulunterlagen', forms: [
        { name: 'Befreiungsantrag', format: 'PDF', size: '89 KB', icon: FileText },
        { name: 'Ausflugseinverständnis', format: 'PDF', size: '102 KB', icon: FileSignature },
      ]},
    ],
  },
  en: {
    title: 'Downloadable Forms',
    categories: [
      { title: 'Admissions', forms: [
        { name: 'Admission Application', format: 'PDF', size: '245 KB', icon: FileText },
        { name: 'Data Consent Form', format: 'PDF', size: '156 KB', icon: FileCheck },
      ]},
      { title: 'School Documents', forms: [
        { name: 'Exemption Request', format: 'PDF', size: '89 KB', icon: FileText },
        { name: 'Field Trip Consent', format: 'PDF', size: '102 KB', icon: FileSignature },
      ]},
    ],
  },
};

export default async function FormsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = formsData[locale as keyof typeof formsData] || formsData.en;

  return (
    <>
      <PageHeader lang={locale} title={data.title} description="" />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-12">
          {data.categories.map((cat, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 pb-2 border-b border-neutral-200">{cat.title}</h2>
              <div className="grid gap-4">
                {cat.forms.map((form, j) => (
                  <div key={j} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"><form.icon className="w-6 h-6 text-primary-600" /></div>
                      <div><h3 className="font-semibold text-neutral-900">{form.name}</h3><p className="text-sm text-neutral-500">{form.format} • {form.size}</p></div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"><Download className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

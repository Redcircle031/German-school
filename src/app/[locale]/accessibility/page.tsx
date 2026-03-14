import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Accessibility Statement',
    description: 'Information about website accessibility',
  };
}

type ComplianceStatus = 'fully' | 'partially' | 'not';

const getComplianceStatus = (): ComplianceStatus => 'partially';

export default async function AccessibilityStatement({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const complianceStatus = getComplianceStatus();

  return (
    <>
      <Header lang={locale} />
      <main className="pt-18 md:pt-20 min-h-screen bg-neutral-50">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href={`/${locale}`} className="text-neutral-500 hover:text-primary-600">
                {t('navigation.home')}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-900 font-medium">
                {locale === 'pl' ? 'Deklaracja Dostępności' : locale === 'de' ? 'Erklärung zur Barrierefreiheit' : 'Accessibility Statement'}
              </span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              {locale === 'pl' ? 'Deklaracja Dostępności' : locale === 'de' ? 'Erklärung zur Barrierefreiheit' : 'Accessibility Statement'}
            </h1>

            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
              {/* Compliance Status */}
              <div className={`mb-8 p-6 rounded-xl ${
                complianceStatus === 'fully' ? 'bg-green-50' :
                complianceStatus === 'partially' ? 'bg-yellow-50' : 'bg-red-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  {complianceStatus === 'fully' ? (
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  ) : (
                    <XCircle className="w-8 h-8 text-yellow-600" />
                  )}
                  <h2 className="text-xl font-semibold">
                    {locale === 'pl' ? 'Status zgodności' : locale === 'de' ? 'Konformitätsstatus' : 'Compliance Status'}
                  </h2>
                </div>
                <p className={complianceStatus === 'fully' ? 'text-green-800' : 'text-yellow-800'}>
                  {complianceStatus === 'fully'
                    ? locale === 'pl'
                      ? 'Ta strona internetowa jest w pełni zgodna z WCAG 2.1 AA'
                      : locale === 'de'
                      ? 'Diese Website ist vollständig konform mit WCAG 2.1 AA'
                      : 'This website is fully compliant with WCAG 2.1 AA'
                    : locale === 'pl'
                    ? 'Ta strona internetowa jest częściowo zgodna z WCAG 2.1 AA. Niektóre treści mogą nie być w pełni dostępne.'
                    : locale === 'de'
                    ? 'Diese Website ist teilweise konform mit WCAG 2.1 AA. Einige Inhalte sind möglicherweise nicht vollständig zugänglich.'
                    : 'This website is partially compliant with WCAG 2.1 AA. Some content may not be fully accessible.'}
                </p>
              </div>

              {/* Standards */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Standardy dostępności' : locale === 'de' ? 'Barrierefreiheits-Standards' : 'Accessibility Standards'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Ta strona internetowa jest projektowana zgodnie z następującymi standardami:'
                    : locale === 'de'
                    ? 'Diese Website wird gemäß den folgenden Standards gestaltet:'
                    : 'This website is designed according to the following standards:'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>WCAG 2.1 Level AA</li>
                  <li>EN 301 549 (European Accessibility Standard)</li>
                  <li>{locale === 'pl' ? 'Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych' : locale === 'de' ? 'Gesetz vom 4. April 2019 über die digitale Barrierefreiheit von Websites und mobilen Anwendungen öffentlicher Stellen' : 'Act of 4 April 2019 on digital accessibility of public sector websites and mobile applications'}</li>
                </ul>
              </section>

              {/* Compatibility */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Kompatybilność' : locale === 'de' ? 'Kompatibilität' : 'Compatibility'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Strona jest kompatybilna z następującymi technologiami asystującymi:'
                    : locale === 'de'
                    ? 'Die Website ist mit den folgenden unterstützenden Technologien kompatibel:'
                    : 'The website is compatible with the following assistive technologies:'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>NVDA + Firefox/Chrome</li>
                  <li>JAWS + Firefox/Chrome</li>
                  <li>VoiceOver + Safari (macOS, iOS)</li>
                  <li>TalkBack + Chrome (Android)</li>
                  <li>{locale === 'pl' ? 'Nawigacja za pomocą klawiatury' : locale === 'de' ? 'Tastaturnavigation' : 'Keyboard navigation'}</li>
                  <li>{locale === 'pl' ? 'Powiększniki ekranu' : locale === 'de' ? 'Bildschirmvergrößerungen' : 'Screen magnifiers'}</li>
                </ul>
              </section>

              {/* Known Issues */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Znane problemy z dostępnością' : locale === 'de' ? 'Bekannte Barrierefreiheitsprobleme' : 'Known Accessibility Issues'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Pomimo naszych starań, niektóre treści mogą nie być w pełni dostępne:'
                    : locale === 'de'
                    ? 'Trotz unserer Bemühungen sind einige Inhalte möglicherweise nicht vollständig zugänglich:'
                    : 'Despite our efforts, some content may not be fully accessible:'}
                </p>
                <div className="space-y-4">
                  <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-medium text-yellow-900 mb-2">
                      {locale === 'pl' ? 'Starsze dokumenty PDF' : locale === 'de' ? 'Ältere PDF-Dokumente' : 'Older PDF documents'}
                    </h3>
                    <p className="text-sm text-yellow-800">
                      {locale === 'pl'
                        ? 'Niektóre starsze dokumenty PDF mogą nie być w pełni dostępne dla czytników ekranu. Pracujemy nad ich udostępnieniem.'
                        : locale === 'de'
                        ? 'Einige ältere PDF-Dokumente sind möglicherweise nicht vollständig für Bildschirmleser zugänglich. Wir arbeiten daran, sie zugänglich zu machen.'
                        : 'Some older PDF documents may not be fully accessible to screen readers. We are working to make them accessible.'}
                    </p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-medium text-yellow-900 mb-2">
                      {locale === 'pl' ? 'Treści wideo' : locale === 'de' ? 'Videoinhalte' : 'Video content'}
                    </h3>
                    <p className="text-sm text-yellow-800">
                      {locale === 'pl'
                        ? 'Niektóre starsze materiały wideo mogą nie mieć napisów lub audiodeskrypcji.'
                        : locale === 'de'
                        ? 'Einige ältere Videomaterialien haben möglicherweise keine Untertitel oder Audiodeskription.'
                        : 'Some older video materials may not have captions or audio description.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Features */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Funkcje dostępności' : locale === 'de' ? 'Barrierefreiheitsfunktionen' : 'Accessibility Features'}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { pl: 'Nawigacja klawiaturą', de: 'Tastaturnavigation', en: 'Keyboard navigation' },
                    { pl: 'Tekst alternatywny dla obrazów', de: 'Alternativtext für Bilder', en: 'Alt text for images' },
                    { pl: 'Kontrast kolorów zgodny z WCAG AA', de: 'Farbkontrast gemäß WCAG AA', en: 'Color contrast WCAG AA compliant' },
                    { pl: 'Możliwość zmiany rozmiaru tekstu', de: 'Textgröße änderbar', en: 'Resizable text' },
                    { pl: 'Struktura nagłówków', de: 'Überschriftenstruktur', en: 'Heading structure' },
                    { pl: 'Etykiety formularzy', de: 'Formularbeschriftungen', en: 'Form labels' },
                    { pl: 'Linki skip', de: 'Skip-Links', en: 'Skip links' },
                    { pl: 'Wskaźniki fokusu', de: 'Fokus-Indikatoren', en: 'Focus indicators' },
                    { pl: 'ARIA landmarks', de: 'ARIA-Landmarken', en: 'ARIA landmarks' },
                    { pl: 'Responsywny design', de: 'Responsives Design', en: 'Responsive design' },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>
                        {locale === 'pl' ? feature.pl : locale === 'de' ? feature.de : feature.en}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Feedback */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Opinie i kontakt' : locale === 'de' ? 'Feedback und Kontakt' : 'Feedback and Contact'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Jeśli napotkasz problemy z dostępnością na naszej stronie, prosimy o kontakt:'
                    : locale === 'de'
                    ? 'Wenn Sie auf unserer Website auf Barrierefreiheitsprobleme stoßen, kontaktieren Sie uns bitte:'
                    : 'If you encounter accessibility issues on our website, please contact us:'}
                </p>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="mb-2">
                    Email: <strong className="text-primary-600">dostepnosc@wbs.pl</strong>
                  </p>
                  <p className="mb-2">
                    {locale === 'pl' ? 'Telefon:' : locale === 'de' ? 'Telefon:' : 'Phone:'} <strong>+48 22 642 27 05</strong>
                  </p>
                  <p>
                    {locale === 'pl' ? 'Adres:' : locale === 'de' ? 'Adresse:' : 'Address:'} ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warszawa
                  </p>
                </div>
              </section>

              {/* Enforcement */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Procedura odwoławcza' : locale === 'de' ? 'Beschwerdeverfahren' : 'Enforcement Procedure'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Jeśli nie jesteś zadowolony z naszej odpowiedzi na zgłoszony problem z dostępnością, masz prawo wnieść skargę do:'
                    : locale === 'de'
                    ? 'Wenn Sie mit unserer Antwort auf ein gemeldetes Barrierefreiheitsproblem nicht zufrieden sind, haben Sie das Recht, Beschwerde einzulegen bei:'
                    : 'If you are not satisfied with our response to a reported accessibility issue, you have the right to lodge a complaint with:'}
                </p>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">
                    {locale === 'pl' ? 'Urząd Ochrony Danych Osobowych' : locale === 'de' ? 'Amt für den Schutz personenbezogener Daten' : 'Personal Data Protection Office (UODO)'}
                  </p>
                  <p>ul. Stawki 2, 00-193 Warszawa</p>
                  <p>{locale === 'pl' ? 'Tel:' : locale === 'de' ? 'Tel:' : 'Tel:'} +48 22 860 70 86</p>
                  <p>Email: kancelaria@uodo.gov.pl</p>
                </div>
              </section>

              {/* Assessment */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? 'Metoda oceny' : locale === 'de' ? 'Bewertungsmethode' : 'Assessment Method'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'Dostępność tej strony została oceniona poprzez samoocenę przeprowadzoną przez zespół WBS.'
                    : locale === 'de'
                    ? 'Die Barrierefreiheit dieser Website wurde durch eine vom WBS-Team durchgeführte Selbstbewertung bewertet.'
                    : 'The accessibility of this website has been assessed through self-conducted evaluation by the WBS team.'}
                </p>
              </section>

              {/* Last Updated */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  {t('legal.lastUpdated')}: <time dateTime="2026-03-13">13.03.2026</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={locale} />
      <CookieConsent lang={locale} />
    </>
  );
}

import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'common' });

  return {
    title: 'Privacy Policy',
    description: 'Data protection and privacy information',
  };
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const schoolInfo = {
    name: locale === 'pl' 
      ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie'
      : locale === 'de'
      ? 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau'
      : 'Polish-German School of Meetings and Dialogue named after Willy Brandt',
    address: 'ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warszawa, Poland',
    regon: '000000000',
    nip: '0000000000',
    email: 'sekretariat@wbs.pl',
    phone: '+48 22 642 27 05',
  };

  return (
    <>
      <Header lang={locale} />
      <main className="pt-18 md:pt-20 min-h-screen bg-neutral-50">
        <div className="container-custom py-12 md:py-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link href={`/${locale}`} className="text-neutral-500 hover:text-primary-600">
                {t('navigation.home')}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-900 font-medium">
                {locale === 'pl' ? 'Polityka prywatności' : locale === 'de' ? 'Datenschutz' : 'Privacy Policy'}
              </span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              {locale === 'pl' ? 'Polityka Prywatności' : locale === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 prose prose-custom max-w-none">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '1. Administrator Danych' : locale === 'de' ? '1. Datenverantwortlicher' : '1. Data Controller'}
                </h2>
                <p>
                  <strong>{schoolInfo.name}</strong>
                  <br />
                  {schoolInfo.address}
                  <br />
                  {locale === 'pl' ? 'REGON:' : locale === 'de' ? 'REGON:' : 'REGON:'} {schoolInfo.regon}
                  <br />
                  {locale === 'pl' ? 'NIP:' : locale === 'de' ? 'NIP:' : 'NIP:'} {schoolInfo.nip}
                  <br />
                  {locale === 'pl' ? 'Email:' : locale === 'de' ? 'E-Mail:' : 'Email:'} {schoolInfo.email}
                  <br />
                  {locale === 'pl' ? 'Tel:' : locale === 'de' ? 'Tel:' : 'Tel:'} {schoolInfo.phone}
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '2. Inspektor Ochrony Danych' : locale === 'de' ? '2. Datenschutzbeauftragter' : '2. Data Protection Officer'}
                </h2>
                <p>
                  {locale === 'pl' 
                    ? 'Wyznaczyliśmy Inspektora Ochrony Danych, z którym można się skontaktować w sprawach związanych z przetwarzaniem danych osobowych:'
                    : locale === 'de'
                    ? 'Wir haben einen Datenschutzbeauftragten bestellt, den Sie in Angelegenheiten der Datenverarbeitung kontaktieren können:'
                    : 'We have appointed a Data Protection Officer whom you can contact regarding data processing matters:'}
                </p>
                <p className="mt-2">
                  Email: <strong>iod@wbs.pl</strong>
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' 
                    ? '3. Cele i Podstawy Przetwarzania Danych' 
                    : locale === 'de' 
                    ? '3. Zwecke und Rechtsgrundlagen der Datenverarbeitung'
                    : '3. Purposes and Legal Basis of Data Processing'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Przetwarzamy Twoje dane osobowe w następujących celach:'
                    : locale === 'de'
                    ? 'Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:'
                    : 'We process your personal data for the following purposes:'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>{locale === 'pl' ? 'Realizacja procesu rekrutacji' : locale === 'de' ? 'Durchführung des Rekrutierungsprozesses' : 'Admissions process'}</strong>
                    {' '}- {locale === 'pl' ? 'art. 6 ust. 1 lit. b RODO' : locale === 'de' ? 'Art. 6 Abs. 1 lit. b DSGVO' : 'Art. 6(1)(b) GDPR'}
                  </li>
                  <li>
                    <strong>{locale === 'pl' ? 'Prowadzenie dokumentacji szkolnej' : locale === 'de' ? 'Führung der Schulunterlagen' : 'School record keeping'}</strong>
                    {' '}- {locale === 'pl' ? 'art. 6 ust. 1 lit. c RODO' : locale === 'de' ? 'Art. 6 Abs. 1 lit. c DSGVO' : 'Art. 6(1)(c) GDPR'}
                  </li>
                  <li>
                    <strong>{locale === 'pl' ? 'Kontakt z rodzicami/opiekunami' : locale === 'de' ? 'Kontakt mit Eltern/Erziehungsberechtigten' : 'Communication with parents/guardians'}</strong>
                    {' '}- {locale === 'pl' ? 'art. 6 ust. 1 lit. b RODO' : locale === 'de' ? 'Art. 6 Abs. 1 lit. b DSGVO' : 'Art. 6(1)(b) GDPR'}
                  </li>
                  <li>
                    <strong>{locale === 'pl' ? 'Wysyłanie newslettera (za zgodą)' : locale === 'de' ? 'Newsletter-Versand (mit Einwilligung)' : 'Newsletter distribution (with consent)'}</strong>
                    {' '}- {locale === 'pl' ? 'art. 6 ust. 1 lit. a RODO' : locale === 'de' ? 'Art. 6 Abs. 1 lit. a DSGVO' : 'Art. 6(1)(a) GDPR'}
                  </li>
                  <li>
                    <strong>{locale === 'pl' ? 'Działania marketingowe (za zgodą)' : locale === 'de' ? 'Marketingmaßnahmen (mit Einwilligung)' : 'Marketing activities (with consent)'}</strong>
                    {' '}- {locale === 'pl' ? 'art. 6 ust. 1 lit. a RODO' : locale === 'de' ? 'Art. 6 Abs. 1 lit. a DSGVO' : 'Art. 6(1)(a) GDPR'}
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '4. Odbiorcy Danych' : locale === 'de' ? '4. Datenempfänger' : '4. Data Recipients'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Twoje dane mogą być udostępniane następującym odbiorcom:'
                    : locale === 'de'
                    ? 'Ihre Daten können folgenden Empfängern zugänglich gemacht werden:'
                    : 'Your data may be disclosed to the following recipients:'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{locale === 'pl' ? 'Organy nadzoru pedagogicznego' : locale === 'de' ? 'Aufsichtsbehörden' : 'Educational supervisory authorities'}</li>
                  <li>{locale === 'pl' ? 'Systemy informatyczne (dziennik elektroniczny)' : locale === 'de' ? 'IT-Systeme (elektronisches Klassenbuch)' : 'IT systems (electronic register)'}</li>
                  <li>{locale === 'pl' ? 'Podmioty przetwarzające (hosting, IT)' : locale === 'de' ? 'Auftragsverarbeiter (Hosting, IT)' : 'Data processors (hosting, IT)'}</li>
                  <li>{locale === 'pl' ? 'Ubezpieczyciele (w zakresie ubezpieczenia NNW)' : locale === 'de' ? 'Versicherungen (im Rahmen der Unfallversicherung)' : 'Insurance companies (accident insurance)'}</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '5. Prawa Osób, Których Dane Dotyczą' : locale === 'de' ? '5. Rechte der betroffenen Person' : '5. Data Subject Rights'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Przysługuje Ci prawo do:'
                    : locale === 'de'
                    ? 'Sie haben das Recht auf:'
                    : 'You have the right to:'}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{locale === 'pl' ? 'Dostępu do swoich danych' : locale === 'de' ? 'Zugang zu Ihren Daten' : 'Access your data'}</li>
                  <li>{locale === 'pl' ? 'Sprostowania danych' : locale === 'de' ? 'Berichtigung Ihrer Daten' : 'Rectify your data'}</li>
                  <li>{locale === 'pl' ? 'Usunięcia danych („prawo do bycia zapomnianym")' : locale === 'de' ? 'Löschung Ihrer Daten („Recht auf Vergessenwerden")' : 'Erasure of data (right to be forgotten)'}</li>
                  <li>{locale === 'pl' ? 'Ograniczenia przetwarzania' : locale === 'de' ? 'Einschränkung der Verarbeitung' : 'Restrict processing'}</li>
                  <li>{locale === 'pl' ? 'Przenoszenia danych' : locale === 'de' ? 'Datenübertragbarkeit' : 'Data portability'}</li>
                  <li>{locale === 'pl' ? 'Wniesienia sprzeciwu wobec przetwarzania' : locale === 'de' ? 'Widerspruch gegen die Verarbeitung' : 'Object to processing'}</li>
                  <li>{locale === 'pl' ? 'Wniesienia skargi do organu nadzorczego (UODO)' : locale === 'de' ? 'Beschwerde bei einer Aufsichtsbehörde (UODO)' : 'Lodge a complaint with supervisory authority (UODO)'}</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '6. Okres Przechowywania Danych' : locale === 'de' ? '6. Speicherdauer' : '6. Data Retention Period'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, zgodnie z przepisami prawa oświatowego i archiwalnego.'
                    : locale === 'de'
                    ? 'Wir speichern die Daten für den Zeitraum, der zur Erreichung der Zwecke erforderlich ist, für die sie erhoben wurden, gemäß den bildungsrechtlichen und archivrechtlichen Vorschriften.'
                    : 'We store data for the period necessary to achieve the purposes for which it was collected, in accordance with educational and archival legislation.'}
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '7. Pliki Cookies' : locale === 'de' ? '7. Cookies' : '7. Cookies'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'Nasza strona używa plików cookies. Więcej informacji znajdziesz w naszej'
                    : locale === 'de'
                    ? 'Unsere Website verwendet Cookies. Weitere Informationen finden Sie in unserer'
                    : 'Our website uses cookies. You can find more information in our'}
                  {' '}
                  <Link href={`/${locale}/cookies`} className="text-primary-600 hover:underline">
                    {locale === 'pl' ? 'Polityce Cookies' : locale === 'de' ? 'Cookie-Richtlinie' : 'Cookie Policy'}
                  </Link>.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'pl' ? '8. Kontakt' : locale === 'de' ? '8. Kontakt' : '8. Contact'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'W sprawach związanych z ochroną danych osobowych prosimy o kontakt:'
                    : locale === 'de'
                    ? 'Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:'
                    : 'For data protection inquiries, please contact us at:'}
                </p>
                <p className="mt-2">
                  Email: <strong>iod@wbs.pl</strong>
                  <br />
                  {locale === 'pl' ? 'Listownie na adres szkoły' : locale === 'de' ? 'Per Post an die Schuladresse' : 'By mail to the school address'}
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

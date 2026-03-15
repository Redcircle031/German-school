import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: 'Polityka cookies | WBS',
    de: 'Cookie-Richtlinie | WBS',
    en: 'Cookie Policy | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Informacje o plikach cookies na stronie WBS',
    de: 'Informationen zu Cookies auf der WBS-Website',
    en: 'Information about cookies on the WBS website',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function CookiePolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
      <div className="min-h-screen bg-neutral-50 pt-18 md:pt-20">
        <div className="container-custom py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 flex items-center space-x-2 text-sm">
              <Link href={`/${locale}`} className="text-neutral-500 hover:text-red-600">
                {t('navigation.home')}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="font-medium text-neutral-900">
                {locale === 'pl' ? 'Polityka Cookies' : locale === 'de' ? 'Cookie-Richtlinie' : 'Cookie Policy'}
              </span>
            </nav>

            <h1 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Polityka Cookies' : locale === 'de' ? 'Cookie-Richtlinie' : 'Cookie Policy'}
            </h1>

            <div className="prose-custom prose max-w-none rounded-2xl bg-white p-6 shadow-sm md:p-10">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? '1. Czym są pliki cookies?' : locale === 'de' ? '1. Was sind Cookies?' : '1. What are Cookies?'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'Pliki cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu (komputerze, smartfonie, tablecie) podczas odwiedzania stron internetowych. Są powszechnie używane do zapewnienia działania stron internetowych lub zwiększenia ich wydajności, a także do celów informacyjnych.'
                    : locale === 'de'
                    ? 'Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden, wenn Sie Websites besuchen. Sie werden häufig verwendet, um das Funktionieren von Websites zu gewährleisten oder ihre Leistung zu verbessern, sowie für Informationszwecke.'
                    : 'Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit websites. They are widely used to make websites work or improve their performance, as well as for informational purposes.'}
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? '2. Jakich cookies używamy?' : locale === 'de' ? '2. Welche Cookies verwenden wir?' : '2. What Cookies Do We Use?'}
                </h2>
                
                {/* Necessary */}
                <div className="mb-4 rounded-lg border border-neutral-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {locale === 'pl' ? 'Cookies Niezbędne' : locale === 'de' ? 'Erforderliche Cookies' : 'Necessary Cookies'}
                  </h3>
                  <p className="mb-3 text-neutral-600">
                    {locale === 'pl'
                      ? 'Te pliki są niezbędne do działania strony internetowej i nie można ich wyłączyćć. Są używane tylko w odpowiedzi na Twoje działania, takie jak ustawienie preferencji prywatności, logowanie lub wypełnianie formularzy.'
                      : locale === 'de'
                      ? 'Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie werden nur als Reaktion auf Ihre Aktionen verwendet, wie z.B. das Einstellen von Datenschutzeinstellungen, Anmelden oder Ausfüllen von Formularen.'
                      : 'These cookies are necessary for the website to function and cannot be disabled. They are only used in response to your actions, such as setting privacy preferences, logging in, or filling out forms.'}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {locale === 'pl' ? 'Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)' : locale === 'de' ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)' : 'Legal basis: Art. 6(1)(f) GDPR (legitimate interest)'}
                  </p>
                </div>

                {/* Statistics */}
                <div className="mb-4 rounded-lg border border-neutral-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {locale === 'pl' ? 'Cookies Statystyczne' : locale === 'de' ? 'Statistik-Cookies' : 'Statistics Cookies'}
                  </h3>
                  <p className="mb-3 text-neutral-600">
                    {locale === 'pl'
                      ? 'Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, zbierając i raportując informacje anonimowo. Używamy Google Analytics do analizy ruchu na stronie.'
                      : locale === 'de'
                      ? 'Sie helfen uns zu verstehen, wie Besucher unsere Website nutzen, indem sie Informationen anonym sammeln und melden. Wir verwenden Google Analytics zur Analyse des Website-Traffics.'
                      : 'They help us understand how visitors use our website by collecting and reporting information anonymously. We use Google Analytics for website traffic analysis.'}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {locale === 'pl' ? 'Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda)' : locale === 'de' ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)' : 'Legal basis: Art. 6(1)(a) GDPR (consent)'}
                  </p>
                </div>

                {/* Marketing */}
                <div className="mb-4 rounded-lg border border-neutral-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {locale === 'pl' ? 'Cookies Marketingowe' : locale === 'de' ? 'Marketing-Cookies' : 'Marketing Cookies'}
                  </h3>
                  <p className="mb-3 text-neutral-600">
                    {locale === 'pl'
                      ? 'Mogą być używane do śledzenia aktywności użytkownika na różnych stronach internetowych w celu wyświetlania odpowiednich reklam.'
                      : locale === 'de'
                      ? 'Sie können verwendet werden, um die Aktivität des Benutzers über verschiedene Websites hinweg zu verfolgen, um relevante Anzeigen zu schalten.'
                      : 'They may be used to track user activity across different websites to display relevant advertisements.'}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {locale === 'pl' ? 'Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda)' : locale === 'de' ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)' : 'Legal basis: Art. 6(1)(a) GDPR (consent)'}
                  </p>
                </div>

                {/* Social */}
                <div className="mb-4 rounded-lg border border-neutral-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {locale === 'pl' ? 'Cookies Mediów Społecznościowych' : locale === 'de' ? 'Social-Media-Cookies' : 'Social Media Cookies'}
                  </h3>
                  <p className="mb-3 text-neutral-600">
                    {locale === 'pl'
                      ? 'Umożliwiają udostępnianie treści w mediach społecznościowych i mogą śledzić Twoją aktywność na innych stronach.'
                      : locale === 'de'
                      ? 'Sie ermöglichen das Teilen von Inhalten in sozialen Medien und können Ihre Aktivität auf anderen Websites verfolgen.'
                      : 'They enable sharing content on social media and may track your activity on other websites.'}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {locale === 'pl' ? 'Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda)' : locale === 'de' ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)' : 'Legal basis: Art. 6(1)(a) GDPR (consent)'}
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? '3. Jak zarządzać cookies?' : locale === 'de' ? '3. Wie verwalten Sie Cookies?' : '3. How to Manage Cookies?'}
                </h2>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Możesz kontrolować i/lub usuwać pliki cookies według własnego uznania. Możesz usunąć wszystkie pliki cookies, które już masz na swoim komputerze, a większość przeglądarek pozwala na ich blokowanie.'
                    : locale === 'de'
                    ? 'Sie können Cookies nach eigenem Ermessen kontrollieren und/oder löschen. Sie können alle Cookies löschen, die sich bereits auf Ihrem Computer befinden, und die meisten Browser ermöglichen deren Blockierung.'
                    : 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and most browsers allow you to block them.'}
                </p>
                <p className="mb-4">
                  {locale === 'pl'
                    ? 'Aby zarządzać ustawieniami cookies, użyj naszego menedżera cookies dostępnego na stronie lub skonfiguruj ustawienia swojej przeglądarki:'
                    : locale === 'de'
                    ? 'Um Cookie-Einstellungen zu verwalten, verwenden Sie unseren Cookie-Manager auf der Website oder konfigurieren Sie Ihre Browsereinstellungen:'
                    : 'To manage cookie settings, use our cookie manager available on the website or configure your browser settings:'}
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? '4. Szczegóły używanych cookies' : locale === 'de' ? '4. Details der verwendeten Cookies' : '4. Details of Cookies Used'}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="px-4 py-3 text-left font-semibold">{locale === 'pl' ? 'Nazwa' : locale === 'de' ? 'Name' : 'Name'}</th>
                        <th className="px-4 py-3 text-left font-semibold">{locale === 'pl' ? 'Dostawca' : locale === 'de' ? 'Anbieter' : 'Provider'}</th>
                        <th className="px-4 py-3 text-left font-semibold">{locale === 'pl' ? 'Cel' : locale === 'de' ? 'Zweck' : 'Purpose'}</th>
                        <th className="px-4 py-3 text-left font-semibold">{locale === 'pl' ? 'Wygaśnięcie' : locale === 'de' ? 'Ablauf' : 'Expiry'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-100">
                        <td className="px-4 py-3 font-mono">session_id</td>
                        <td className="px-4 py-3">WBS</td>
                        <td className="px-4 py-3">{locale === 'pl' ? 'Utrzymanie sesji' : locale === 'de' ? 'Sitzung aufrechterhalten' : 'Maintain session'}</td>
                        <td className="px-4 py-3">{locale === 'pl' ? 'Koniec sesji' : locale === 'de' ? 'Sitzungsende' : 'End of session'}</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="px-4 py-3 font-mono">cookie_consent</td>
                        <td className="px-4 py-3">WBS</td>
                        <td className="px-4 py-3">{locale === 'pl' ? 'Zapamiętanie zgody' : locale === 'de' ? 'Einwilligung speichern' : 'Remember consent'}</td>
                        <td className="px-4 py-3">1 rok</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="px-4 py-3 font-mono">_ga</td>
                        <td className="px-4 py-3">Google Analytics</td>
                        <td className="px-4 py-3">{locale === 'pl' ? 'Analityka' : locale === 'de' ? 'Analytik' : 'Analytics'}</td>
                        <td className="px-4 py-3">2 lata</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="px-4 py-3 font-mono">_gid</td>
                        <td className="px-4 py-3">Google Analytics</td>
                        <td className="px-4 py-3">{locale === 'pl' ? 'Analityka' : locale === 'de' ? 'Analytik' : 'Analytics'}</td>
                        <td className="px-4 py-3">24 godziny</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? '5. Kontakt' : locale === 'de' ? '5. Kontakt' : '5. Contact'}
                </h2>
                <p>
                  {locale === 'pl'
                    ? 'W przypadku pytań dotyczących naszej polityki cookies, prosimy o kontakt:'
                    : locale === 'de'
                    ? 'Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter:'
                    : 'If you have questions about our cookie policy, please contact us:'}
                </p>
                <p className="mt-2">
                  Email: <strong>iod@wbs.pl</strong>
                </p>
              </section>

              {/* Last Updated */}
              <div className="mt-12 border-t border-neutral-200 pt-8">
                <p className="text-sm text-neutral-500">
                  {t('legal.lastUpdated')}: <time dateTime="2026-03-13">13.03.2026</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

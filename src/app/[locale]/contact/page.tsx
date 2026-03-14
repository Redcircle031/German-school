import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Contact',
    description: 'Get in touch with WBS School',
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const contactInfo = [
    {
      icon: MapPin,
      title: locale === 'pl' ? 'Adres' : locale === 'de' ? 'Adresse' : 'Address',
      lines: [
        'ul. Św. Urszuli Ledóchowskiej 3',
        '02-972 Warszawa, Poland',
      ],
      color: 'bg-blue-500',
    },
    {
      icon: Phone,
      title: locale === 'pl' ? 'Telefon' : locale === 'de' ? 'Telefon' : 'Phone',
      lines: [
        '+48 22 642 27 05',
        locale === 'pl' ? 'Fax: +48 22 395 86 51' : locale === 'de' ? 'Fax: +48 22 395 86 51' : 'Fax: +48 22 395 86 51',
      ],
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: [
        locale === 'pl' ? 'Klasy 1-4: sekretariat2@wbs.pl' : locale === 'de' ? 'Klassen 1-4: sekretariat2@wbs.pl' : 'Grades 1-4: sekretariat2@wbs.pl',
        locale === 'pl' ? 'Klasy 5-12: sekretariat1@wbs.pl' : locale === 'de' ? 'Klassen 5-12: sekretariat1@wbs.pl' : 'Grades 5-12: sekretariat1@wbs.pl',
      ],
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      title: locale === 'pl' ? 'Godziny pracy' : locale === 'de' ? 'Öffnungszeiten' : 'Office Hours',
      lines: [
        locale === 'pl' ? 'Poniedziałek - Piątek' : locale === 'de' ? 'Montag - Freitag' : 'Monday - Friday',
        '8:00 - 16:00',
      ],
      color: 'bg-orange-500',
    },
  ];

  const formFields = {
    pl: [
      { name: 'name', label: 'Imię i nazwisko', type: 'text', required: true },
      { name: 'email', label: 'Adres email', type: 'email', required: true },
      { name: 'phone', label: 'Numer telefonu', type: 'tel', required: false },
      { name: 'subject', label: 'Temat', type: 'text', required: true },
      { name: 'message', label: 'Wiadomość', type: 'textarea', required: true },
    ],
    de: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'E-Mail-Adresse', type: 'email', required: true },
      { name: 'phone', label: 'Telefonnummer', type: 'tel', required: false },
      { name: 'subject', label: 'Betreff', type: 'text', required: true },
      { name: 'message', label: 'Nachricht', type: 'textarea', required: true },
    ],
    en: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  };

  const currentFields = formFields[locale as keyof typeof formFields] || formFields.en;

  return (
    <>
      <Header lang={locale} />
      <main className="pt-18 md:pt-20 min-h-screen bg-neutral-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm mb-6 text-white/80">
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">{t('contact.title')}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 -mt-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-3">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-neutral-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {t('contact.form.title')}
                  </h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentFields.slice(0, 3).map((field) => (
                        <div key={field.name}>
                          <label className="label" htmlFor={field.name}>
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          {field.type === 'textarea' ? (
                            <textarea
                              id={field.name}
                              name={field.name}
                              rows={4}
                              required={field.required}
                              className="input"
                              placeholder={field.label}
                            />
                          ) : (
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              required={field.required}
                              className="input"
                              placeholder={field.label}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="label" htmlFor="subject">
                        {currentFields[3].label}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="input"
                        placeholder={currentFields[3].label}
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="message">
                        {currentFields[4].label}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="input"
                        placeholder={currentFields[4].label}
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="text-sm text-neutral-600">
                        {locale === 'pl'
                          ? 'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z RODO'
                          : locale === 'de'
                          ? 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß DSGVO zu'
                          : 'I consent to the processing of my personal data according to GDPR'}
                      </label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary w-full md:w-auto">
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    {locale === 'pl' ? 'Szybki kontakt' : locale === 'de' ? 'Schnellkontakt' : 'Quick Contact'}
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:+48226422705" className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+48 22 642 27 05</span>
                    </a>
                    <a href="mailto:sekretariat@wbs.pl" className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>sekretariat@wbs.pl</span>
                    </a>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <MessageSquare className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {locale === 'pl' ? 'Masz pytania?' : locale === 'de' ? 'Haben Sie Fragen?' : 'Have Questions?'}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {locale === 'pl'
                      ? 'Sprawdź nasze najczęściej zadawane pytania'
                      : locale === 'de'
                      ? 'Sehen Sie sich unsere häufig gestellten Fragen an'
                      : 'Check out our frequently asked questions'}
                  </p>
                  <Link href={`/${locale}/faq`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {locale === 'pl' ? 'Zobacz FAQ →' : locale === 'de' ? 'FAQ ansehen →' : 'View FAQ →'}
                  </Link>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    {locale === 'pl' ? 'Śledź nas' : locale === 'de' ? 'Folgen Sie uns' : 'Follow Us'}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/wbswarschau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">
              {t('contact.map')}
            </h2>
            <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Google Maps Embed</p>
                <p className="text-sm">ul. Św. Urszuli Ledóchowskiej 3, Warszawa</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={locale} />
      <CookieConsent lang={locale} />
    </>
  );
}

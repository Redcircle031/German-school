import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: 'Impressum | WBS',
    de: 'Impressum | WBS',
    en: 'Legal Notice | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Informacje prawne o szkole WBS w Warszawie',
    de: 'Rechtliche Informationen über die WBS-Schule in Warschau',
    en: 'Legal information about WBS school in Warsaw',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function Impressum({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const schoolInfo = {
    name: {
      pl: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie',
      de: 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau',
      en: 'Polish-German School of Meetings and Dialogue named after Willy Brandt',
    },
    address: 'ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warszawa, Poland',
    regon: '011823389',
    nip: 'PL9512099288',
    krs: '0000150334',
    phone: '+48 22 642 27 05',
    fax: '+48 22 395 86 51',
    mobile: '+48 512 072 576',
    email: 'sekretariat1@wbs.pl',
    website: 'www.wbs.pl',
  };

  return (
      <div className="min-h-screen bg-neutral-50 pt-28 md:pt-30">
        <div className="container-custom py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 flex items-center space-x-2 text-sm">
              <Link href={`/${locale}`} className="text-neutral-500 hover:text-red-600">
                {t('navigation.home')}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="font-medium text-neutral-900">
                {locale === 'pl' ? 'Impressum' : locale === 'de' ? 'Impressum' : 'Imprint'}
              </span>
            </nav>

            <h1 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Impressum' : locale === 'de' ? 'Impressum' : 'Imprint'}
            </h1>

            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
              {/* School Information */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Dane szkoły' : locale === 'de' ? 'Schuldaten' : 'School Information'}
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <p className="mb-4 text-lg font-semibold">{schoolInfo.name[locale as keyof typeof schoolInfo.name]}</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-red-600" />
                      <span>{schoolInfo.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="size-5 shrink-0 text-red-600" />
                      <span>{schoolInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="size-5 shrink-0 text-red-600" />
                      <span>{locale === 'pl' ? 'Fax:' : locale === 'de' ? 'Fax:' : 'Fax:'} {schoolInfo.fax}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="size-5 shrink-0 text-red-600" />
                      <span>{locale === 'pl' ? 'Komórka:' : locale === 'de' ? 'Mobil:' : 'Mobile:'} {schoolInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="size-5 shrink-0 text-red-600" />
                      <a href={`mailto:${schoolInfo.email}`} className="text-red-600 hover:underline">
                        {schoolInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="size-5 shrink-0 text-red-600" />
                      <a href="https://wbs.pl" className="text-red-600 hover:underline">
                        {schoolInfo.website}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-neutral-200 pt-4">
                    <p><strong>KRS:</strong> {schoolInfo.krs}</p>
                    <p><strong>NIP:</strong> {schoolInfo.nip}</p>
                    <p><strong>REGON:</strong> {schoolInfo.regon}</p>
                  </div>
                </div>
              </section>

              {/* School Leadership */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Dyrekcja szkoły' : locale === 'de' ? 'Schulleitung' : 'School Leadership'}
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <p>
                    <strong>
                      {locale === 'pl' ? 'Dyrektor:' : locale === 'de' ? 'Schulleiter:' : 'Headmaster:'}
                    </strong>{' '}
                    Rüdiger Bott
                  </p>
                  <p className="mt-2">
                    Email: <a href="mailto:schulleitung@wbs.pl" className="text-red-600 hover:underline">schulleitung@wbs.pl</a>
                  </p>
                </div>
              </section>

              {/* Data Protection Officer */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Inspektor Ochrony Danych' : locale === 'de' ? 'Datenschutzbeauftragter' : 'Data Protection Officer'}
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <p>
                    {locale === 'pl'
                      ? 'Wyznaczyliśmy Inspektora Ochrony Danych:'
                      : locale === 'de'
                      ? 'Wir haben einen Datenschutzbeauftragten bestellt:'
                      : 'We have appointed a Data Protection Officer:'}
                  </p>
                  <p className="mt-2">
                    Email: <a href="mailto:iod@wbs.pl" className="text-red-600 hover:underline">iod@wbs.pl</a>
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {locale === 'pl'
                      ? 'Z IOD można się kontaktować we wszystkich sprawach związanych z przetwarzaniem danych osobowych.'
                      : locale === 'de'
                      ? 'An den DPO können Sie sich in allen Angelegenheiten der Datenverarbeitung wenden.'
                      : 'You can contact the DPO for all matters related to data processing.'}
                  </p>
                </div>
              </section>

              {/* Governing Body */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Organ prowadzący' : locale === 'de' ? 'Trägerverein' : 'Governing Body'}
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <p className="font-semibold">
                    {locale === 'pl'
                      ? 'Niemiecko-Polskie Towarzystwo Szkolne w Warszawie'
                      : locale === 'de'
                      ? 'Deutsch-Polnische Schulgesellschaft in Warschau'
                      : 'German-Polish School Society in Warsaw'}
                  </p>
                  <p className="mt-2">
                    {locale === 'pl' ? 'Reprezentowany przez:' : locale === 'de' ? 'Vertreten durch:' : 'Represented by:'} Zarząd NTS
                  </p>
                </div>
              </section>

              {/* Supervisory Authority */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Organy nadzoru' : locale === 'de' ? 'Aufsichtsbehörden' : 'Supervisory Authorities'}
                </h2>
                <div className="space-y-4 rounded-lg bg-neutral-50 p-6">
                  <div>
                    <p className="font-semibold">
                      {locale === 'pl' ? 'Kuratorium Oświaty w Warszawie' : locale === 'de' ? 'Bildungsamt Warschau' : 'Education Authority Warsaw'}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      ul. J. Krasińskiego 16, 00-209 Warszawa
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {locale === 'pl' ? 'Ambasada Republiki Federalnej Niemiec' : locale === 'de' ? 'Botschaft der Bundesrepublik Deutschland' : 'Embassy of the Federal Republic of Germany'}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {locale === 'pl' ? 'Wydział Kultury' : locale === 'de' ? 'Kulturabteilung' : 'Cultural Department'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Implementation */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Realizacja techniczna' : locale === 'de' ? 'Technische Umsetzung' : 'Technical Implementation'}
                </h2>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <p className="mb-2">
                    <strong>CMS:</strong> Custom Next.js Solution
                  </p>
                  <p className="mb-2">
                    <strong>{locale === 'pl' ? 'Hosting:' : locale === 'de' ? 'Hosting:' : 'Hosting:'}</strong> Vercel
                  </p>
                  <p>
                    <strong>{locale === 'pl' ? 'Projekt i rozwój:' : locale === 'de' ? 'Design und Entwicklung:' : 'Design & Development:'}</strong> WBS IT Team
                  </p>
                </div>
              </section>

              {/* Liability Disclaimer */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === 'pl' ? 'Zastrzeżenia' : locale === 'de' ? 'Haftungsausschluss' : 'Liability Disclaimer'}
                </h2>
                <div className="space-y-4 text-sm text-neutral-600">
                  <p>
                    {locale === 'pl'
                      ? 'Mimo starannego sprawdzenia treści nie ponosimy odpowiedzialności za treści linków zewnętrznych. Za treści na stronach zewnętrznych odpowiedzialni są wyłącznie ich operatorzy.'
                      : locale === 'de'
                      ? 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
                      : 'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'}
                  </p>
                  <p>
                    {locale === 'pl'
                      ? 'Wszelkie prawa zastrzeżone. Żadna część tej strony nie może być reprodukowana bez pisemnej zgody.'
                      : locale === 'de'
                      ? 'Alle Rechte vorbehalten. Kein Teil dieser Website darf ohne schriftliche Genehmigung reproduziert werden.'
                      : 'All rights reserved. No part of this website may be reproduced without written permission.'}
                  </p>
                </div>
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

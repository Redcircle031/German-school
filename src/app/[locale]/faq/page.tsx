import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import Accordion from '@/components/features/Accordion';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: 'FAQ | WBS',
    de: 'FAQ | WBS',
    en: 'FAQ | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Odpowiedzi na najczęściej zadawane pytania o szkole WBS',
    de: 'Antworten auf häufig gestellte Fragen über die WBS-Schule',
    en: 'Answers to frequently asked questions about WBS school',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const faqs = {
    pl: [
      { q: 'Czy szkoła jest prywatna czy publiczna?', a: 'WBS jest szkołą publiczną, prowadzoną przez samorząd miasta stołecznego Warszawy.' },
      { q: 'Czy obowiązuje czesne?', a: 'Nie, szkoła jest bezpłatna. Pobierane są jedynie opłaty za wyżywienie w stołówce i opiekę świetlicową.' },
      { q: 'Jaki jest poziom znajomości języka niemieckiego wymagany przy rekrutacji?', a: 'Wymagana jest znajomość języka polskiego lub niemieckiego na poziomie komunikatywnym. Dzieci uczą się obu języków w trakcie nauki.' },
      { q: 'Czy szkoła zapewnia dojazd?', a: 'Szkoła nie zapewnia transportu, ale uczniowie mogą korzystać z karty ZTM z ulgą szkolną.' },
      { q: 'Czy są zajęcia pozalekcyjne?', a: 'Tak, oferujemy różnorodne zajęcia pozalekcyjne, w tym Akademię Piłkarską, Akademię Muzyczną i chór.' },
      { q: 'Jak wygląda proces rekrutacji?', a: 'Rekrutacja odbywa się online przez stronę szkoły. Terminy i szczegóły są dostępne w zakładce "Rekrutacja".' },
      { q: 'Czy szkoła ma stołówkę?', a: 'Tak, szkoła posiada stołówkę z ciepłymi posiłkami. Istnieje możliwość zamówienia lunchu codziennie.' },
      { q: 'Jakie są godziny zajęć?', a: 'Zajęcia rozpoczynają się o 8:00 i kończą około 15:00-16:00, w zależności od klasy.' },
      { q: 'Czy szkoła organizuje wycieczki szkolne?', a: 'Tak, organizujemy wycieczki krajowe i międzynarodowe, w tym wymiany z szkołami partnerskimi w Niemczech.' },
      { q: 'Jak skontaktować się z nauczycielami?', a: 'Kontakt z nauczycielami możliwy jest przez dziennik elektroniczny lub email. Dane kontaktowe znajdują się w zakładce "Kadra".' },
    ],
    de: [
      { q: 'Ist die Schule privat oder öffentlich?', a: 'Die WBS ist eine öffentliche Schule, die von der Stadt Warschau geführt wird.' },
      { q: 'Gibt es Schulgebühren?', a: 'Nein, die Schule ist kostenlos. Es werden nur Gebühren für die Kantine und die Nachmittagsbetreuung erhoben.' },
      { q: 'Welches Deutsch-Niveau ist für die Aufnahme erforderlich?', a: 'Kommunikative Kenntnisse der polnischen oder deutschen Sprache sind erforderlich. Kinder lernen beide Sprachen während des Studiums.' },
      { q: 'Bietet die Schule Transport an?', a: 'Die Schule bietet keinen Transport an, aber Schüler können die ZTM-Karte mit Schülerrabatt nutzen.' },
      { q: 'Gibt es extracurriculäre Aktivitäten?', a: 'Ja, wir bieten verschiedene extracurriculäre Aktivitäten an, einschließlich Fußballakademie, Musikakademie und Chor.' },
      { q: 'Wie läuft der Aufnahmeprozess ab?', a: 'Die Aufnahme erfolgt online über die Schulwebsite. Termine und Details finden Sie im Bereich "Aufnahme".' },
      { q: 'Hat die Schule eine Kantine?', a: 'Ja, die Schule hat eine Kantine mit warmen Mahlzeiten. Es ist möglich, täglich ein Mittagessen zu bestellen.' },
      { q: 'Wie sind die Unterrichtszeiten?', a: 'Der Unterricht beginnt um 8:00 Uhr und endet je nach Klasse zwischen 15:00 und 16:00 Uhr.' },
      { q: 'Organisiert die Schule Schulausflüge?', a: 'Ja, wir organisieren nationale und internationale Ausflüge, einschließlich Austausch mit Partnerschulen in Deutschland.' },
      { q: 'Wie kontaktiere ich Lehrer?', a: 'Der Kontakt mit Lehrern ist über das elektronische Klassenbuch oder E-Mail möglich. Kontaktdaten finden Sie im Bereich "Team".' },
    ],
    en: [
      { q: 'Is the school private or public?', a: 'WBS is a public school run by the City of Warsaw.' },
      { q: 'Are there tuition fees?', a: 'No, the school is free. Only fees for the canteen and after-school care are charged.' },
      { q: 'What level of German is required for admission?', a: 'Communicative knowledge of Polish or German is required. Children learn both languages during their studies.' },
      { q: 'Does the school provide transportation?', a: 'The school does not provide transportation, but students can use the ZTM card with a school discount.' },
      { q: 'Are there extracurricular activities?', a: 'Yes, we offer various extracurricular activities, including Football Academy, Music Academy, and choir.' },
      { q: 'How does the admission process work?', a: 'Admission is done online through the school website. Dates and details are available in the "Admissions" section.' },
      { q: 'Does the school have a canteen?', a: 'Yes, the school has a canteen with warm meals. It is possible to order lunch daily.' },
      { q: 'What are the school hours?', a: 'Classes start at 8:00 AM and end between 3:00-4:00 PM, depending on the grade.' },
      { q: 'Does the school organize trips?', a: 'Yes, we organize national and international trips, including exchanges with partner schools in Germany.' },
      { q: 'How do I contact teachers?', a: 'Contact with teachers is possible through the electronic register or email. Contact details are in the "Staff" section.' },
    ],
  };

  const items = faqs[locale as keyof typeof faqs] || faqs.en;

  return (
    <>
      <PageHeader
        lang={locale}
        title={locale === 'pl' ? 'Najczęściej Zadawane Pytania' : locale === 'de' ? 'Häufig Gestellte Fragen' : 'Frequently Asked Questions'}
        description={locale === 'pl' ? 'Znajdź odpowiedzi na najpopularniejsze pytania' : locale === 'de' ? 'Finden Sie Antworten auf die beliebtesten Fragen' : 'Find answers to the most popular questions'}
      />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <Accordion items={items.map(f => ({ title: f.q, content: f.a }))} />
        </div>
      </section>
    </>
  );
}

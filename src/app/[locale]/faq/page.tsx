import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import Accordion from '@/components/features/Accordion';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'FAQ | WBS', de: 'FAQ | WBS', en: 'FAQ | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
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
    ],
    de: [
      { q: 'Ist die Schule privat oder öffentlich?', a: 'Die WBS ist eine öffentliche Schule, die von der Stadt Warschau geführt wird.' },
      { q: 'Gibt es Schulgebühren?', a: 'Nein, die Schule ist kostenlos. Es werden nur Gebühren für die Kantine und die Nachmittagsbetreuung erhoben.' },
      { q: 'Welches Deutsch-Niveau ist für die Aufnahme erforderlich?', a: 'Kommunikative Kenntnisse der polnischen oder deutschen Sprache sind erforderlich. Kinder lernen beide Sprachen während des Studiums.' },
      { q: 'Bietet die Schule Transport an?', a: 'Die Schule bietet keinen Transport an, aber Schüler können die ZTM-Karte mit Schülerrabatt nutzen.' },
      { q: 'Gibt es extracurriculäre Aktivitäten?', a: 'Ja, wir bieten verschiedene extracurriculäre Aktivitäten an, einschließlich Fußballakademie, Musikakademie und Chor.' },
    ],
    en: [
      { q: 'Is the school private or public?', a: 'WBS is a public school run by the City of Warsaw.' },
      { q: 'Are there tuition fees?', a: 'No, the school is free. Only fees for the canteen and after-school care are charged.' },
      { q: 'What level of German is required for admission?', a: 'Communicative knowledge of Polish or German is required. Children learn both languages during their studies.' },
      { q: 'Does the school provide transportation?', a: 'The school does not provide transportation, but students can use the ZTM card with a school discount.' },
      { q: 'Are there extracurricular activities?', a: 'Yes, we offer various extracurricular activities, including Football Academy, Music Academy, and choir.' },
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

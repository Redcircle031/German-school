import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Trophy, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Akademia Piłkarska | WBS', de: 'Fußballakademie | WBS', en: 'Football Academy | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Akademia Piłkarska WBS',
    subtitle: 'Profesjonalny trening dla młodych piłkarzy',
    intro: 'Akademia Piłkarska WBS oferuje profesjonalne treningi dla uczniów wszystkich klas. Pod okiem wykwalifikowanych trenerów nasi uczniowie rozwijają swoje umiejętności sportowe i uczestniczą w turniejach.',
    features: ['Treningi 3x w tygodniu', 'Udział w ligach i turniejach', 'Opieka wykwalifikowanych trenerów', 'Nowoczesne boiska sportowe'],
    contact: 'Kontakt', phone: '+48 733 572 514', email: 'akademia.pilkarska@wbs.pl', director: 'Dyrektor: Wojciech Wieczorkiewicz',
  },
  de: {
    title: 'WBS Fußballakademie',
    subtitle: 'Professionelles Training für junge Fußballer',
    intro: 'Die WBS Fußballakademie bietet professionelles Training für Schüler aller Klassen. Unter der Aufsicht qualifizierter Trainer entwickeln unsere Schüler ihre sportlichen Fähigkeiten und nehmen an Turnieren teil.',
    features: ['Training 3x pro Woche', 'Teilnahme an Ligen und Turnieren', 'Betreuung durch qualifizierte Trainer', 'Moderne Sportplätze'],
    contact: 'Kontakt', phone: '+48 733 572 514', email: 'akademia.pilkarska@wbs.pl', director: 'Direktor: Wojciech Wieczorkiewicz',
  },
  en: {
    title: 'WBS Football Academy',
    subtitle: 'Professional training for young footballers',
    intro: 'The WBS Football Academy offers professional training for students of all grades. Under the supervision of qualified coaches, our students develop their sports skills and participate in tournaments.',
    features: ['Training 3x per week', 'Participation in leagues and tournaments', 'Supervision by qualified coaches', 'Modern sports facilities'],
    contact: 'Contact', phone: '+48 733 572 514', email: 'akademia.pilkarska@wbs.pl', director: 'Director: Wojciech Wieczorkiewicz',
  },
};

export default async function FootballAcademyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xl text-neutral-600 leading-relaxed">{t.intro}</p>
            </div>
            <div className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">⚽</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {locale === 'pl' ? 'Co oferujemy' : locale === 'de' ? 'Was wir bieten' : 'What we offer'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.features.map((feature, i) => (
              <div key={i} className="bg-neutral-50 rounded-xl p-6 text-center">
                <Trophy className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <p className="font-medium text-neutral-900">{feature}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t.contact}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary-200" /><span>{t.phone}</span></div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary-200" /><span>{t.email}</span></div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-200" /><span>{t.director}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Heart, Shield, MessageCircle, Lock } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    pl: 'Nauczyciel Zaufania | WBS',
    de: 'Vertrauenslehrer | WBS',
    en: 'Trusted Teacher | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Nauczyciel zaufania w Szkole Willy Brandta — bezpieczna i poufna pomoc dla uczniów w trudnych sytuacjach.',
    de: 'Vertrauenslehrer an der Willy-Brandt-Schule — sichere und vertrauliche Unterstützung für Schüler in schwierigen Situationen.',
    en: 'Trusted teacher at Willy Brandt School — safe and confidential support for students in difficult situations.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Nauczyciel Zaufania',
    subtitle: 'Jesteśmy tu dla Ciebie — zawsze możesz porozmawiać',
    intro: 'Każdy uczeń zasługuje na wsparcie i poczucie bezpieczeństwa. Nauczyciel zaufania to osoba, do której możesz zwrócić się z każdym problemem — bez oceniania, z pełnym zrozumieniem i w całkowitej poufności.',
    whoTitle: 'Kim jest nauczyciel zaufania?',
    whoText: 'Nauczyciel zaufania to specjalnie przeszkolony pedagog, który jest dostępny dla wszystkich uczniów szkoły. Jego zadaniem jest słuchanie, wspieranie i pomaganie w znalezieniu rozwiązań. Nie musisz radzić sobie ze wszystkim samodzielnie.',
    whenTitle: 'Kiedy warto porozmawiać?',
    whenItems: [
      'Gdy czujesz się smutny, samotny lub przytłoczony',
      'Gdy masz problemy z rówieśnikami lub doświadczasz przemocy',
      'Gdy dzieje się coś trudnego w domu lub w szkole',
      'Gdy martwisz się o siebie lub o kogoś innego',
      'Gdy po prostu potrzebujesz kogoś, kto wysłucha',
    ],
    confidentialTitle: 'Wszystko zostaje między nami',
    confidentialText: 'Rozmowa z nauczycielem zaufania jest całkowicie poufna. Nic, co powiesz, nie zostanie przekazane innym osobom bez Twojej zgody — chyba że istnieje zagrożenie dla Twojego bezpieczeństwa lub bezpieczeństwa innej osoby. W takim przypadku wspólnie znajdziemy najlepsze rozwiązanie.',
    contactTitle: 'Jak się skontaktować?',
    contactMethods: [
      'Podejdź osobiście — gabinet nauczyciela zaufania, pokój 108',
      'Napisz wiadomość e-mail na adres: zaufanie@wbs.pl',
      'Zostaw anonimową wiadomość w skrzynce zaufania przy sekretariacie',
      'Poproś dowolnego nauczyciela o umówienie spotkania',
    ],
    reassurance: 'Pamiętaj: proszenie o pomoc to odwaga, nie słabość. Jesteśmy tu, żeby Ci pomóc.',
  },
  de: {
    title: 'Vertrauenslehrer',
    subtitle: 'Wir sind für dich da — du kannst immer mit uns sprechen',
    intro: 'Jeder Schüler verdient Unterstützung und ein Gefühl der Sicherheit. Der Vertrauenslehrer ist eine Person, an die du dich mit jedem Problem wenden kannst — ohne Bewertung, mit vollem Verständnis und in völliger Vertraulichkeit.',
    whoTitle: 'Wer ist der Vertrauenslehrer?',
    whoText: 'Der Vertrauenslehrer ist ein speziell ausgebildeter Pädagoge, der für alle Schüler der Schule da ist. Seine Aufgabe ist es, zuzuhören, zu unterstützen und bei der Lösungsfindung zu helfen. Du musst nicht alles alleine bewältigen.',
    whenTitle: 'Wann solltest du ein Gespräch suchen?',
    whenItems: [
      'Wenn du dich traurig, einsam oder überfordert fühlst',
      'Wenn du Probleme mit Mitschülern hast oder Gewalt erlebst',
      'Wenn zu Hause oder in der Schule etwas Schwieriges passiert',
      'Wenn du dir Sorgen um dich selbst oder jemand anderen machst',
      'Wenn du einfach jemanden brauchst, der dir zuhört',
    ],
    confidentialTitle: 'Alles bleibt unter uns',
    confidentialText: 'Das Gespräch mit dem Vertrauenslehrer ist vollkommen vertraulich. Nichts, was du sagst, wird ohne deine Zustimmung an andere weitergegeben — es sei denn, es besteht eine Gefahr für deine Sicherheit oder die Sicherheit einer anderen Person. In diesem Fall finden wir gemeinsam die beste Lösung.',
    contactTitle: 'Wie kannst du Kontakt aufnehmen?',
    contactMethods: [
      'Komm persönlich vorbei — Büro des Vertrauenslehrers, Raum 108',
      'Schreibe eine E-Mail an: zaufanie@wbs.pl',
      'Hinterlasse eine anonyme Nachricht im Vertrauensbriefkasten beim Sekretariat',
      'Bitte einen beliebigen Lehrer, ein Treffen zu vereinbaren',
    ],
    reassurance: 'Denk daran: Um Hilfe zu bitten ist Mut, keine Schwäche. Wir sind hier, um dir zu helfen.',
  },
  en: {
    title: 'Trusted Teacher',
    subtitle: 'We are here for you — you can always talk to us',
    intro: 'Every student deserves support and a sense of safety. The trusted teacher is a person you can turn to with any problem — without judgment, with full understanding and in complete confidence.',
    whoTitle: 'Who is the trusted teacher?',
    whoText: 'The trusted teacher is a specially trained educator who is available to all students at the school. Their role is to listen, support and help find solutions. You do not have to deal with everything on your own.',
    whenTitle: 'When should you reach out?',
    whenItems: [
      'When you feel sad, lonely or overwhelmed',
      'When you have problems with peers or experience bullying',
      'When something difficult is happening at home or at school',
      'When you are worried about yourself or someone else',
      'When you simply need someone to listen',
    ],
    confidentialTitle: 'Everything stays between us',
    confidentialText: 'A conversation with the trusted teacher is completely confidential. Nothing you say will be shared with others without your consent — unless there is a risk to your safety or the safety of another person. In that case, we will find the best solution together.',
    contactTitle: 'How to get in touch?',
    contactMethods: [
      'Come in person — trusted teacher office, room 108',
      'Send an email to: zaufanie@wbs.pl',
      'Leave an anonymous message in the trust box near the front office',
      'Ask any teacher to arrange a meeting',
    ],
    reassurance: 'Remember: asking for help is courage, not weakness. We are here to help you.',
  },
};

export default async function TrustedTeacherPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const pillars = [
    {
      icon: Heart,
      title: t.whoTitle,
      text: t.whoText,
    },
    {
      icon: Shield,
      title: t.whenTitle,
      text: null,
      items: t.whenItems,
    },
    {
      icon: Lock,
      title: t.confidentialTitle,
      text: t.confidentialText,
    },
    {
      icon: MessageCircle,
      title: t.contactTitle,
      text: null,
      items: t.contactMethods,
    },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {/* Warm intro */}
          <div className="mb-16 rounded-2xl border border-accent-200 bg-accent-50 p-8 md:p-10">
            <p className="text-lg leading-relaxed text-neutral-700">{t.intro}</p>
          </div>

          {/* Content sections */}
          <div className="space-y-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-100">
                    <Icon className="size-6 text-accent-700" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-neutral-900">{pillar.title}</h2>
                    {pillar.text && (
                      <p className="leading-relaxed text-neutral-600">{pillar.text}</p>
                    )}
                    {pillar.items && (
                      <ul className="space-y-3">
                        {pillar.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-accent-500" />
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance banner */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-accent-100 to-accent-50 p-8 text-center md:p-10">
            <Heart className="mx-auto mb-4 size-10 text-accent-600" />
            <p className="text-xl font-semibold text-accent-900">{t.reassurance}</p>
          </div>
        </div>
      </section>
    </>
  );
}

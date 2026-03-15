import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { CheckCircle, Calendar, FileText, Users, Phone, Clock, GraduationCap } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Rekrutacja | WBS', de: 'Rekrutierung | WBS', en: 'Admissions | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Rekrutacja', subtitle: 'Zapraszamy do naszej szkoły',
    intro: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta prowadzi rekrutację przez cały rok szkolny.',
    processTitle: 'Proces rekrutacji',
    steps: [
      { icon: Phone, title: '1. Kontakt', desc: 'Skontaktuj się z sekretariatem szkoły telefonicznie lub mailowo.' },
      { icon: FileText, title: '2. Dokumenty', desc: 'Przygotuj wymagane dokumenty: akt urodzenia, świadectwo, zaświadczenie lekarskie.' },
      { icon: Calendar, title: '3. Spotkanie', desc: 'Umów się na spotkanie z dyrekcją i wizytę w szkole.' },
      { icon: Users, title: '4. Rozmowa', desc: 'Dziecko weźmie udział w rozmowie kwalifikacyjnej.' },
      { icon: CheckCircle, title: '5. Decyzja', desc: 'Otrzymasz decyzję o przyjęciu w ciągu 7 dni roboczych.' },
    ],
    requirements: ['Znajomość języka polskiego lub niemieckiego', 'Wiek zgodny z programem klasy', 'Zaświadczenie lekarskie'],
    contactTitle: 'Kontakt', phone: '+48 22 642 27 05', email: 'sekretariat@wbs.pl', hours: 'Pn-Pt: 8:00 - 16:00',
  },
  de: {
    title: 'Rekrutierung', subtitle: 'Wir laden Sie in unsere Schule ein',
    intro: 'Die Deutsch-Polnische Begegnungsschule führt das ganze Schuljahr über eine Rekrutierung durch.',
    processTitle: 'Rekrutierungsprozess',
    steps: [
      { icon: Phone, title: '1. Kontakt', desc: 'Kontaktieren Sie das Schulsekretariat telefonisch oder per E-Mail.' },
      { icon: FileText, title: '2. Unterlagen', desc: 'Bereiten Sie die erforderlichen Unterlagen vor.' },
      { icon: Calendar, title: '3. Gespräch', desc: 'Vereinbaren Sie ein Gespräch mit der Schulleitung.' },
      { icon: Users, title: '4. Aufnahmegespräch', desc: 'Das Kind nimmt an einem Aufnahmegespräch teil.' },
      { icon: CheckCircle, title: '5. Entscheidung', desc: 'Sie erhalten innerhalb von 7 Werktagen eine Entscheidung.' },
    ],
    requirements: ['Kenntnisse der polnischen oder deutschen Sprache', 'Altersentsprechung', 'Ärztliches Attest'],
    contactTitle: 'Kontakt', phone: '+48 22 642 27 05', email: 'sekretariat@wbs.pl', hours: 'Mo-Fr: 8:00 - 16:00',
  },
  en: {
    title: 'Admissions', subtitle: 'We invite you to our school',
    intro: 'The Polish-German School conducts admissions throughout the school year.',
    processTitle: 'Admission Process',
    steps: [
      { icon: Phone, title: '1. Contact', desc: 'Contact the school office by phone or email.' },
      { icon: FileText, title: '2. Documents', desc: 'Prepare required documents.' },
      { icon: Calendar, title: '3. Meeting', desc: 'Schedule a meeting with the principal.' },
      { icon: Users, title: '4. Interview', desc: 'The child will participate in a qualifying interview.' },
      { icon: CheckCircle, title: '5. Decision', desc: 'You will receive a decision within 7 business days.' },
    ],
    requirements: ['Knowledge of Polish or German language', 'Age appropriate for grade', 'Medical certificate'],
    contactTitle: 'Contact', phone: '+48 22 642 27 05', email: 'sekretariat@wbs.pl', hours: 'Mon-Fri: 8:00 - 16:00',
  },
};

export default async function RecruitmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white"><div className="container-custom max-w-4xl"><p className="text-center text-xl text-neutral-600">{t.intro}</p></div></section>
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">{t.processTitle}</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {t.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-red-600"><step.icon className="size-7 text-white" /></div>
                <div><h3 className="mb-2 text-xl font-semibold text-neutral-900">{step.title}</h3><p className="text-neutral-600">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-red-600 text-white">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">{locale === 'pl' ? 'Wymagania' : locale === 'de' ? 'Anforderungen' : 'Requirements'}</h2>
              <ul className="space-y-4">
                {t.requirements.map((r, i) => <li key={i} className="flex items-start gap-3"><CheckCircle className="size-6 shrink-0 text-red-200" /><span className="text-lg">{r}</span></li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-8">
              <h3 className="mb-6 text-xl font-semibold">{t.contactTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Phone className="size-5 text-red-200" /><span>{t.phone}</span></div>
                <div className="flex items-center gap-3"><svg className="size-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>{t.email}</span></div>
                <div className="flex items-center gap-3"><Clock className="size-5 text-red-200" /><span>{t.hours}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

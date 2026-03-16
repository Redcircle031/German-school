'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, GraduationCap, UserPlus, ArrowRight, Heart, BookOpen, Star } from 'lucide-react';

interface AudienceCardsProps {
  lang: string;
}

export default function AudienceCards({ lang }: AudienceCardsProps) {
  const cards = [
    {
      icon: Users,
      accent: Heart,
      bg: 'bg-red-50',
      border: 'border-red-100',
      iconBg: 'bg-red-600',
      accentColor: 'text-red-600',
      hoverBorder: 'hover:border-red-300',
      title: { pl: 'Dla Rodziców', de: 'Für Eltern', en: 'For Parents' },
      description: {
        pl: 'Formularze, regulaminy, stołówka, plan lekcji i portal rodzica — wszystko w jednym miejscu.',
        de: 'Formulare, Ordnungen, Kantine, Stundenplan und Elternportal — alles an einem Ort.',
        en: 'Forms, regulations, canteen, timetable and parent portal — everything in one place.',
      },
      cta: { pl: 'Strefa rodzica', de: 'Elternbereich', en: 'Parent zone' },
      href: `/${lang}/parents`,
    },
    {
      icon: GraduationCap,
      accent: BookOpen,
      bg: 'bg-accent-50',
      border: 'border-accent-100',
      iconBg: 'bg-accent-500',
      accentColor: 'text-accent-600',
      hoverBorder: 'hover:border-accent-300',
      title: { pl: 'Dla Uczniów', de: 'Für Schüler', en: 'For Students' },
      description: {
        pl: 'Projekty, akademie sportowe, biblioteka i portal ucznia — odkryj, co WBS ma dla Ciebie.',
        de: 'Projekte, Sportakademien, Bibliothek und Schülerportal — entdecke, was die WBS für dich bereithält.',
        en: 'Projects, sports academies, library and student portal — discover what WBS has for you.',
      },
      cta: { pl: 'Strefa ucznia', de: 'Schülerbereich', en: 'Student zone' },
      href: `/${lang}/students`,
    },
    {
      icon: UserPlus,
      accent: Star,
      bg: 'bg-green-50',
      border: 'border-green-100',
      iconBg: 'bg-green-600',
      accentColor: 'text-green-600',
      hoverBorder: 'hover:border-green-300',
      title: { pl: 'Rekrutacja 2026/27', de: 'Aufnahme 2026/27', en: 'Admissions 2026/27' },
      description: {
        pl: 'Dołącz do naszej szkolnej rodziny. Dowiedz się, jak wygląda rekrutacja i jakie są terminy.',
        de: 'Werde Teil unserer Schulgemeinschaft. Erfahre, wie die Aufnahme abläuft und welche Fristen gelten.',
        en: 'Join our school family. Learn how the admissions process works and what the deadlines are.',
      },
      cta: { pl: 'Dowiedz się więcej', de: 'Mehr erfahren', en: 'Learn more' },
      href: `/${lang}/parents/recruitment`,
    },
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent-500">
            {lang === 'pl' ? 'Jesteśmy tu dla Ciebie' : lang === 'de' ? 'Wir sind für Sie da' : 'We are here for you'}
          </span>
          <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
            {lang === 'pl' ? 'Czym możemy Ci służyć?' : lang === 'de' ? 'Wie können wir Ihnen helfen?' : 'How can we help you?'}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <Link
                href={card.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${card.border} ${card.bg} p-8 transition-all duration-300 ${card.hoverBorder} hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`mb-5 flex size-14 items-center justify-center rounded-2xl ${card.iconBg} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  <card.icon className="size-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-neutral-900">
                  {card.title[lang as keyof typeof card.title] || card.title.en}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                  {card.description[lang as keyof typeof card.description] || card.description.en}
                </p>

                <span className={`inline-flex items-center gap-2 text-sm font-semibold ${card.accentColor} transition-all group-hover:gap-3`}>
                  {card.cta[lang as keyof typeof card.cta] || card.cta.en}
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

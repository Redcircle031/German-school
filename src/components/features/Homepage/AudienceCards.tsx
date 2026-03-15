'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, GraduationCap, UserPlus, ArrowRight } from 'lucide-react';

interface AudienceCardsProps {
  lang: string;
}

export default function AudienceCards({ lang }: AudienceCardsProps) {
  const cards = [
    {
      icon: Users,
      title: { pl: 'Dla Rodzicow', de: 'Fur Eltern', en: 'For Parents' },
      description: {
        pl: 'Formularze, regulaminy, stolowka i portal rodzica',
        de: 'Formulare, Ordnungen, Kantine und Elternportal',
        en: 'Forms, regulations, canteen and parent portal',
      },
      href: `/${lang}/parents`,
      color: 'bg-red-600',
    },
    {
      icon: GraduationCap,
      title: { pl: 'Dla Uczniow', de: 'Fur Schuler', en: 'For Students' },
      description: {
        pl: 'Projekty, akademie, biblioteka i portal ucznia',
        de: 'Projekte, Akademien, Bibliothek und Schulerportal',
        en: 'Projects, academies, library and student portal',
      },
      href: `/${lang}/students`,
      color: 'bg-neutral-900',
    },
    {
      icon: UserPlus,
      title: { pl: 'Rekrutacja', de: 'Aufnahme', en: 'Admissions' },
      description: {
        pl: 'Dowiedz sie wiecej o procesie rekrutacji 2026/2027',
        de: 'Erfahren Sie mehr uber den Aufnahmeprozess 2026/2027',
        en: 'Learn more about the 2026/2027 admissions process',
      },
      href: `/${lang}/parents/recruitment`,
      color: 'bg-red-600',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
            {lang === 'pl' ? 'Szybki dostep' : lang === 'de' ? 'Schnellzugriff' : 'Quick access'}
          </p>
          <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
            {lang === 'pl' ? 'Jak mozemy Ci pomoc?' : lang === 'de' ? 'Wie konnen wir Ihnen helfen?' : 'How can we help you?'}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={card.href}
                className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-500 hover:border-red-300 hover:shadow-2xl hover:shadow-red-900/5"
              >
                {/* Top accent line */}
                <div className={`absolute inset-x-0 top-0 h-1 ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className={`size-14 ${card.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}>
                  <card.icon className="size-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                  {card.title[lang as keyof typeof card.title] || card.title.en}
                </h3>

                <p className="mb-6 leading-relaxed text-neutral-600">
                  {card.description[lang as keyof typeof card.description] || card.description.en}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all group-hover:gap-3">
                  {lang === 'pl' ? 'Dowiedz sie wiecej' : lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
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

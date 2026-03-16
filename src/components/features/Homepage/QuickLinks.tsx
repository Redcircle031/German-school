'use client';

import { useTranslations } from 'next-intl';
import { Calendar, User, Users, Utensils, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface QuickLinksProps {
  lang: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1];

export default function QuickLinks({ lang }: QuickLinksProps) {
  const t = useTranslations();

  const links = [
    {
      icon: Calendar,
      label: t('homepage.quickLinks.calendar'),
      href: `/${lang}/events`,
      description: lang === 'pl' ? 'Terminy i wydarzenia' : lang === 'de' ? 'Termine & Events' : 'Dates & events',
      color: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white',
    },
    {
      icon: User,
      label: t('homepage.quickLinks.parentPortal'),
      href: `/${lang}/parent-portal`,
      description: lang === 'pl' ? 'Dla rodziców' : lang === 'de' ? 'Für Eltern' : 'For parents',
      color: 'bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white',
    },
    {
      icon: Users,
      label: t('homepage.quickLinks.studentPortal'),
      href: `/${lang}/student-portal`,
      description: lang === 'pl' ? 'Dla uczniów' : lang === 'de' ? 'Für Schüler' : 'For students',
      color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      icon: Utensils,
      label: t('homepage.quickLinks.canteen'),
      href: `/${lang}/parents/canteen`,
      description: lang === 'pl' ? 'Menu i obiady' : lang === 'de' ? 'Menü & Mittagessen' : 'Menu & lunch',
      color: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    },
  ];

  return (
    <section className="border-b border-neutral-100 bg-white py-6">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: easeOutExpo }}
            >
              <Link
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4 transition-all duration-300 hover:border-neutral-200 hover:bg-white hover:shadow-md"
              >
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${link.color}`}>
                  <link.icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-neutral-800 md:text-base">
                    {link.label}
                  </p>
                  <p className="hidden text-xs text-neutral-400 md:block">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-neutral-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

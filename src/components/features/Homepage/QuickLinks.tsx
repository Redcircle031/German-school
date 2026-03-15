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
    },
    {
      icon: User,
      label: t('homepage.quickLinks.parentPortal'),
      href: `/${lang}/parent-portal`,
      description: lang === 'pl' ? 'Dla rodziców' : lang === 'de' ? 'Für Eltern' : 'For parents',
    },
    {
      icon: Users,
      label: t('homepage.quickLinks.studentPortal'),
      href: `/${lang}/student-portal`,
      description: lang === 'pl' ? 'Dla uczniów' : lang === 'de' ? 'Für Schüler' : 'For students',
    },
    {
      icon: Utensils,
      label: t('homepage.quickLinks.canteen'),
      href: `/${lang}/parents/canteen`,
      description: lang === 'pl' ? 'Menu i obiady' : lang === 'de' ? 'Menü & Mittagessen' : 'Menu & lunch',
    },
  ];

  return (
    <section className="border-y border-neutral-100 bg-neutral-50 py-8">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: easeOutExpo }}
            >
              <Link
                href={link.href}
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-900/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-50 transition-colors duration-300 group-hover:bg-red-600">
                  <link.icon className="size-5 text-accent-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-neutral-900 md:text-base">
                    {link.label}
                  </p>
                  <p className="hidden text-xs text-neutral-500 md:block">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-600" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

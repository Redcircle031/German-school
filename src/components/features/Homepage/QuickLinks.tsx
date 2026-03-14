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
    <section className="bg-neutral-50 py-8 border-y border-neutral-100">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900 text-sm md:text-base truncate">
                    {link.label}
                  </p>
                  <p className="text-xs text-neutral-500 hidden md:block">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

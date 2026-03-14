'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MegaMenuSection as MegaMenuSectionType } from './types';

interface MegaMenuSectionProps {
  section: MegaMenuSectionType;
  lang: 'pl' | 'de' | 'en';
  onLinkClick?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function MegaMenuSection({ section, lang, onLinkClick }: MegaMenuSectionProps) {
  const title = section.title[lang] || section.title.pl;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="border-b-2 border-primary-200 pb-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-primary-800">
          {title}
        </h2>
      </div>

      {/* Links List */}
      <ul className="space-y-1.5">
        {section.links.map((link, index) => {
          const label = link.label[lang] || link.label.pl;
          const href = link.external ? link.href : `/${lang}${link.href}`;

          return (
            <motion.li
              key={`${section.id}-${index}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                href={href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={onLinkClick}
                className={cn(
                  'group flex items-center py-1.5 text-[15px] text-neutral-700',
                  'hover:text-primary-600 transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded'
                )}
              >
                <span className="relative">
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-500 transition-all duration-200 group-hover:w-full" />
                </span>
                {link.external && (
                  <svg
                    className="ml-1.5 w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

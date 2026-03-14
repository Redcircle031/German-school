'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MegaMenuSection, MegaMenuLink } from './types';

interface MobileAccordionProps {
  sections: MegaMenuSection[];
  lang: 'pl' | 'de' | 'en';
  onLinkClick?: () => void;
}

interface AccordionItemProps {
  section: MegaMenuSection;
  lang: 'pl' | 'de' | 'en';
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick?: () => void;
}

const contentVariants = {
  hidden: { 
    height: 0, 
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 },
    },
  },
  visible: { 
    height: 'auto', 
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.25,
      ease: 'easeOut',
    },
  }),
};

function AccordionItem({ section, lang, isOpen, onToggle, onLinkClick }: AccordionItemProps) {
  const title = section.title[lang] || section.title.pl;

  return (
    <div className="border-b border-neutral-200">
      {/* Header Button */}
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between px-6 py-4',
          'text-left transition-colors duration-200',
          'hover:bg-neutral-50 focus:outline-none focus-visible:bg-neutral-50',
          isOpen && 'bg-neutral-50'
        )}
        aria-expanded={isOpen}
        aria-controls={`section-${section.id}`}
      >
        <span className={cn(
          'text-sm font-semibold transition-colors',
          isOpen ? 'text-primary-700' : 'text-neutral-900'
        )}>
          {title}
        </span>
        
        <ChevronRight className={cn(
          'w-5 h-5 text-neutral-400 transition-transform duration-300',
          isOpen && 'rotate-90 text-primary-500'
        )} />
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`section-${section.id}`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden bg-neutral-50/50"
          >
            <ul className="px-6 py-3 space-y-1">
              {section.links.map((link, index) => {
                const label = link.label[lang] || link.label.pl;
                const href = link.external ? link.href : `/${lang}${link.href}`;

                return (
                  <motion.li
                    key={`${section.id}-${index}`}
                    variants={linkVariants}
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
                        'flex items-center py-2.5 pl-4 pr-2',
                        'text-[15px] text-neutral-700',
                        'hover:text-primary-600 hover:bg-primary-50/50',
                        'rounded-lg transition-all duration-200',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mr-3 group-hover:bg-primary-400" />
                      <span className="flex-1">{label}</span>
                      
                      {link.external && (
                        <svg
                          className="w-4 h-4 text-neutral-400 ml-2"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileAccordion({ sections, lang, onLinkClick }: MobileAccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="divide-y divide-neutral-100">
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          section={section}
          lang={lang}
          isOpen={openSection === section.id}
          onToggle={() => handleToggle(section.id)}
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
}

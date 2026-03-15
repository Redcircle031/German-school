'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuickAction } from './types';

interface QuickActionsProps {
  actions: QuickAction[];
  lang: 'pl' | 'de' | 'en';
  onActionClick?: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  'users': Users,
  'book-open': BookOpen,
  'calendar': Calendar,
};

const actionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.05,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function QuickActions({ actions, lang, onActionClick }: QuickActionsProps) {
  return (
    <div className="container-custom py-4">
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
        {actions.map((action, index) => {
          const Icon = iconMap[action.icon] || GraduationCap;
          const label = action.label[lang] || action.label.pl;
          const href = action.external ? action.href : `/${lang}${action.href}`;
          
          const isPrimary = action.variant === 'primary';
          
          return (
            <motion.div
              key={action.id}
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                href={href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                onClick={onActionClick}
                className={cn(
                  'group flex items-center gap-2 rounded-lg px-4 py-2.5',
                  'text-sm font-medium',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2',
                  
                  // Primary variant
                  isPrimary && [
                    'bg-red-600 text-white',
                    'hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md',
                    'shadow-sm',
                  ],
                  
                  // Outline variant
                  !isPrimary && [
                    'border border-neutral-300 bg-white text-neutral-700',
                    'hover:border-red-300 hover:bg-red-50 hover:text-red-700',
                    'hover:-translate-y-0.5 hover:shadow-sm',
                  ]
                )}
              >
                <Icon className={cn(
                  'size-4 transition-colors',
                  isPrimary ? 'text-white' : 'text-neutral-500 group-hover:text-red-600'
                )} />
                
                <span>{label}</span>
                
                {action.external && (
                  <ExternalLink className={cn(
                    'ml-1 size-3 transition-colors',
                    isPrimary ? 'text-white/70' : 'text-neutral-400 group-hover:text-red-500'
                  )} />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

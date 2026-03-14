'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
          >
            <span className="font-semibold text-neutral-900 pr-4">{item.title}</span>
            <ChevronDown className={cn('w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform', openIndex === index && 'rotate-180')} />
          </button>
          <div className={cn('overflow-hidden transition-all', openIndex === index ? 'max-h-96' : 'max-h-0')}>
            <div className="p-6 pt-0 text-neutral-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

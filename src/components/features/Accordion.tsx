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
        <div key={index} className="overflow-hidden rounded-xl border border-neutral-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between bg-white p-6 text-left transition-colors hover:bg-neutral-50"
          >
            <span className="pr-4 font-semibold text-neutral-900">{item.title}</span>
            <ChevronDown className={cn('size-5 shrink-0 text-neutral-400 transition-transform', openIndex === index && 'rotate-180')} />
          </button>
          <div className={cn('overflow-hidden transition-all', openIndex === index ? 'max-h-96' : 'max-h-0')}>
            <div className="p-6 pt-0 text-neutral-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

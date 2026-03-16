'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  locale: string;
}

const avatarColors = [
  'bg-red-100 text-red-700',
  'bg-accent-100 text-accent-700',
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-purple-100 text-purple-700',
];

export default function TestimonialsSection({ testimonials, locale }: TestimonialsSectionProps) {
  const getLabel = (key: string) => {
    const labels: Record<string, Record<string, string>> = {
      badge: {
        pl: 'Głosy rodziców',
        de: 'Elternstimmen',
        en: 'Parent voices',
      },
      title: {
        pl: 'Zaufali nam rodzice',
        de: 'Eltern vertrauen uns',
        en: 'Trusted by parents',
      },
      description: {
        pl: 'Posłuchaj, co mówią rodzice naszych uczniów o doświadczeniach w WBS',
        de: 'Hören Sie, was die Eltern unserer Schüler über ihre Erfahrungen an der WBS sagen',
        en: 'Hear what our students\' parents say about their experience at WBS',
      },
    };
    return labels[key]?.[locale] || labels[key]?.en || '';
  };

  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      {/* Decorative top border stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-600 via-accent-400 to-red-600" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-red-600">
            {getLabel('badge')}
          </span>
          <h2 className="mb-4 text-3xl font-medium text-neutral-900 md:text-4xl">
            {getLabel('title')}
          </h2>
          <p className="mx-auto max-w-xl text-base text-neutral-500">
            {getLabel('description')}
          </p>
        </motion.div>

        {/* Testimonial cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Large decorative quote mark */}
              <Quote className="mb-4 size-8 text-red-200" fill="currentColor" />

              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColors[index % avatarColors.length]}`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-xs text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

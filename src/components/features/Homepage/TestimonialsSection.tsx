'use client';

import { motion } from 'framer-motion';
import { containerVariants, slideUpVariants } from '@/lib/animations/variants';
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

export default function TestimonialsSection({ testimonials, locale }: TestimonialsSectionProps) {
  const getLabel = (key: string) => {
    const labels: Record<string, Record<string, string>> = {
      badge: {
        pl: 'Opinie',
        de: 'Meinungen',
        en: 'Testimonials',
      },
      title: {
        pl: 'Co mówią nasi rodzice?',
        de: 'Was sagen unsere Eltern?',
        en: 'What parents say',
      },
      description: {
        pl: 'Zobacz, dlaczego rodzice wybierają WBS dla edukacji swoich dzieci',
        de: 'Sehen Sie, warum Eltern die WBS für die Bildung ihrer Kinder wählen',
        en: 'See why parents choose WBS for their children\'s education',
      },
    };
    return labels[key]?.[locale] || labels[key]?.en || '';
  };

  // Safety check for testimonials
  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-neutral-50/80 py-24 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.span variants={slideUpVariants} className="mb-6 inline-block rounded-full border border-accent-200 bg-white px-4 py-1.5 text-sm font-medium text-accent-700">
            {getLabel('badge')}
          </motion.span>
          <motion.h2 variants={slideUpVariants} className="mb-6 text-4xl font-medium text-neutral-900 md:text-5xl">
            {getLabel('title')}
          </motion.h2>
          <motion.p variants={slideUpVariants} className="mx-auto max-w-2xl text-lg text-neutral-600">
            {getLabel('description')}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-accent-300 hover:shadow-xl"
            >
              <Quote className="mb-6 size-10 text-accent-400" />
              <blockquote className="mb-6 leading-relaxed text-neutral-700">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent-100 text-lg font-semibold text-accent-700">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

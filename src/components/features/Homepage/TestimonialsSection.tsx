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
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={slideUpVariants} className="inline-block px-4 py-1.5 bg-white text-red-700 text-sm font-medium rounded-full border border-red-100 mb-6">
            {getLabel('badge')}
          </motion.span>
          <motion.h2 variants={slideUpVariants} className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {getLabel('title')}
          </motion.h2>
          <motion.p variants={slideUpVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {getLabel('description')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-red-600 mb-6 opacity-50" />
              <blockquote className="text-neutral-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-lg font-semibold text-red-700">
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

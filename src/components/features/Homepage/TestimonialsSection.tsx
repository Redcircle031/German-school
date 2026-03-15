'use client';

import { motion } from 'framer-motion';
import { containerVariants, slideUpVariants } from '@/lib/animations/variants';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const getLabel = (key: string) => {
    const labels: Record<string, Record<string, string>> = {
      badge: {
        pl: 'Głosy WBS',
        de: 'Stimmen der WBS',
        en: 'Voices of WBS',
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
    <section className="relative overflow-hidden bg-neutral-900 py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="testimonial-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
        </svg>
      </div>
      <div className="absolute -left-40 top-0 size-80 rounded-full bg-accent-400/5 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 size-60 rounded-full bg-red-600/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.span
            variants={slideUpVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-4 py-1.5 text-sm font-medium text-accent-400"
          >
            <Star className="size-3.5" fill="currentColor" />
            {getLabel('badge')}
          </motion.span>
          <motion.h2
            variants={slideUpVariants}
            className="mb-6 text-4xl font-medium text-white md:text-5xl"
          >
            {getLabel('title')}
          </motion.h2>
          <motion.p
            variants={slideUpVariants}
            className="mx-auto max-w-2xl text-lg text-neutral-400"
          >
            {getLabel('description')}
          </motion.p>
        </motion.div>

        {/* Featured testimonial (active) + selector */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Featured quote — takes up 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
              <Quote className="mb-6 size-12 text-accent-400/60" />
              <blockquote className="mb-8 text-xl leading-relaxed text-neutral-200 md:text-2xl">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-accent-400/20 text-lg font-bold text-accent-400">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-neutral-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial selectors — takes up 2 columns */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveIndex(index)}
                className={`group rounded-2xl border p-6 text-left transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-accent-400/30 bg-accent-400/10'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-full text-sm font-bold ${
                    index === activeIndex
                      ? 'bg-accent-400 text-neutral-900'
                      : 'bg-white/10 text-white/60'
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-semibold ${index === activeIndex ? 'text-white' : 'text-neutral-400'}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className={`mt-3 line-clamp-2 text-sm leading-relaxed ${
                  index === activeIndex ? 'text-neutral-300' : 'text-neutral-500'
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

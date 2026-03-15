'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, slideUpVariants } from '@/lib/animations/variants';
import { Quote } from 'lucide-react';

interface DirectorWelcomeProps {
  lang: string;
}

const content = {
  pl: {
    badge: 'Słowo Dyrektora',
    name: 'Rüdiger Bott',
    title: 'Dyrektor Szkoły',
    quote: 'W WBS wierzymy, że prawdziwa edukacja rodzi się na styku kultur. Nasze dwujęzyczne środowisko nie tylko uczy języków — buduje mosty między tradycjami, kształtuje otwartość na świat i przygotowuje uczniów do życia w globalnej społeczności.',
    message: 'Zapraszam Państwa do odkrywania naszej szkoły — miejsca, gdzie od 1978 roku polskie i niemieckie dziedzictwo łączą się, tworząc niepowtarzalną przestrzeń do nauki i rozwoju.',
  },
  de: {
    badge: 'Wort des Schulleiters',
    name: 'Rüdiger Bott',
    title: 'Schulleiter',
    quote: 'An der WBS glauben wir, dass echte Bildung an der Schnittstelle von Kulturen entsteht. Unsere zweisprachige Umgebung lehrt nicht nur Sprachen — sie baut Brücken zwischen Traditionen, fördert Weltoffenheit und bereitet Schüler auf das Leben in einer globalen Gemeinschaft vor.',
    message: 'Ich lade Sie ein, unsere Schule zu entdecken — einen Ort, an dem seit 1978 polnisches und deutsches Erbe zusammenfließen und einen einzigartigen Raum zum Lernen und Wachsen schaffen.',
  },
  en: {
    badge: "Director's Welcome",
    name: 'Rüdiger Bott',
    title: 'School Director',
    quote: 'At WBS, we believe true education is born where cultures meet. Our bilingual environment does more than teach languages — it builds bridges between traditions, nurtures global awareness, and prepares students for life in a connected world.',
    message: 'I invite you to discover our school — a place where since 1978, Polish and German heritage come together to create a unique space for learning and growing.',
  },
};

export default function DirectorWelcome({ lang }: DirectorWelcomeProps) {
  const c = content[lang as keyof typeof content] || content.en;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Director photo */}
          <motion.div variants={slideUpVariants} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/images/people/ruediger-bott.jpg"
                alt="Rüdiger Bott — Schulleiter / School Director"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 size-full rounded-3xl bg-accent-100" />
            </div>

            {/* Floating year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 z-10 flex size-24 items-center justify-center rounded-2xl bg-red-600 shadow-xl shadow-red-600/20 lg:bottom-8 lg:right-8"
            >
              <div className="text-center">
                <p className="text-[10px] font-medium uppercase tracking-widest text-red-200">Since</p>
                <p className="text-2xl font-extrabold text-white">1978</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={slideUpVariants}>
            <span className="mb-6 inline-block rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
              {c.badge}
            </span>

            <div className="relative mb-8">
              <Quote className="absolute -left-2 -top-3 size-10 text-accent-200" />
              <blockquote className="pl-8 text-xl leading-relaxed text-neutral-800 md:text-2xl">
                {c.quote}
              </blockquote>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              {c.message}
            </p>

            {/* Director info */}
            <div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
              <div className="relative size-14 overflow-hidden rounded-full">
                <Image
                  src="/images/people/ruediger-bott.jpg"
                  alt="Rüdiger Bott"
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-neutral-900">{c.name}</p>
                <p className="text-sm text-neutral-500">{c.title}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

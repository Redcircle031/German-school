'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, slideUpVariants } from '@/lib/animations/variants';

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
    <section className="relative overflow-hidden bg-[#faf8f5] py-24 lg:py-32">
      {/* Warm side accent */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-600 via-accent-400 to-red-600 opacity-60" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left: Director photo */}
          <motion.div variants={slideUpVariants} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200 shadow-xl">
              <Image
                src="/images/people/ruediger-bott.jpg"
                alt="Rüdiger Bott — Schulleiter / School Director"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Warm decorative offset block */}
            <div className="absolute -bottom-4 -right-4 -z-10 size-full rounded-3xl bg-accent-100/60" />

            {/* Floating since badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 z-10 flex size-24 flex-col items-center justify-center rounded-2xl bg-red-600 shadow-xl lg:bottom-8 lg:right-8"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-red-200">Since</p>
              <p className="text-2xl font-extrabold text-white">1978</p>
              <div className="mt-1 flex gap-1">
                <span className="text-xs">🇵🇱</span>
                <span className="text-xs">🇩🇪</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={slideUpVariants}>
            {/* Badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700">
              <span className="size-1.5 rounded-full bg-accent-500" />
              {c.badge}
            </span>

            {/* Quote */}
            <blockquote className="relative mb-6">
              <span className="absolute -left-1 -top-4 text-7xl leading-none text-red-200 select-none">&ldquo;</span>
              <p className="relative pl-6 text-xl leading-relaxed text-neutral-800 md:text-2xl">
                {c.quote}
              </p>
            </blockquote>

            <p className="mb-8 pl-6 text-base leading-relaxed text-neutral-600">
              {c.message}
            </p>

            {/* Signature area */}
            <div className="flex items-center gap-4 border-t border-neutral-200 pl-6 pt-6">
              <div className="relative size-14 overflow-hidden rounded-full ring-2 ring-accent-200 ring-offset-2">
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

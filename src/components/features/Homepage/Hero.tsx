'use client';

import { ArrowRight, Play, GraduationCap, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
  lang: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
};

const greetings = [
  { word: 'Witamy', lang: 'PL', flag: '🇵🇱' },
  { word: 'Willkommen', lang: 'DE', flag: '🇩🇪' },
  { word: 'Welcome', lang: 'EN', flag: '🇬🇧' },
];

export default function Hero({ lang }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const content = {
    pl: {
      headline: 'Dwie kultury.',
      headlineAccent: 'Jedna szkoła.',
      description: 'WBS to miejsce, gdzie polskie i niemieckie dziedzictwo spotykają się, tworząc wyjątkową przestrzeń do nauki i rozwoju od 1978 roku.',
      ctaPrimary: 'Odkryj WBS',
      ctaSecondary: 'Zobacz film',
      badge: 'Rekrutacja 2026/2027',
    },
    de: {
      headline: 'Zwei Kulturen.',
      headlineAccent: 'Eine Schule.',
      description: 'Die WBS ist ein Ort, an dem sich polnisches und deutsches Erbe treffen und einen einzigartigen Raum zum Lernen und Wachsen schaffen – seit 1978.',
      ctaPrimary: 'Entdecke WBS',
      ctaSecondary: 'Video ansehen',
      badge: 'Aufnahme 2026/2027',
    },
    en: {
      headline: 'Two cultures.',
      headlineAccent: 'One school.',
      description: 'WBS is where Polish and German heritage meet, creating a unique space for learning and growing since 1978.',
      ctaPrimary: 'Discover WBS',
      ctaSecondary: 'Watch video',
      badge: 'Admissions 2026/2027',
    },
  };

  const credentials = {
    pl: [
      { icon: GraduationCap, label: 'IB World School' },
      { icon: Award, label: 'DSD II Diplom' },
      { icon: Globe, label: 'Deutsche Auslandsschule' },
    ],
    de: [
      { icon: GraduationCap, label: 'IB World School' },
      { icon: Award, label: 'DSD II Diplom' },
      { icon: Globe, label: 'Deutsche Auslandsschule' },
    ],
    en: [
      { icon: GraduationCap, label: 'IB World School' },
      { icon: Award, label: 'DSD II Diploma' },
      { icon: Globe, label: 'German School Abroad' },
    ],
  };

  const c = content[lang as keyof typeof content] || content.pl;
  const creds = credentials[lang as keyof typeof credentials] || credentials.en;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image area */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/campus-hero.webp"
          alt="WBS Campus Willy Brandt Schule Warschau"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />

        {/* Warm overlay tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

        {/* Decorative: subtle school crest watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="absolute -right-32 top-1/2 -translate-y-1/2 text-[40rem] font-black leading-none text-white"
        >
          W
        </motion.div>

        {/* Warm accent glow */}
        <motion.div
          className="absolute -bottom-20 left-1/3 size-[600px] rounded-full bg-red-600/20 blur-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute -right-10 top-20 size-96 rounded-full bg-accent-400/10 blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex min-h-screen flex-col justify-center pb-24 pt-32 lg:pb-32 lg:pt-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div variants={slideUpVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-2 text-sm font-medium text-accent-300 backdrop-blur-sm">
                <span className="size-2 animate-pulse rounded-full bg-accent-400" />
                {c.badge}
              </span>
            </motion.div>

            {/* Bilingual Greeting */}
            <motion.div variants={slideUpVariants} className="mb-6">
              <div className="h-12 overflow-hidden md:h-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={greetingIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-3xl font-bold tracking-tight text-white/30 md:text-4xl">
                      {greetings[greetingIndex].word}
                    </span>
                    <span className="text-base opacity-40">
                      {greetings[greetingIndex].flag}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideUpVariants}
              className="mb-2 text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              {c.headline}
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className="mb-8 text-5xl font-bold leading-[0.95] tracking-tight text-red-400 md:text-7xl lg:text-8xl"
            >
              {c.headlineAccent}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideUpVariants}
              className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl"
            >
              {c.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={slideUpVariants}
              className="mb-14 flex flex-wrap gap-4"
            >
              <Link
                href={`/${lang}/about`}
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30"
              >
                {c.ctaPrimary}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 size-4 text-white" fill="white" />
                </span>
                {c.ctaSecondary}
              </button>
            </motion.div>

            {/* Credentials strip */}
            <motion.div
              variants={fadeInVariants}
              className="flex flex-wrap gap-4"
            >
              {creds.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
                >
                  <cred.icon className="size-4 text-accent-400" />
                  <span className="text-sm font-medium text-white/70">{cred.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating "Since 1978" badge — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: easeOutExpo }}
            className="absolute bottom-32 right-8 hidden lg:block"
          >
            <div className="flex size-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">Since</p>
              <p className="text-3xl font-extrabold text-white">1978</p>
              <div className="mt-1 flex gap-1.5">
                <span className="text-sm">🇵🇱</span>
                <span className="text-[10px] text-white/30">+</span>
                <span className="text-sm">🇩🇪</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 pt-2"
        >
          <motion.div className="size-1.5 rounded-full bg-red-400" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="w-full max-w-2xl rounded-2xl bg-neutral-900 p-8 text-center">
            <p className="mb-4 text-lg text-white">Video placeholder</p>
            <p className="text-neutral-400">School promotional video would play here</p>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="mt-6 rounded-full bg-red-600 px-6 py-2 text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

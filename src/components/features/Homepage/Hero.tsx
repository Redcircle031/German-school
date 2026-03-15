'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Play, MapPin, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
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
      duration: 1,
      ease: easeOutExpo,
    },
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

// Bilingual greeting data
const greetings = [
  { word: 'Witamy', lang: 'PL', flag: '🇵🇱' },
  { word: 'Willkommen', lang: 'DE', flag: '🇩🇪' },
  { word: 'Welcome', lang: 'EN', flag: '🇬🇧' },
];

export default function Hero({ lang }: HeroProps) {
  const t = useTranslations();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Cycle through greetings
  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const content = {
    pl: {
      headline: "Dwie kultury.",
      headlineAccent: "Jedna szkoła.",
      description: "WBS to miejsce, gdzie polskie i niemieckie dziedzictwo spotykają się, tworząc wyjątkową przestrzeń do nauki i rozwoju od 1978 roku.",
      ctaPrimary: "Odkryj WBS",
      ctaSecondary: "Zobacz film",
      badge: "Rekrutacja 2026/2027",
      stats: [
        { value: "300+", label: "Uczniów", icon: Users },
        { value: "47", label: "Lat tradycji", icon: Calendar },
        { value: "2", label: "Kampusy", icon: MapPin },
      ],
    },
    de: {
      headline: "Zwei Kulturen.",
      headlineAccent: "Eine Schule.",
      description: "Die WBS ist ein Ort, an dem sich polnisches und deutsches Erbe treffen und einen einzigartigen Raum zum Lernen und Wachsen schaffen – seit 1978.",
      ctaPrimary: "Entdecke WBS",
      ctaSecondary: "Video ansehen",
      badge: "Aufnahme 2026/2027",
      stats: [
        { value: "300+", label: "Schüler", icon: Users },
        { value: "47", label: "Jahre Tradition", icon: Calendar },
        { value: "2", label: "Campusse", icon: MapPin },
      ],
    },
    en: {
      headline: "Two cultures.",
      headlineAccent: "One school.",
      description: "WBS is where Polish and German heritage meet, creating a unique space for learning and growing since 1978.",
      ctaPrimary: "Discover WBS",
      ctaSecondary: "Watch video",
      badge: "Admissions 2026/2027",
      stats: [
        { value: "300+", label: "Students", icon: Users },
        { value: "47", label: "Years of tradition", icon: Calendar },
        { value: "2", label: "Campuses", icon: MapPin },
      ],
    },
  };

  const c = content[lang as keyof typeof content] || content.pl;

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Warm accent blobs */}
      <motion.div
        className="bg-accent-400/8 absolute -right-20 -top-20 size-96 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: easeOutExpo }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 size-64 rounded-full bg-red-600/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: easeOutExpo }}
      />

      <div className="container-custom relative z-10">
        <div className="grid min-h-screen items-center gap-12 py-32 lg:grid-cols-2 lg:gap-8 lg:py-0">

          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={slideUpVariants}>
              <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700">
                <span className="size-2 animate-pulse rounded-full bg-accent-400" />
                {c.badge}
              </span>
            </motion.div>

            {/* Bilingual Greeting */}
            <motion.div variants={slideUpVariants} className="mb-4">
              <div className="h-14 overflow-hidden md:h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={greetingIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-4xl font-extrabold tracking-tight text-neutral-300 md:text-5xl">
                      {greetings[greetingIndex].word}
                    </span>
                    <span className="text-lg opacity-50">
                      {greetings[greetingIndex].flag}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideUpVariants}
              className="mb-2 text-5xl font-bold leading-[0.95] tracking-tight text-black md:text-6xl lg:text-7xl"
            >
              {c.headline}
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className="mb-8 text-5xl font-bold leading-[0.95] tracking-tight text-red-600 md:text-6xl lg:text-7xl"
            >
              {c.headlineAccent}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideUpVariants}
              className="mb-10 max-w-lg text-lg leading-relaxed text-neutral-600 md:text-xl"
            >
              {c.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={slideUpVariants}
              className="mb-12 flex flex-wrap gap-4"
            >
              <Link
                href={`/${lang}/about`}
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
              >
                {c.ctaPrimary}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full border-2 border-neutral-200 bg-white px-6 py-4 font-semibold text-neutral-800 transition-all hover:border-red-200 hover:bg-red-50"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 size-4 text-white" fill="white" />
                </span>
                {c.ctaSecondary}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInVariants}
              className="flex flex-wrap gap-8 border-t border-neutral-200 pt-8"
            >
              {c.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <stat.icon className="size-5 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main visual - Stylized school badge */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute right-0 top-0 h-[70%] w-[85%] overflow-hidden rounded-3xl shadow-2xl shadow-red-900/10"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <div className="flex size-full items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-8">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, ease: easeOutExpo }}
                      className="mx-auto mb-6 flex size-32 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm"
                    >
                      <span className="text-5xl font-extrabold tracking-tight">WBS</span>
                    </motion.div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">Willy Brandt Schule</p>
                    <p className="mt-2 text-xs tracking-widest text-white/40">WARSZAWA · WARSAW · WARSCHAU</p>
                    <div className="mt-6 flex justify-center gap-3">
                      <span className="text-2xl">🇵🇱</span>
                      <span className="text-xl text-white/30">+</span>
                      <span className="text-2xl">🇩🇪</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary card - credentials */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute bottom-0 left-0 z-10 h-auto w-3/5 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
                style={{ transform: 'rotate(2deg)' }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-600">Deutsche Auslandsschule</p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {lang === 'pl' ? 'Akredytowana szkoła niemiecka za granicą z dwujęzycznym programem nauczania'
                    : lang === 'de' ? 'Akkreditierte deutsche Auslandsschule mit bilingualem Lehrplan'
                    : 'Accredited German school abroad with bilingual curriculum'}
                </p>
                <div className="mt-4 flex gap-3">
                  <div className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700">IB World School</div>
                  <div className="rounded-full bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">DSD II</div>
                </div>
              </motion.div>

              {/* Accent - Year badge */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute bottom-20 right-10 z-20 flex size-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 shadow-lg"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <div className="text-center">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">Since</p>
                  <p className="text-2xl font-extrabold text-white">1978</p>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute left-10 top-10 size-20 rounded-full border-2 border-accent-200"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute bottom-32 right-0 size-12 rotate-12 rounded-lg bg-accent-400"
              />
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
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-neutral-300 pt-2"
        >
          <motion.div className="size-1.5 rounded-full bg-red-600" />
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

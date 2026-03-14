'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Play, MapPin, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroProps {
  lang: string;
}

// Animation variants - custom easing for premium feel
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

// Photo collage positions - inspired by SAS but unique layout
const photoPositions = [
  { rotate: -3, zIndex: 1, delay: 0.3 },
  { rotate: 2, zIndex: 2, delay: 0.4 },
  { rotate: -2, zIndex: 3, delay: 0.5 },
];

export default function Hero({ lang }: HeroProps) {
  const t = useTranslations();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Translations for this section
  const content = {
    pl: {
      headline: "Dwie kultury.",
      headlineAccent: "Jedna szkoła.",
      subheadline: "Jedna szkoła.",
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
      subheadline: "Eine Schule.",
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
      subheadline: "One school.",
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
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background subtle pattern - organic dots inspired by SAS */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Red accent blob - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: easeOutExpo }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32 lg:py-0">
          
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={slideUpVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                {c.badge}
              </span>
            </motion.div>

            {/* Headline - bold typography inspired by SAS */}
            <motion.h1 
              variants={slideUpVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-2"
            >
              {c.headline}
            </motion.h1>
            <motion.h1 
              variants={slideUpVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 leading-[0.95] tracking-tight mb-8"
            >
              {c.headlineAccent}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={slideUpVariants}
              className="text-lg md:text-xl text-neutral-600 max-w-lg mb-10 leading-relaxed"
            >
              {c.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={slideUpVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href={`/${lang}/about`}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-red-600/25 hover:scale-105"
              >
                {c.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-4 bg-white border-2 border-neutral-200 hover:border-red-200 text-neutral-800 font-semibold rounded-full transition-all hover:bg-red-50"
              >
                <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                </span>
                {c.ctaSecondary}
              </button>
            </motion.div>

            {/* Stats - inspired by Bryanston's clean stat display */}
            <motion.div 
              variants={fadeInVariants}
              className="flex flex-wrap gap-8 pt-8 border-t border-neutral-200"
            >
              {c.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <stat.icon className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Photo collage inspired by SAS but unique */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main large image */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute top-0 right-0 w-[85%] h-[70%] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10"
                style={{ transform: `rotate(${photoPositions[0].rotate}deg)` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-neutral-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-red-600" />
                    </div>
                    <p className="text-neutral-500 text-sm">Student photo placeholder</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary image - offset */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-xl z-10"
                style={{ transform: `rotate(${photoPositions[1].rotate}deg)` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-red-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-neutral-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-neutral-500" />
                    </div>
                    <p className="text-neutral-400 text-xs">Campus photo placeholder</p>
                  </div>
                </div>
              </motion.div>

              {/* Small accent image */}
              <motion.div
                variants={scaleUpVariants}
                className="absolute bottom-20 right-10 w-[35%] h-[30%] rounded-xl overflow-hidden shadow-lg z-20"
                style={{ transform: `rotate(${photoPositions[2].rotate}deg)` }}
              >
                <div className="w-full h-full bg-red-600 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-white/80 text-xs font-medium">WBS</p>
                    <p className="text-white font-bold">1978</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-10 left-10 w-20 h-20 border-2 border-red-200 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute bottom-32 right-0 w-12 h-12 bg-red-600 rounded-lg rotate-12"
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
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Video Modal - placeholder */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="bg-neutral-900 rounded-2xl p-8 max-w-2xl w-full text-center">
            <p className="text-white text-lg mb-4">Video placeholder</p>
            <p className="text-neutral-400">School promotional video would play here</p>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

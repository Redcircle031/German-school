'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * value));

      if (current >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 py-20">
      {/* Decorative accent lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
      </div>
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Subtle glow behind number */}
              <div className="absolute inset-0 mx-auto size-24 rounded-full bg-accent-400/5 blur-2xl transition-all group-hover:scale-150 group-hover:bg-accent-400/10" />

              <p className="relative text-5xl font-extrabold tracking-tight text-accent-400 md:text-6xl lg:text-7xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <div className="mx-auto mt-3 h-0.5 w-8 bg-accent-400/30" />
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-neutral-400 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

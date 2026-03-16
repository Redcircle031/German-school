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
      if (current >= steps) { setCount(value); clearInterval(timer); }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="relative overflow-hidden bg-red-600 py-16">
      {/* Subtle diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)' }}
      />
      {/* Flag-inspired accent */}
      <div className="absolute inset-y-0 left-0 w-2 bg-white/20" />
      <div className="absolute inset-y-0 right-0 w-2 bg-white/20" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <div className="mx-auto my-3 h-0.5 w-10 bg-white/40 rounded-full" />
              <p className="text-sm font-semibold uppercase tracking-widest text-red-100 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

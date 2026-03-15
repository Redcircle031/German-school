import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating?: number; // 0-5 stars
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  index?: number; // For stagger animations
}

/**
 * TestimonialCard Component
 * 
 * Variants:
 * - default: Standard card with quote
 * - compact: Smaller, denser layout
 * - featured: Larger with accent styling
 * 
 * Usage:
 * ```tsx
 * <TestimonialCard
 *   quote="WBS provided an exceptional education..."
 *   author={{ name: 'Anna Kowalska', role: 'Parent' }}
 *   rating={5}
 * />
 * ```
 */
export default function TestimonialCard({
  quote,
  author,
  rating = 0,
  variant = 'default',
  className,
  index = 0,
}: TestimonialCardProps) {
  const renderStars = () => {
    if (rating === 0) return null;
    
    return (
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'size-5',
              i < rating
                ? 'fill-accent-500 text-accent-500'
                : 'fill-neutral-200 text-neutral-200'
            )}
          />
        ))}
      </div>
    );
  };

  if (variant === 'featured') {
    return (
      <motion.div
        className={cn(
          'relative bg-gradient-to-br from-red-600 to-red-700 text-white',
          'overflow-hidden rounded-3xl p-8 md:p-12',
          className
        )}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        {/* Decorative quote mark */}
        <Quote className="absolute left-8 top-8 size-16 text-white/10" />
        
        <div className="relative z-10">
          {renderStars()}
          
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed md:text-3xl">
            "{quote}"
          </blockquote>
          
          <div className="flex items-center gap-4">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={56}
                height={56}
                className="size-14 rounded-full border-2 border-white/30 object-cover"
              />
            ) : (
              <div className="flex size-14 items-center justify-center rounded-full bg-white/20 text-xl font-bold">
                {author.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold">{author.name}</p>
              <p className="text-white/80">{author.role}</p>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-white/5" />
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn(
          'rounded-xl border border-neutral-200 bg-white p-6',
          className
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {renderStars()}
        
        <div className="flex items-start gap-4">
          <Quote className="mt-1 size-6 shrink-0 text-red-600" />
          <div>
            <blockquote className="mb-4 leading-relaxed text-neutral-700">
              {quote}
            </blockquote>
            <div>
              <p className="font-semibold text-neutral-900">{author.name}</p>
              <p className="text-sm text-neutral-500">{author.role}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-red-200 hover:shadow-xl',
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      {/* Quote icon */}
      <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-red-50">
        <Quote className="size-6 text-red-600" />
      </div>
      
      {renderStars()}
      
      {/* Quote */}
      <blockquote className="mb-6 text-lg leading-relaxed text-neutral-700">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-12 items-center justify-center rounded-full bg-red-100 text-lg font-semibold text-red-700">
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-neutral-900">{author.name}</p>
          <p className="text-sm text-neutral-500">{author.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

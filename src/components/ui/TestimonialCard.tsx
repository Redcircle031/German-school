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
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
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
          'relative bg-gradient-to-br from-secondary-600 to-secondary-700 text-white',
          'rounded-3xl p-8 md:p-12 overflow-hidden',
          className
        )}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        {/* Decorative quote mark */}
        <Quote className="absolute top-8 left-8 w-16 h-16 text-white/10" />
        
        <div className="relative z-10">
          {renderStars()}
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "{quote}"
          </blockquote>
          
          <div className="flex items-center gap-4">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                {author.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-semibold text-lg">{author.name}</p>
              <p className="text-white/80">{author.role}</p>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/5 rounded-full" />
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn(
          'bg-white rounded-xl p-6 border border-neutral-200',
          className
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {renderStars()}
        
        <div className="flex items-start gap-4">
          <Quote className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" />
          <div>
            <blockquote className="text-neutral-700 leading-relaxed mb-4">
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
        'bg-white rounded-2xl p-8 border border-neutral-200 hover:border-secondary-200 hover:shadow-xl transition-all duration-300',
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      {/* Quote icon */}
      <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-6">
        <Quote className="w-6 h-6 text-secondary-600" />
      </div>
      
      {renderStars()}
      
      {/* Quote */}
      <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-lg font-semibold text-secondary-700">
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

/**
 * Loading Skeleton Components
 * Used for loading states with Suspense
 */

import { cn } from '@/lib/utils';

// ========================================
// NewsCard Skeleton
// ========================================

export function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-neutral-200" />
      
      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="w-20 h-6 bg-neutral-200 rounded-full mb-4" />
        
        {/* Title */}
        <div className="h-6 bg-neutral-200 rounded mb-3 w-3/4" />
        <div className="h-6 bg-neutral-200 rounded mb-4 w-1/2" />
        
        {/* Excerpt */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-neutral-200 rounded w-full" />
          <div className="h-4 bg-neutral-200 rounded w-5/6" />
        </div>
        
        {/* Date */}
        <div className="h-4 bg-neutral-200 rounded w-1/3" />
      </div>
    </div>
  );
}

// ========================================
// StaffCard Skeleton
// ========================================

export function StaffCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 animate-pulse">
      {/* Avatar */}
      <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-4" />
      
      {/* Name */}
      <div className="h-5 bg-neutral-200 rounded mb-2 w-3/4 mx-auto" />
      
      {/* Role */}
      <div className="h-4 bg-neutral-200 rounded mb-4 w-1/2 mx-auto" />
      
      {/* Subject badges */}
      <div className="flex justify-center gap-2 mb-4">
        <div className="h-6 w-16 bg-neutral-200 rounded" />
        <div className="h-6 w-16 bg-neutral-200 rounded" />
      </div>
      
      {/* Email button */}
      <div className="h-9 bg-neutral-200 rounded w-24 mx-auto" />
    </div>
  );
}

// ========================================
// EventCard Skeleton
// ========================================

export function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 animate-pulse">
      <div className="flex gap-4">
        {/* Date box */}
        <div className="w-16 h-16 bg-neutral-200 rounded-xl flex-shrink-0" />
        
        {/* Content */}
        <div className="flex-1">
          {/* Category badge */}
          <div className="w-24 h-6 bg-neutral-200 rounded-full mb-3" />
          
          {/* Title */}
          <div className="h-6 bg-neutral-200 rounded mb-2 w-3/4" />
          
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-neutral-200 rounded w-full" />
            <div className="h-4 bg-neutral-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// ProgramCard Skeleton
// ========================================

export function ProgramCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-neutral-200 animate-pulse">
      {/* Icon placeholder */}
      <div className="w-16 h-16 bg-neutral-200 rounded-2xl mb-6" />
      
      {/* Title */}
      <div className="h-6 bg-neutral-200 rounded mb-3 w-3/4" />
      
      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-neutral-200 rounded w-full" />
        <div className="h-4 bg-neutral-200 rounded w-5/6" />
      </div>
      
      {/* Link */}
      <div className="h-5 bg-neutral-200 rounded w-1/3" />
    </div>
  );
}

// ========================================
// PageHeader Skeleton
// ========================================

export function PageHeaderSkeleton() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <div className="w-32 h-4 bg-white/20 rounded" />
          <div className="w-4 h-4 bg-white/20 rounded" />
          <div className="w-24 h-4 bg-white/20 rounded" />
        </div>
        
        {/* Title */}
        <div className="h-12 bg-white/20 rounded w-1/2 mb-4" />
        
        {/* Description */}
        <div className="h-6 bg-white/20 rounded w-2/3" />
      </div>
    </section>
  );
}

// ========================================
// Hero Skeleton
// ========================================

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-32">
          {/* Content side */}
          <div className="space-y-6 animate-pulse">
            {/* Badge */}
            <div className="w-48 h-8 bg-neutral-200 rounded-full" />
            
            {/* Headline */}
            <div className="space-y-3">
              <div className="h-16 bg-neutral-200 rounded w-3/4" />
              <div className="h-16 bg-neutral-200 rounded w-1/2" />
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-5 bg-neutral-200 rounded w-full" />
              <div className="h-5 bg-neutral-200 rounded w-5/6" />
            </div>
            
            {/* CTAs */}
            <div className="flex gap-4">
              <div className="w-40 h-12 bg-neutral-200 rounded-full" />
              <div className="w-40 h-12 bg-neutral-200 rounded-full" />
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-neutral-200">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 bg-neutral-200 rounded w-16" />
                  <div className="h-4 bg-neutral-200 rounded w-20" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Image side */}
          <div className="relative h-[500px] animate-pulse">
            <div className="absolute top-0 right-0 w-[85%] h-[70%] bg-neutral-200 rounded-3xl" />
            <div className="absolute bottom-0 left-0 w-[60%] h-[45%] bg-neutral-200 rounded-2xl" />
            <div className="absolute bottom-20 right-10 w-[35%] h-[30%] bg-neutral-200 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// Grid Skeleton Wrapper
// ========================================

interface GridSkeletonProps {
  count?: number;
  type?: 'news' | 'staff' | 'event' | 'program';
  columns?: 2 | 3 | 4;
}

const skeletonComponents = {
  news: NewsCardSkeleton,
  staff: StaffCardSkeleton,
  event: EventCardSkeleton,
  program: ProgramCardSkeleton,
};

export function GridSkeleton({
  count = 6,
  type = 'news',
  columns = 3,
}: GridSkeletonProps) {
  const SkeletonComponent = skeletonComponents[type];
  
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-6', columnClasses[columns])}>
      {[...Array(count)].map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}

// ========================================
// Content Skeleton
// ========================================

interface ContentSkeletonProps {
  lines?: number;
  width?: 'full' | '3/4' | '2/3' | '1/2';
  className?: string;
}

export function ContentSkeleton({
  lines = 3,
  width = 'full',
  className,
}: ContentSkeletonProps) {
  const widthClasses = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '2/3': 'w-2/3',
    '1/2': 'w-1/2',
  };

  return (
    <div className={cn('space-y-2 animate-pulse', className)}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={cn(
            'h-4 bg-neutral-200 rounded',
            widthClasses[width],
            i === lines - 1 && 'w-5/6'
          )}
        />
      ))}
    </div>
  );
}

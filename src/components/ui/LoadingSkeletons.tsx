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
    <div className="animate-pulse overflow-hidden rounded-xl bg-white">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-neutral-200" />
      
      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="mb-4 h-6 w-20 rounded-full bg-neutral-200" />
        
        {/* Title */}
        <div className="mb-3 h-6 w-3/4 rounded bg-neutral-200" />
        <div className="mb-4 h-6 w-1/2 rounded bg-neutral-200" />
        
        {/* Excerpt */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-5/6 rounded bg-neutral-200" />
        </div>
        
        {/* Date */}
        <div className="h-4 w-1/3 rounded bg-neutral-200" />
      </div>
    </div>
  );
}

// ========================================
// StaffCard Skeleton
// ========================================

export function StaffCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-6">
      {/* Avatar */}
      <div className="mx-auto mb-4 size-20 rounded-full bg-neutral-200" />
      
      {/* Name */}
      <div className="mx-auto mb-2 h-5 w-3/4 rounded bg-neutral-200" />
      
      {/* Role */}
      <div className="mx-auto mb-4 h-4 w-1/2 rounded bg-neutral-200" />
      
      {/* Subject badges */}
      <div className="mb-4 flex justify-center gap-2">
        <div className="h-6 w-16 rounded bg-neutral-200" />
        <div className="h-6 w-16 rounded bg-neutral-200" />
      </div>
      
      {/* Email button */}
      <div className="mx-auto h-9 w-24 rounded bg-neutral-200" />
    </div>
  );
}

// ========================================
// EventCard Skeleton
// ========================================

export function EventCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-6">
      <div className="flex gap-4">
        {/* Date box */}
        <div className="size-16 shrink-0 rounded-xl bg-neutral-200" />
        
        {/* Content */}
        <div className="flex-1">
          {/* Category badge */}
          <div className="mb-3 h-6 w-24 rounded-full bg-neutral-200" />
          
          {/* Title */}
          <div className="mb-2 h-6 w-3/4 rounded bg-neutral-200" />
          
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-neutral-200" />
            <div className="h-4 w-5/6 rounded bg-neutral-200" />
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
    <div className="animate-pulse rounded-2xl border border-neutral-200 bg-white p-8">
      {/* Icon placeholder */}
      <div className="mb-6 size-16 rounded-2xl bg-neutral-200" />
      
      {/* Title */}
      <div className="mb-3 h-6 w-3/4 rounded bg-neutral-200" />
      
      {/* Description */}
      <div className="mb-4 space-y-2">
        <div className="h-4 w-full rounded bg-neutral-200" />
        <div className="h-4 w-5/6 rounded bg-neutral-200" />
      </div>
      
      {/* Link */}
      <div className="h-5 w-1/3 rounded bg-neutral-200" />
    </div>
  );
}

// ========================================
// PageHeader Skeleton
// ========================================

export function PageHeaderSkeleton() {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-700 pb-16 pt-32 text-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <div className="h-4 w-32 rounded bg-white/20" />
          <div className="size-4 rounded bg-white/20" />
          <div className="h-4 w-24 rounded bg-white/20" />
        </div>
        
        {/* Title */}
        <div className="mb-4 h-12 w-1/2 rounded bg-white/20" />
        
        {/* Description */}
        <div className="h-6 w-2/3 rounded bg-white/20" />
      </div>
    </section>
  );
}

// ========================================
// Hero Skeleton
// ========================================

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 pt-32 lg:grid-cols-2">
          {/* Content side */}
          <div className="animate-pulse space-y-6">
            {/* Badge */}
            <div className="h-8 w-48 rounded-full bg-neutral-200" />
            
            {/* Headline */}
            <div className="space-y-3">
              <div className="h-16 w-3/4 rounded bg-neutral-200" />
              <div className="h-16 w-1/2 rounded bg-neutral-200" />
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-5 w-full rounded bg-neutral-200" />
              <div className="h-5 w-5/6 rounded bg-neutral-200" />
            </div>
            
            {/* CTAs */}
            <div className="flex gap-4">
              <div className="h-12 w-40 rounded-full bg-neutral-200" />
              <div className="h-12 w-40 rounded-full bg-neutral-200" />
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 border-t border-neutral-200 pt-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 w-16 rounded bg-neutral-200" />
                  <div className="h-4 w-20 rounded bg-neutral-200" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Image side */}
          <div className="relative h-[500px] animate-pulse">
            <div className="absolute right-0 top-0 h-[70%] w-[85%] rounded-3xl bg-neutral-200" />
            <div className="absolute bottom-0 left-0 h-[45%] w-3/5 rounded-2xl bg-neutral-200" />
            <div className="absolute bottom-20 right-10 h-[30%] w-[35%] rounded-xl bg-neutral-200" />
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
    <div className={cn('animate-pulse space-y-2', className)}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={cn(
            'h-4 rounded bg-neutral-200',
            widthClasses[width],
            i === lines - 1 && 'w-5/6'
          )}
        />
      ))}
    </div>
  );
}

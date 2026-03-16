import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItem {
  Icon?: LucideIcon;
  icon?: React.ReactNode;
  color?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'colored';
}

export default function FeatureGrid({
  features,
  columns = 3,
  variant = 'default',
}: FeatureGridProps) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 ${columnClasses[columns]}`}>
      {features.map((feature, index) => {
        const Icon = feature.Icon;
        return (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-neutral-200 hover:shadow-lg ${
              variant === 'colored' ? '' : ''
            }`}
          >
            {(Icon || feature.icon) && (
              <div
                className={`mb-5 flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  feature.color || 'bg-red-50 text-red-600'
                }`}
              >
                {Icon ? (
                  <Icon className="size-7 text-white" />
                ) : (
                  feature.icon
                )}
              </div>
            )}
            <h3 className="mb-3 text-xl font-bold text-neutral-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

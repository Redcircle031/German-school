import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gray' | 'accent';
  id?: string;
}

export default function ContentSection({
  children,
  className = '',
  variant = 'default',
  id,
}: ContentSectionProps) {
  const variants = {
    default: 'bg-white',
    gray: 'bg-neutral-50',
    accent: 'bg-[#faf8f5]',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${variants[variant]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}

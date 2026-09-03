import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlightedWord,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {label && (
        <div className={`editorial-label ${centered ? 'mx-auto' : ''}`}>
          {label}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.12] mb-5 tracking-tight">
        {title}{' '}
        {highlightedWord && (
          <span className="italic text-[#C5A880] font-normal block sm:inline">
            {highlightedWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#9E9EA6] font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

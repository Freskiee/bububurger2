import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold text-secondary-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-primary-500 w-24 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
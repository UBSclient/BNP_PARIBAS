import React from 'react';

interface IntesaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const IntesaLogo: React.FC<IntesaLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square bg-primary rounded-sm flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized castle/building icon inspired by Intesa Sanpaolo */}
          <rect x="20" y="55" width="12" height="30" fill="white" />
          <rect x="44" y="45" width="12" height="40" fill="white" />
          <rect x="68" y="55" width="12" height="30" fill="white" />
          <rect x="15" y="85" width="70" height="5" fill="white" />
          <polygon points="50,15 20,50 80,50" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-heading font-bold text-foreground ${textSizes[size]}`}>
          intesa sanpaolo
        </span>
      </div>
    </div>
  );
};

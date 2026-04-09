import React from 'react';

interface BNILogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BNILogo: React.FC<BNILogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* BNI Logo Mark - Stylized swirl */}
      <div className={`${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange swirl left */}
          <path d="M50 10C30 10 15 25 15 45C15 60 25 72 40 75C35 65 33 55 38 45C43 35 50 30 60 28C55 18 52 10 50 10Z" fill="hsl(19, 88%, 54%)" />
          {/* Teal swirl right */}
          <path d="M50 90C70 90 85 75 85 55C85 40 75 28 60 25C65 35 67 45 62 55C57 65 50 70 40 72C45 82 48 90 50 90Z" fill="hsl(186, 100%, 21%)" />
        </svg>
      </div>
      <span className={`font-heading font-bold text-foreground ${textSizes[size]} tracking-wide`}>
        BNI
      </span>
    </div>
  );
};

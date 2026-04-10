import React from 'react';

interface BNILogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BNILogo: React.FC<BNILogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 148 33.423"
        className={`${sizeClasses[size]} w-auto`}
      >
        {/* BNI icon - teal shape */}
        <path d="M34.65,40.3,13.141,52.342a.727.727,0,0,0-.331.608v9.344L34.315,50.26a.729.729,0,0,0,.331-.612V40.3Z" transform="translate(-12.81 -28.871)" fill="#007b91"/>
        {/* BNI icon - red accent */}
        <path d="M22.211,28.984a2.461,2.461,0,0,1-3.464-1.13L16.36,22.491a5.559,5.559,0,0,0,4-.65L36.731,12.68v8.177L22.211,28.98Z" transform="translate(-14.891 -12.68)" fill="#f05645"/>
        {/* B */}
        <path d="M96.182,48.311H93.968V41.057h1.97c1.643,0,2.475.439,2.475,1.3s-.6,1.366-1.808,1.419h-.372a.208.208,0,0,0-.157.07l-.385,1.287v.012l-.017.012c-.012.033.054.116.157.161h.137c.079,0,.161,0,.236,0h.472c1.026.033,2.2.228,2.2,1.44,0,.989-.956,1.535-2.694,1.535m2.661-4.051.19-.05c1.382-.36,2.148-1.142,2.148-2.193,0-2.383-3.207-2.648-4.577-2.648H91.2V50.053h5.4a8.416,8.416,0,0,0,3.588-.674,2.512,2.512,0,0,0,1.572-2.342c0-1.486-1.39-2.206-2.69-2.383l-.228-.033a.187.187,0,0,1,0-.368" transform="translate(-58.762 -28.32)" fill="#007b91"/>
        {/* N */}
        <path d="M128.419,47.185l-6.174-7.775H118.79v10.6h2.748v-7.8l6.116,7.8h3.439V39.41h-2.686Z" transform="translate(-74.935 -28.349)" fill="#007b91"/>
        {/* I */}
        <rect width="2.872" height="10.597" transform="translate(57.73 11.061)" fill="#007b91"/>
        {/* FRANCE text */}
        <text x="67" y="21.5" fill="#007b91" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="12.5" fontWeight="800" letterSpacing="1.2" textRendering="geometricPrecision">FRANCE</text>
      </svg>
    </div>
  );
};

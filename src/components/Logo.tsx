import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'emblem' | 'stacked';
  darkMode?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoEmblem: React.FC<{ className?: string; darkMode?: boolean }> = ({ 
  className = "w-10 h-10",
  darkMode = false 
}) => {
  const roadColor = darkMode ? "#38bdf8" : "#0a4b60";
  const planeColor = darkMode ? "#38bdf8" : "#0a4b60";

  return (
    <svg 
      viewBox="0 0 160 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Reeshika Travels Emblem"
    >
      <defs>
        <linearGradient id={`sunGrad-${darkMode ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fba138" />
          <stop offset="60%" stopColor="#f37920" />
          <stop offset="100%" stopColor="#ea5a17" />
        </linearGradient>
      </defs>

      {/* Sun Outer Halo Arc */}
      <path 
        d="M 38 68 A 38 38 0 0 1 114 52" 
        stroke="#e57626" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Rising Sun Disc */}
      <path 
        d="M 46 70 A 30 30 0 0 1 106 50 Z" 
        fill={`url(#sunGrad-${darkMode ? 'dark' : 'light'})`} 
      />

      {/* Highway / Road Curve */}
      <path 
        d="M 16 98 
           C 25 80, 44 67, 72 54 
           C 108 38, 148 26, 162 28
           C 150 34, 115 48, 90 66 
           C 74 78, 75 94, 100 107
           C 72 108, 52 106, 44 105
           Z" 
        fill={roadColor} 
      />

      {/* Road Center Dashed Stripes */}
      <path d="M 40 101 L 48 94 L 56 92 L 47 100 Z" fill="#ffffff" />
      <path d="M 64 83 L 74 76 L 79 75 L 68 83 Z" fill="#ffffff" />
      <path d="M 92 63 L 105 56 L 108 55.5 L 95 63 Z" fill="#ffffff" />
      <path d="M 120 46 L 132 41 L 134 40.5 L 122 46 Z" fill="#ffffff" />

      {/* Airplane Silhouette */}
      <g transform="translate(160, 22) rotate(42)">
        {/* Fuselage */}
        <path 
          d="M 0 -13 C 1.5 -13, 2.5 -9, 2.5 -3 L 2.5 7 L 1 11 L -1 11 L -2.5 7 L -2.5 -3 C -2.5 -9, -1.5 -13, 0 -13 Z" 
          fill={planeColor} 
        />
        {/* Wings */}
        <path 
          d="M 0 -2 L 15 7 L 15 9.5 L 1.5 5.5 L 1.5 8 L -1.5 8 L -1.5 5.5 L -15 9.5 L -15 7 Z" 
          fill={planeColor} 
        />
        {/* Stabilizers */}
        <path 
          d="M 0 7 L 6 11 L 6 12.5 L 0 10.5 L -6 12.5 L -6 11 Z" 
          fill={planeColor} 
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
  darkMode = false,
  size = "md"
}) => {
  if (variant === 'emblem') {
    const emblemSizes = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14'
    };
    return <LogoEmblem className={`${emblemSizes[size]} ${className}`} darkMode={darkMode} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoEmblem className={size === 'lg' ? 'w-24 h-16' : 'w-20 h-14'} darkMode={darkMode} />
        <div className="mt-1 flex items-baseline gap-1.5 font-heading">
          <span className={`font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}>
            Reeshika
          </span>
          <span className={`font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'} ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}>
            Travels
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for Top Bar Navigation & Footer)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem with clean container */}
      <div className={`shrink-0 flex items-center justify-center p-1 rounded-xl ${
        darkMode ? 'bg-slate-800/80 border border-slate-700' : 'bg-amber-50/70 border border-amber-100 shadow-xs'
      }`}>
        <LogoEmblem 
          className={size === 'sm' ? 'w-8 h-6' : size === 'lg' ? 'w-14 h-10' : 'w-11 h-8'} 
          darkMode={darkMode} 
        />
      </div>

      {/* Brand Wordmark and Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-heading font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          } ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
            Reeshika
          </span>
          <span className={`font-heading font-normal ${
            darkMode ? 'text-emerald-400' : 'text-slate-600'
          } ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}>
            Travels
          </span>
        </div>
        <span className={`text-[10px] sm:text-xs font-semibold tracking-widest uppercase mt-0.5 ${
          darkMode ? 'text-slate-400' : 'text-sky-600'
        }`}>
          Family &amp; Outstation Fleet
        </span>
      </div>
    </div>
  );
};

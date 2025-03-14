import React from 'react';

const HeroSvg = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FC6D8E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hero-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="hero-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FC6D8E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D8FF" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="hero-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="300" cy="250" r="200" fill="url(#hero-radial)" />

      {/* Code window */}
      <rect x="150" y="100" width="300" height="250" rx="15" 
        fill="#0F172A" stroke="url(#hero-gradient-3)" strokeWidth="2" />
      
      {/* Window bar */}
      <rect x="150" y="100" width="300" height="30" rx="15" fill="url(#hero-gradient-2)" />
      
      {/* Window controls */}
      <circle cx="170" cy="115" r="5" fill="#FF5F56" />
      <circle cx="190" cy="115" r="5" fill="#FFBD2E" />
      <circle cx="210" cy="115" r="5" fill="#27C93F" />
      
      {/* Code lines */}
      <rect x="170" y="150" width="120" height="6" rx="3" fill="#FC6D8E" opacity="0.8" />
      <rect x="170" y="170" width="180" height="6" rx="3" fill="#6C63FF" opacity="0.8" />
      <rect x="170" y="190" width="160" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
      <rect x="200" y="210" width="140" height="6" rx="3" fill="#00D8FF" opacity="0.8" />
      <rect x="200" y="230" width="100" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
      <rect x="170" y="250" width="180" height="6" rx="3" fill="#6C63FF" opacity="0.8" />
      <rect x="170" y="270" width="120" height="6" rx="3" fill="#FC6D8E" opacity="0.8" />
      <rect x="170" y="290" width="140" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
      
      {/* Floating elements */}
      <circle cx="440" cy="150" r="30" fill="url(#hero-gradient-1)" opacity="0.8" />
      <rect x="420" y="220" width="50" height="50" rx="10" fill="url(#hero-gradient-2)" opacity="0.8" />
      <polygon points="440,310 460,350 420,350" fill="url(#hero-gradient-3)" opacity="0.8" />
      
      <circle cx="120" cy="180" r="20" fill="url(#hero-gradient-2)" opacity="0.8" />
      <rect x="100" y="240" width="40" height="40" rx="8" fill="url(#hero-gradient-1)" opacity="0.8" />
      <polygon points="120,300 140,330 100,330" fill="url(#hero-gradient-3)" opacity="0.8" />
      
      {/* Brackets SVG elements */}
      <path d="M70,200 C50,250 50,150 70,200 M530,200 C550,150 550,250 530,200" 
        stroke="url(#hero-gradient-1)" strokeWidth="3" fill="none" />
      
      {/* Animated code cursor */}
      <rect x="310" y="230" width="2" height="12" fill="#FFFFFF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default HeroSvg;
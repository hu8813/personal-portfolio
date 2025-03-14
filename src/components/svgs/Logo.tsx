import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#FC6D8E" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="25" height="60" rx="4" fill="url(#logo-gradient)" />
      <rect x="55" y="20" width="25" height="25" rx="4" fill="url(#logo-gradient)" />
      <rect x="55" y="55" width="25" height="25" rx="4" fill="url(#logo-gradient)" />
      <path d="M45 50 L70 50" stroke="url(#logo-gradient)" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 30 L55 30" stroke="url(#logo-gradient)" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 70 L55 70" stroke="url(#logo-gradient)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;
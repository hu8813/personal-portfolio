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
      
      {/* Background Circle */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logo-gradient)" strokeWidth="2" />
      
      {/* H Letter */}
      <path 
        d="M25 30 L25 70 M25 50 L40 50 M40 30 L40 70" 
        stroke="url(#logo-gradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none" 
      />
      
      {/* K Letter */}
      <path 
        d="M50 30 L50 70 M50 50 L65 30 M50 50 L65 70" 
        stroke="url(#logo-gradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none" 
      />
      
      {/* A Letter */}
      <path 
        d="M70 70 L77.5 30 L85 70 M72 55 L83 55" 
        stroke="url(#logo-gradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none" 
      />
    </svg>
  );
};

export default Logo;
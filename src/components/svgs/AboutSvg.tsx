import React from 'react';

const AboutSvg = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="about-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FC6D8E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="about-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="1" />
        </linearGradient>
        <clipPath id="person-clip">
          <circle cx="300" cy="180" r="80" />
        </clipPath>
      </defs>

      {/* Background elements */}
      <circle cx="300" cy="250" r="180" fill="#0A1122" />
      <circle cx="300" cy="250" r="150" fill="#0F172A" stroke="#6C63FF" strokeWidth="2" strokeDasharray="10 5" />
      
      {/* Character silhouette */}
      <circle cx="300" cy="180" r="80" fill="#0F172A" stroke="url(#about-gradient-1)" strokeWidth="3" />
      <path
        clipPath="url(#person-clip)"
        d="M300,100 C330,100 350,130 350,160 C350,190 330,220 300,220 C270,220 250,190 250,160 C250,130 270,100 300,100 Z"
        fill="url(#about-gradient-2)"
      />
      <path
        d="M250,210 L350,210 L350,240 C350,280 330,320 300,320 C270,320 250,280 250,240 Z"
        fill="url(#about-gradient-1)"
      />
      
      {/* Thought bubbles */}
      <g>
        <circle cx="420" cy="120" r="30" fill="#0F172A" stroke="url(#about-gradient-2)" strokeWidth="2" />
        <circle cx="460" cy="90" r="18" fill="#0F172A" stroke="url(#about-gradient-2)" strokeWidth="2" />
        <circle cx="480" cy="70" r="10" fill="#0F172A" stroke="url(#about-gradient-2)" strokeWidth="2" />
        
        {/* Thought bubble content */}
        <rect x="410" y="115" width="20" height="10" rx="2" fill="#00D8FF" />
      </g>
      
      {/* Code elements */}
      <g transform="translate(150, 300)">
        <rect x="0" y="0" width="300" height="120" rx="10" fill="#0F172A" stroke="url(#about-gradient-2)" strokeWidth="2" />
        <text x="20" y="30" fontFamily="monospace" fontSize="14" fill="#FC6D8E">function Developer() {'{'}</text>
        <text x="40" y="60" fontFamily="monospace" fontSize="14" fill="#00D8FF">return "Hüseyin Kaya Aydin";</text>
        <text x="20" y="90" fontFamily="monospace" fontSize="14" fill="#FC6D8E">{'}'}</text>
      </g>
      
      {/* Floating shapes */}
      <rect x="120" y="120" width="30" height="30" rx="5" fill="url(#about-gradient-1)" opacity="0.7">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 135 135" 
          to="360 135 135" 
          dur="20s" 
          repeatCount="indefinite"
        />
      </rect>
      
      <circle cx="150" cy="200" r="15" fill="url(#about-gradient-2)" opacity="0.7">
        <animate 
          attributeName="cy" 
          values="200;190;200" 
          dur="4s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      <polygon points="450,200 470,230 430,230" fill="url(#about-gradient-1)" opacity="0.7">
        <animate 
          attributeName="opacity" 
          values="0.7;0.4;0.7" 
          dur="3s" 
          repeatCount="indefinite" 
        />
      </polygon>
    </svg>
  );
};

export default AboutSvg;
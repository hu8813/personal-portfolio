const ContactSvg = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="contact-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FC6D8E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="contact-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Background elements */}
      <circle cx="300" cy="200" r="150" fill="#0A1122" />
      <circle cx="300" cy="200" r="120" fill="#0F172A" />

      {/* Envelope base */}
      <rect x="150" y="120" width="300" height="200" rx="15" fill="#0F172A" stroke="url(#contact-gradient-1)" strokeWidth="2" />
      
      {/* Envelope flap (animated) */}
      <path 
        d="M150,120 L300,200 L450,120" 
        stroke="url(#contact-gradient-1)" 
        strokeWidth="2" 
        fill="none"
      >
        <animate 
          attributeName="d" 
          values="M150,120 L300,200 L450,120; M150,120 L300,160 L450,120; M150,120 L300,200 L450,120" 
          dur="4s" 
          repeatCount="indefinite" 
        />
      </path>
      
      {/* Message content */}
      <rect x="180" y="170" width="240" height="10" rx="5" fill="#6C63FF" opacity="0.7" />
      <rect x="180" y="190" width="200" height="10" rx="5" fill="#FFFFFF" opacity="0.3" />
      <rect x="180" y="210" width="220" height="10" rx="5" fill="#FFFFFF" opacity="0.3" />
      <rect x="180" y="230" width="180" height="10" rx="5" fill="#FFFFFF" opacity="0.3" />
      <rect x="180" y="250" width="130" height="10" rx="5" fill="#00D8FF" opacity="0.7" />
      
      {/* Floating elements */}
      <circle cx="120" cy="150" r="20" fill="url(#contact-gradient-2)" opacity="0.7">
        <animate 
          attributeName="cy" 
          values="150;140;150" 
          dur="3s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      <rect x="100" y="220" width="30" height="30" rx="6" fill="url(#contact-gradient-1)" opacity="0.7" transform="rotate(10)">
        <animate 
          attributeName="transform" 
          values="rotate(0); rotate(10); rotate(0)" 
          attributeType="XML"
          dur="5s" 
          repeatCount="indefinite" 
        />
      </rect>
      
      <polygon points="490,140 510,170 470,170" fill="url(#contact-gradient-1)" opacity="0.7">
        <animate 
          attributeName="opacity" 
          values="0.7;0.4;0.7" 
          dur="4s" 
          repeatCount="indefinite" 
        />
      </polygon>
      
      <circle cx="480" cy="240" r="15" fill="url(#contact-gradient-2)" opacity="0.7">
        <animate 
          attributeName="r" 
          values="15;12;15" 
          dur="3s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      {/* Connection lines */}
      <path 
        d="M480,240 C460,260 440,230 420,260" 
        stroke="url(#contact-gradient-2)" 
        strokeWidth="2" 
        strokeDasharray="5 3"
        fill="none" 
      />
      
      <path 
        d="M120,150 C150,120 180,160 200,120" 
        stroke="url(#contact-gradient-1)" 
        strokeWidth="2" 
        strokeDasharray="5 3"
        fill="none" 
      />
      
      {/* Send button */}
      <rect x="350" y="280" width="70" height="25" rx="12.5" fill="url(#contact-gradient-1)" />
      <text x="365" y="297" fontFamily="sans-serif" fontSize="12" fill="white">SEND</text>
    </svg>
  );
};

export default ContactSvg;
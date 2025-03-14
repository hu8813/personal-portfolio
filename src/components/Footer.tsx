import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import Logo from './svgs/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-bold text-xl font-mono">Hüseyin Kaya Aydin</span>
            </Link>
            <p className="mt-2 text-light/60 max-w-md">
              Junior developer passionate about creating modern, responsive, and user-friendly web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <Link href="#about" className="text-light/60 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-light/60 hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-light/60 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-light/60 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <p className="text-light/40 text-sm">
              &copy; {currentYear} Hüseyin Kaya Aydin. All rights reserved.
            </p>
            
            <p className="text-light/40 text-sm mt-2 flex items-center gap-1">
              Made with <FaHeart className="text-secondary" /> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
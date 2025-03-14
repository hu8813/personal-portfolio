'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './svgs/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-md bg-dark/80' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="font-bold text-xl font-mono">Hüseyin Kaya Aydin</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-light/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://github.com/hu8813" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-darker absolute top-full left-0 w-full py-4 px-4 glass"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-light/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://github.com/hu8813" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
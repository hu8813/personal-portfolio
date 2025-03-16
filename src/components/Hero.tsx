'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSvg from './svgs/HeroSvg';
import { FaArrowUp } from 'react-icons/fa';

const HeroText = () => {
  const roles = ['Developer', 'Problem Solver', 'Creator'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        }, 80);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText === currentRole) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [currentRoleIndex, displayedText, isDeleting, typingSpeed, roles]);

  return (
    <div className="flex">
      <h1 className="text-white mr-2">Junior</h1>
      <h1 className="text-primary">
        {displayedText}
        <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-secondary font-mono mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, my name is
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hüseyin Kaya Aydin
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <HeroText />
            </motion.div>
            
            <motion.p 
              className="text-light/70 mb-8 text-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building modern web experiences with Next.js, React, and cutting-edge technologies. Let's bring your ideas to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <HeroSvg className="w-full max-w-md animate-float" />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, yoyo: Infinity, repeatDelay: 0.5 }}
        >
          <a href="#about" className="flex flex-col items-center text-light/50 hover:text-light">
            <span className="text-sm mb-2">Scroll Up</span>
            <FaArrowUp />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutSvg from './svgs/AboutSvg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    }
  };

  return (
    <section id="about" className="section py-20" ref={ref}>
      <motion.div 
        className="container mx-auto"
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={variants} className="mb-14 text-center">
          <motion.h2 variants={variants} className="mb-4 inline-block text-gradient relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
          </motion.h2>
          <motion.p variants={variants} className="text-light/60 max-w-2xl mx-auto">
            Get to know a bit about who I am and my journey in coding
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={variants} className="order-2 md:order-1">
            <motion.h3 variants={variants} className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Junior Developer with a Passion for Building
            </motion.h3>
            
            <motion.p variants={variants} className="mb-4 text-light/80">
              Hi there! I'm Hüseyin Kaya Aydin, a junior developer dedicated to creating clean, efficient, and user-friendly web applications. My journey in programming began with a curiosity about how websites work, which quickly evolved into a passion for building them myself.
            </motion.p>
            
            <motion.p variants={variants} className="mb-4 text-light/80">
              I'm particularly interested in front-end development and creating intuitive user interfaces. I enjoy the challenge of translating design concepts into functional code and am continuously learning new technologies to improve my skills.
            </motion.p>
            
            <motion.p variants={variants} className="mb-6 text-light/80">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through online courses and programming challenges.
            </motion.p>
            
            <motion.div variants={variants} className="grid grid-cols-2 gap-4 text-sm">
              <div className="glass rounded-lg p-4">
                <h4 className="font-bold mb-2 text-secondary">Education</h4>
                <p>Computer Science, BSc</p>
                <p className="text-xs text-light/50">2019 - 2023</p>
              </div>
              
              <div className="glass rounded-lg p-4">
                <h4 className="font-bold mb-2 text-secondary">Location</h4>
                <p>Based in Istanbul</p>
                <p className="text-xs text-light/50">Open to Remote Work</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={variants} 
            className="order-1 md:order-2 flex justify-center"
          >
            <AboutSvg className="w-full max-w-md" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
"use client";

import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Format phone number for WhatsApp link (remove spaces, parentheses, etc.)
  // const getWhatsAppLink = (phone: string) => {
  //   const formattedPhone = phone.replace(/\s+/g, '').replace(/[()-]/g, '');
  //   return `https://wa.me/${formattedPhone}`;
  // };

  return (
    <section id="about" className="about-section py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile Image - Reduced height */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm aspect-[4/5] mb-8 lg:mb-0"> {/* Reduced height with aspect ratio */}
              {/* Using your actual profile image with modern Next.js Image API */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 relative">
                  <Image 
                    src="/huaydin.jpeg" 
                    alt={personalInfo.name}
                    width={400}
                    height={500}
                    className="rounded-xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-40"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 blur-3xl opacity-30"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {personalInfo.name}
              </h3>
              <p className="text-xl text-gray-300">{personalInfo.nationality}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.about}
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Languages</p>
                    <p className="font-medium">English, Turkish, German</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mt-10">
              <h4 className="text-2xl font-semibold mb-6 text-blue-400">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {personalInfo.skills.slice(0, 8).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Call to Action */}
            <motion.div variants={itemVariants} className="mt-10">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Contact Me
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
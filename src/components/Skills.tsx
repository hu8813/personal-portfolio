"use client";

import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Skill categories for better organization
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "C#"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JS", "PHP"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "from-red-400 to-pink-600"
    },
    {
      title: "Mobile & UI Frameworks",
      skills: ["React", "React Native", "Flutter"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-400 to-indigo-600"
    },
    {
      title: "Design & Creative",
      skills: ["Adobe Photoshop", "Illustrator", "In-Design"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "from-yellow-400 to-orange-600"
    },
    {
      title: "System Administration",
      skills: ["Linux", "Server Admin"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-green-400 to-teal-600"
    },
    {
      title: "Office & Productivity",
      skills: ["MS Office"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-cyan-400 to-blue-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Skill proficiency for visualization (example values)
  const getSkillLevel = (skill: string) => {
    // This is just an example - you might want to add actual proficiency levels to your data
    const levels: {[key: string]: number} = {
      "C": 90,
      "C++": 85,
      "Python": 75,
      "Java": 70,
      "C#": 65,
      "HTML": 95,
      "CSS": 85,
      "JS": 80,
      "PHP": 70,
      "React": 85,
      "React Native": 80,
      "Flutter": 75,
      "Adobe Photoshop": 85,
      "Illustrator": 80,
      "In-Design": 75,
      "Linux": 85,
      "Server Admin": 80,
      "MS Office": 90
    };
    
    return levels[skill] || 70; // Default to 70% if not specified
  };

  return (
    <section id="skills" className="skills-section py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
            My Skills
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technical expertise and competencies I've developed throughout my career
          </p>
        </motion.div>
        
        {/* Skills Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80 border border-gray-700 relative overflow-hidden"
            >
              {/* Background gradient blob */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${category.color} blur-3xl opacity-10`}></div>
              
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} p-0.5 mr-4 flex-shrink-0`}>
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-[6px]">
                    <div className="text-transparent bg-clip-text bg-gradient-to-br ${category.color}">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill}</span>
                      <span className="text-gray-400">{getSkillLevel(skill)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <motion.div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${getSkillLevel(skill)}%` }}
                        transition={{ duration: 1, delay: 0.3 + (idx * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
         
        
        {/* Additional qualifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">Additional Qualifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInfo.additionalQualifications.map((qualification, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-80 border border-gray-700"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 mt-1">
                    {index === 0 ? (
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-300">{qualification}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            See My Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiGithub, SiVercel } from 'react-icons/si';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <div className="glass rounded-xl p-6 h-full flex flex-col">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="list-disc list-inside text-light/70 space-y-2 mt-auto">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skills = [
    {
      icon: <FaReact className="animate-spin-slow" />,
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "HTML5 & CSS3",
        "Responsive Design",
        "Tailwind CSS"
      ]
    },
    {
      icon: <FaNodeJs />,
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication",
        "Server-side Rendering",
        "API Integration"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "SQL Basics",
        "Data Modeling",
        "Mongoose",
        "Prisma ORM"
      ]
    },
    {
      icon: <FaTools />,
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "VS Code",
        "npm/yarn",
        "Vercel Deployment",
        "Jest Testing",
        "UI/UX Principles"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-dark/50 py-20" ref={ref}>
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <h2 className="mb-4 inline-block text-gradient relative">
            Skills & Technologies
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto">
            The technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard 
                icon={skill.icon} 
                title={skill.title} 
                skills={skill.skills} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="glass rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-8 text-4xl">
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="Next.js"
              >
                <SiNextdotjs />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="React"
              >
                <FaReact />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="TypeScript"
              >
                <SiTypescript />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="Tailwind CSS"
              >
                <SiTailwindcss />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="MongoDB"
              >
                <SiMongodb />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="GitHub"
              >
                <SiGithub />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                className="text-primary hover:text-accent transition-colors duration-300"
                title="Vercel"
              >
                <SiVercel />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  featured: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="glass rounded-xl overflow-hidden flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="h-48 overflow-hidden relative">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-light/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary/20 text-primary px-2 py-1 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light/80 hover:text-primary flex items-center gap-2 transition-colors"
          >
            <FaGithub /> Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light/80 hover:text-accent flex items-center gap-2 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projects: Project[] = [
    {
      title: "Crypto Dashboard",
      description: "A real-time cryptocurrency dashboard with price tracking, portfolio management, and market trends visualization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
      github: "https://github.com/hu8813/crypto-dashboard",
      demo: "https://crypto-dashboard-demo.vercel.app",
      image: "/project-1.svg",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with user authentication, task categories, and deadline reminders.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/hu8813/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      image: "/project-2.svg",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "A responsive e-commerce website with product listings, user accounts, shopping cart, and payment integration.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "https://github.com/hu8813/ecommerce-platform",
      image: "/project-3.svg",
      featured: false
    },
    {
      title: "Weather Application",
      description: "A weather forecast app with location detection, daily and hourly forecasts, and interactive maps.",
      technologies: ["React", "APIs", "Styled Components"],
      github: "https://github.com/hu8813/weather-app",
      demo: "https://weather-app-demo.vercel.app",
      image: "/project-4.svg",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'featured'
      ? projects.filter(project => project.featured)
      : projects;

  return (
    <section id="projects" className="section py-20" ref={ref}>
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <h2 className="mb-4 inline-block text-gradient relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center mb-10">
          <div className="glass rounded-full inline-flex p-1">
            <button 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'all' ? 'bg-primary text-white' : 'text-light/70 hover:text-light'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'featured' ? 'bg-primary text-white' : 'text-light/70 hover:text-light'
              }`}
              onClick={() => setActiveFilter('featured')}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a 
            href="https://github.com/hu8813" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
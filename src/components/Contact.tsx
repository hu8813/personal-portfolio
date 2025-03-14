'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactSvg from './svgs/ContactSvg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real app, you would send the data to your backend
      // For now, we'll just simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-dark/50 py-20" ref={ref}>
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <h2 className="mb-4 inline-block text-gradient relative">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <ContactSvg className="max-w-md mx-auto" />
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 text-light/70 hover:text-primary transition-colors">
                <FaEnvelope className="text-primary text-xl" />
                <a href="mailto:contact@kayaaydin.com">contact@kayaaydin.com</a>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Connect With Me</h3>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/hu8813" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass h-12 w-12 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://linkedin.com/in/kayaaydin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass h-12 w-12 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com/kayaaydin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass h-12 w-12 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-500/20 text-red-400 rounded-lg text-center">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
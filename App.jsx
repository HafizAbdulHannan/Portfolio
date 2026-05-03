// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

// Components Imports
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Contact from './Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const projectsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 antialiased font-sans overflow-x-hidden">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3 md:py-4 shadow-lg' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          <a href="#hero" className="text-xl md:text-2xl font-tech font-bold tracking-tighter text-zinc-100 hover:text-teal-400 transition-colors z-50">
            Hafiz Abdul Hannan<span className="text-teal-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-tech font-medium text-zinc-400 hover:text-teal-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://github.com/HafizAbdulHannan" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-zinc-950 font-tech font-semibold rounded-lg transition-all duration-300 text-sm">
              GitHub Profile
            </a>
          </div>

          <button className="md:hidden text-zinc-400 hover:text-teal-400 transition-colors z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden fixed top-0 left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 pt-24 pb-8 flex flex-col items-center gap-8 overflow-hidden z-40"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-tech font-medium text-zinc-300 hover:text-teal-400 transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="https://github.com/HafizAbdulHannan" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-zinc-950 font-tech font-semibold rounded-lg transition-all duration-300 text-lg">
                View GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden border-b border-zinc-800 pt-20 md:pt-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          className="max-w-4xl w-full z-10 text-center md:text-left mt-10 md:mt-20"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={heroItemVariants} className="text-teal-400 font-tech tracking-wider mb-3 md:mb-4 text-sm md:text-base">
            Hi, my name is
          </motion.p>
          
          <motion.h1 variants={heroItemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-tech font-bold text-zinc-100 mb-4 md:mb-6 tracking-tight">
            Hafiz Abdul Hannan.
          </motion.h1>
          
          <motion.h2 variants={heroItemVariants} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-tech font-bold text-zinc-500 mb-6 md:mb-8 leading-tight">
            I build advanced, <span className='text-zinc-300 block sm:inline'>performance-driven</span> digital solutions.
          </motion.h2>
          
          <motion.p variants={heroItemVariants} className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0">
            Software developer specialized in React, React Native (Expo), and architecting robust API integrations for web and mobile applications. 
          </motion.p>

          {/* RESPONSIVE BUTTONS: Stack on mobile, row on desktop */}
          <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 sm:gap-6">
            <a 
              href="https://github.com/HafizAbdulHannan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 md:py-3 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-semibold rounded-lg transition-colors duration-300 text-base md:text-lg shadow-lg shadow-teal-950/40 text-center"
            >
              View My Work
            </a>
            
            <div className="flex items-center gap-4 text-zinc-400 mt-2 sm:mt-0">
              <a href="https://github.com/HafizAbdulHannan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300 p-2.5 md:p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/50 md:border-transparent">
                <FaGithub size={22} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300 p-2.5 md:p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/50 md:border-transparent">
                <FaLinkedin size={22} className="md:w-6 md:h-6" />
              </a>
              <a href="#contact" className="hover:text-teal-400 transition-colors duration-300 p-2.5 md:p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/50 md:border-transparent">
                <Mail size={22} className="md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 md:gap-6 mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold text-zinc-100 tracking-tight whitespace-nowrap">
              Featured Work
            </h2>
            <div className="h-px bg-zinc-800 w-full" /> 
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
            variants={projectsGridVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
          >
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                variants={projectItemVariants} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <Experience />

      {/* 5. EDUCATION SECTION */}
      <Education />

      {/* 6. CONTACT SECTION */}
      <Contact />

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-500 text-xs md:text-sm border-t border-zinc-800/50 px-4">
        <p>Designed and Built by Hafiz Abdul Hannan &copy; {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}

export default App;
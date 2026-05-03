// src/ProjectCard.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
// Github ko lucide-react se nikal dein, sirf ExternalLink rehne dein
import { ExternalLink } from 'lucide-react';
// React Icons se FaGithub import karein
import { FaGithub } from 'react-icons/fa'; 

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="h-full"
    >
      <Tilt
        className="relative h-full bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl overflow-hidden group shadow-xl hover:shadow-cyan-950/30 transition-all duration-300 ease-out will-change-transform"
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#99f6e4"
        glareBorderRadius="1.5rem"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.03}
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`} />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h3 className="text-2xl font-tech font-bold text-zinc-100 mb-3 tracking-tight">
              {project.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {project.tech.map((skill) => (
                <span key={skill} className="px-4 py-1.5 bg-zinc-800 text-teal-300 text-xs font-mono rounded-full border border-zinc-700/50">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-3 border-t border-zinc-800/80">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-teal-400 transition-colors duration-300">
                {/* Yahan FaGithub use karein */}
                <FaGithub size={21} />
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-teal-400 transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium">
                Live Demo <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
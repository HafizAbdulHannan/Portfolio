// src/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from './experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-zinc-100 tracking-tight whitespace-nowrap">
            Experience
          </h2>
          <div className="h-px bg-zinc-800 w-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-3 md:ml-6">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-zinc-100 font-tech">
                  {item.title}
                </h3>
                <span className="text-teal-400 font-mono text-sm mt-1 md:mt-0 bg-teal-950/30 px-3 py-1 rounded-full border border-teal-900/50 inline-block w-fit">
                  {item.date}
                </span>
              </div>
              
              <h4 className="text-lg text-zinc-300 font-medium mb-3">
                {item.organization}
              </h4>
              
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
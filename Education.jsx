// src/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BS Computer Science (BSCS)",
      institution: "University of Central Punjab, Lahore",
      date: "2022 - Present",
      description: "Focusing on advanced software engineering principles, modern web and mobile application development, and practical problem-solving through projects like TourEase."
    },
    {
      id: 2,
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Punjab Group of Colleges, Sheikhupura",
      date: "2020 - 2022",
      description: "Built a solid academic foundation in computer science, mathematics, and physics, sparking a deep interest in programming."
    },
    {
      id: 3,
      degree: "Matriculation (Computer Science)",
      institution: "Horizon School System, Sheikhupura",
      date: "2018 - 2020",
      description: "Started the journey into the world of technology with core computer science and fundamental science subjects."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-zinc-100 tracking-tight whitespace-nowrap flex items-center gap-4">
            <GraduationCap size={40} className="text-indigo-400" />
            Education
          </h2>
          <div className="h-px bg-zinc-800 w-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8">
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Dot (Indigo Theme) */}
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-zinc-100 font-tech">
                  {item.degree}
                </h3>
                <span className="text-indigo-400 font-mono text-sm mt-1 md:mt-0 bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-900/50 inline-block w-fit">
                  {item.date}
                </span>
              </div>
              
              <h4 className="text-lg text-zinc-300 font-medium mb-3">
                {item.institution}
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

export default Education;
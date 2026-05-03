// src/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Wrench, Brain } from 'lucide-react';

const About = () => {
  // Categorized Skills Data
  const coreTech = [ 
    "React.js", "React Native", "C/C++", "HTML5", 
    "CSS3", "Tailwind CSS", "Python (Basic)", 
    "Vite", "Git & GitHub", "REST APIs" 
  ];
  
  const tools = [ 
    "VS Code", "MySQL", "Wireshark", "Cisco Packet Tracer", 
    "MS Word", "PowerPoint" 
  ];
  
  const softSkills = [ 
    "Problem Solving", "Quick Learner", "Communication", 
    "Team Work", "Problem Understanding" 
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left Column: About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-tech font-bold text-zinc-100 tracking-tight">
                About Me
              </h2>
              <div className="h-px bg-zinc-800 flex-grow" />
            </div>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed text-justify md:text-left">
              <p>
                I am an emerging software developer originally from Sheikhupura, currently based in Lahore. As I progress through my BS in Computer Science at the University of Central Punjab, my focus is entirely on building scalable, performance-driven applications.
              </p>
              <p>
                I have a deep passion for coding and the architecture behind modern web and mobile platforms. I truly thrive when collaborating with experienced professionals and forward-thinking companies. 
              </p>
              <p>
                For me, the ultimate career boost isn't just about writing code—it's about the continuous journey of learning something new, tackling complex problems, and refining my craft alongside industry experts.
              </p>
            </div>
            
            {/* Highlights / Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400">
                  <Terminal size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-bold font-tech text-lg">Clean Code</h4>
                  <p className="text-sm text-zinc-500">Optimized & Scalable</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-zinc-800"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-bold font-tech text-lg">Fast Learner</h4>
                  <p className="text-sm text-zinc-500">Adaptable to new tech</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow Behind Image */}
            <div className="absolute inset-0 bg-teal-500/20 blur-[80px] rounded-full w-3/4 h-3/4 m-auto pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative w-full max-w-sm md:max-w-md rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-transparent shadow-2xl">
              <img 
                src="/profile.png" 
                alt="Abdul Hannan" 
                className="w-full h-auto object-cover object-bottom hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Skills Grid (3 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Category 1: Core Tech */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 shadow-xl hover:border-teal-900/50 transition-colors flex flex-col items-center text-center">
            <h3 className="text-xl font-tech font-bold text-zinc-100 mb-6 flex flex-col items-center gap-3">
              <span className="p-3 bg-zinc-950 rounded-full border border-zinc-800">
                <Code2 size={24} className="text-teal-400" />
              </span>
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {coreTech.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-teal-300 font-mono text-sm rounded-xl shadow-md cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Category 2: Tools & Platforms */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 shadow-xl hover:border-blue-900/50 transition-colors flex flex-col items-center text-center">
            <h3 className="text-xl font-tech font-bold text-zinc-100 mb-6 flex flex-col items-center gap-3">
              <span className="p-3 bg-zinc-950 rounded-full border border-zinc-800">
                <Wrench size={24} className="text-blue-400" />
              </span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {tools.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-blue-300 font-mono text-sm rounded-xl shadow-md cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Category 3: Soft Skills */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 shadow-xl hover:border-purple-900/50 transition-colors flex flex-col items-center text-center">
            <h3 className="text-xl font-tech font-bold text-zinc-100 mb-6 flex flex-col items-center gap-3">
              <span className="p-3 bg-zinc-950 rounded-full border border-zinc-800">
                <Brain size={24} className="text-purple-400" />
              </span>
              Professional Traits
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {softSkills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-purple-300 font-mono text-sm rounded-xl shadow-md cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
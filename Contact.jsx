// src/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // YAHAN APNA FORMSPREE ENDPOINT URL PASTE KAREIN
      const response = await fetch("https://formspree.io/f/mqenewno", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-zinc-100 tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-tech font-bold text-zinc-100 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-teal-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium mb-0.5">Email</p>
                  <a href="mailto:hannanitx@gmail.com" className="hover:text-teal-400 transition-colors">hannanitx@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-teal-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium mb-0.5">Phone</p>
                  {/* Apna number yahan update karein */}
                  <a href="tel:+923324071639" className="hover:text-teal-400 transition-colors">+92 332 4071639</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-teal-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium mb-0.5">Location</p>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-tech font-bold text-zinc-100 mb-6">Social Profiles</h3>
            <div className="flex gap-4">
              <a href="https://github.com/HafizAbdulHannan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300">
                <FaGithub size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/80 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : status === 'success' ? (
                <span>Message Sent Successfully!</span>
              ) : status === 'error' ? (
                <span className="text-red-900">Failed to send. Try again.</span>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
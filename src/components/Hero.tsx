'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Typewriter from './ui/Typewriter';
import ParticleBackground from './ui/ParticleBackground';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      <ParticleBackground />
      
      <div className="grain-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-cyan font-mono text-sm md:text-base mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-12 md:h-16 mb-6"
          >
            <Typewriter texts={personalInfo.taglines} />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              className="px-8 py-4 bg-cyan text-navy font-bold rounded-lg text-lg transition-all duration-300 hover:bg-cyan-light flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={20} />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-violet text-violet font-bold rounded-lg text-lg transition-all duration-300 hover:bg-violet hover:text-white flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-cyan" size={32} />
      </motion.div>
    </section>
  );
}

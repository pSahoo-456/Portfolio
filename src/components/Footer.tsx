'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 bg-navy-light border-t border-gray-800">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-cyan font-bold">{personalInfo.name}</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 font-mono">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 bg-navy rounded-lg border border-gray-800 text-gray-400 hover:text-cyan hover:border-cyan/50 transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 bg-navy rounded-lg border border-gray-800 text-gray-400 hover:text-cyan hover:border-cyan/50 transition-all duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 bg-navy rounded-lg border border-gray-800 text-gray-400 hover:text-cyan hover:border-cyan/50 transition-all duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional journey through leading research institutions and industry
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan via-violet to-cyan hidden md:block" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
                    className="p-6 bg-navy rounded-xl border border-gray-800 card-glow hover:border-cyan/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-cyan" size={24} />
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <p className="text-cyan font-mono text-sm mb-2">{exp.company}</p>
                    <p className="text-violet font-mono text-xs mb-4">{exp.period}</p>
                    <p className="text-gray-300 text-body">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan rounded-full border-4 border-navy-light animate-pulse-slow" />
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

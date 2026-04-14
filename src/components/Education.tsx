'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Education</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0, 212, 255, 0.4)' }}
              className="p-6 bg-navy-light rounded-xl border border-gray-800 card-glow hover:border-cyan/50 transition-all duration-300"
            >
              <GraduationCap className="text-cyan mb-4" size={40} />
              <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-cyan font-mono text-sm mb-2">{edu.institution}</p>
              <p className="text-violet font-mono text-xs mb-3">{edu.period}</p>
              <div className="px-4 py-2 bg-cyan/10 rounded-lg inline-block">
                <span className="text-cyan font-bold">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

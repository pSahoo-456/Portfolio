'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experience } from '@/data/portfolio';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-secondary gradient-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional journey through leading research institutions and industry
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan via-violet to-cyan rounded-full hidden sm:block" />
          
          {/* Timeline glow effect */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-3 bg-cyan/20 blur-xl rounded-full hidden sm:block" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } gap-8 items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-16 h-16 rounded-full bg-navy-light border-4 border-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'sm:pr-24' : 'sm:pl-24'} pl-20 sm:pl-0`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)',
                      y: -5
                    }}
                    className="group p-8 bg-navy/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan/50 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-violet to-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                            className="flex items-center gap-2 text-cyan font-mono text-sm mb-2"
                          >
                            <Briefcase size={16} />
                            <span className="font-bold">{exp.role}</span>
                          </motion.div>
                          
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                            {exp.company}
                          </h3>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-violet font-mono text-sm mb-4">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-body leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech stack badge */}
                      <div className="mt-4 pt-4 border-t border-gray-800/50">
                        <div className="flex flex-wrap gap-2">
                          {exp.role.includes("AI/ML") && (
                            <>
                              <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-xs font-mono border border-cyan/30">
                                AI/ML
                              </span>
                              <span className="px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono border border-violet/30">
                                Deep Learning
                              </span>
                            </>
                          )}
                          {exp.role.includes("Java") && (
                            <span className="px-3 py-1 bg-orange/10 text-orange-400 rounded-full text-xs font-mono border border-orange/30">
                              Java Development
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

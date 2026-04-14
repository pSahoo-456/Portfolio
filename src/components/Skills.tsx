'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in AI/ML development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              variants={item}
              custom={categoryIndex}
              className="p-6 bg-navy-light rounded-xl border border-gray-800 card-glow hover:border-cyan/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan mb-4 font-mono">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-navy-lighter text-gray-300 rounded-full text-sm font-mono border border-gray-700 hover:border-cyan hover:text-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

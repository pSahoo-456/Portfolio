'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-navy-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Achievements & Awards</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition through hackathons, publications, and certifications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 25px rgba(0, 212, 255, 0.5)' }}
              className="p-6 bg-navy rounded-xl border border-gray-800 card-glow hover:border-cyan/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-sm font-mono">{achievement.organization}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Code2, Brain, Database, Globe, Server, Cloud, Layers, Terminal } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Languages": Terminal,
  "ML/AI": Brain,
  "LLM & Agentic AI": Layers,
  "Cloud & Tools": Cloud,
  "Database": Server,
};

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
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const floatingSkills = [
  { name: "Python", x: 5, y: 10, delay: 0 },
  { name: "PyTorch", x: 85, y: 15, delay: 0.5 },
  { name: "LangChain", x: 10, y: 75, delay: 1 },
  { name: "TensorFlow", x: 80, y: 70, delay: 1.5 },
  { name: "Llama 3", x: 50, y: 5, delay: 2 },
  { name: "RAG", x: 90, y: 45, delay: 2.5 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy relative overflow-hidden">
      {/* Floating Background Skills */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingSkills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: skill.delay,
              ease: "easeInOut"
            }}
            className="absolute text-6xl md:text-8xl font-bold text-cyan/5 select-none"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>

      <div className="container-max relative z-10">
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
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category] || Code2;
            return (
              <motion.div
                key={category}
                variants={item}
                custom={categoryIndex}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)'
                }}
                className="group p-6 bg-navy-light/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center mb-4 group-hover:from-cyan/30 group-hover:to-violet/30 transition-all duration-300"
                >
                  <IconComponent className="text-cyan group-hover:text-cyan-light transition-colors" size={24} />
                </motion.div>

                {/* Category Title */}
                <h3 className="relative z-10 text-lg font-bold text-white mb-4 font-mono group-hover:text-cyan transition-colors">
                  {category}
                </h3>

                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -3,
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
                        backgroundColor: 'rgba(0, 212, 255, 0.2)'
                      }}
                      className="px-3 py-1.5 bg-navy-lighter/80 text-gray-300 rounded-lg text-xs font-mono border border-gray-700/50 hover:border-cyan hover:text-cyan transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

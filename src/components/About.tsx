'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedCounter from './ui/AnimatedCounter';
import { personalInfo, stats, languages } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.5)',
                    '0 0 40px rgba(0, 212, 255, 0.8)',
                    '0 0 20px rgba(0, 212, 255, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan to-violet p-1"
              >
                <div className="w-full h-full rounded-full bg-navy-light overflow-hidden">
                  <Image 
                    src="/Passportphoto.png" 
                    alt="Prakash Sahoo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Who am I?
            </h3>
            <p className="text-body text-gray-300 mb-6 leading-relaxed">
              I'm currently pursuing a Bachelor of Technology at GIFT Autonomous, Bhubaneswar. 
              A dedicated researcher and engineer, he has completed prestigious research and technical internships 
              at the National Institute of Technology (NIT), Rourkela, and the Integrated Test Range, DRDO. 
              His current technical focus lies in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), 
              and Deep Learning, having already authored a published research paper in IEEE Xplore regarding 
              advanced facial emotion recognition.
            </p>
            <p className="text-body text-gray-300 mb-6 leading-relaxed">
              Beyond My research,i'm  deeply invested in coding and software development, specializing in 
              building scalable, intelligent systems.  i'm
              three-time National Level Hackathon Champion, securing top honors at major events. His academic 
              excellence is further underscored by multiple professional recognitions, including NPTEL Silver 
              Badges in Machine Learning, Cloud Computing, and Data Structures and Algorithms from IIT Madras 
              and IIT Kharagpur.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-cyan font-mono">Languages</h4>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-navy-lighter rounded-lg border border-cyan/20"
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-sm font-mono">{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

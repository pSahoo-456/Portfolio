'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/portfolio';
import { ExternalLink, Award, Trophy, FileText, Medal } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

const getIcon = (type: string) => {
  switch (type) {
    case 'publication':
      return FileText;
    case 'hackathon':
      return Trophy;
    default:
      return Award;
  }
};

const getGradient = (type: string) => {
  switch (type) {
    case 'publication':
      return 'from-cyan to-blue-500';
    case 'hackathon':
      return 'from-yellow-400 to-orange-500';
    default:
      return 'from-cyan to-violet';
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
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
            Recognition through hackathons, research publications, and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.type);
            const gradient = getGradient(achievement.type);
            const hasLink = achievement.link && achievement.link.trim() !== '';
            
            const CardContent = (
              <motion.div
                variants={item}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)'
                }}
                className={`group relative p-8 bg-navy/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan/50 transition-all duration-300 overflow-hidden ${
                  hasLink ? 'cursor-pointer' : ''
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors leading-tight">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm font-mono text-violet mb-4">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Link indicator */}
                  {hasLink && (
                    <div className="flex items-center gap-2 text-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </div>
                  )}
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl ${gradient} opacity-5 rounded-full blur-xl`} />
              </motion.div>
            );

            return hasLink ? (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Award, Calendar, Building2, ChevronRight } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding bg-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Certifications & Courses</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications from IITs, NPTEL, IBM, and leading institutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, y: -8, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
              onClick={() => setSelectedCert(index)}
              className="group relative p-6 bg-navy-light/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 cursor-pointer hover:border-cyan/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan to-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center group-hover:from-cyan/30 group-hover:to-violet/30 transition-all duration-300">
                    <Award className="text-cyan" size={24} />
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-cyan transition-colors" size={18} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="text-violet flex-shrink-0" size={14} />
                  <p className="text-cyan font-mono text-xs">{cert.issuer}</p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="text-gray-500 flex-shrink-0" size={14} />
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>

                {/* View certificate button */}
                <div className="mt-4 pt-4 border-t border-gray-800/50">
                  <div className="flex items-center gap-2 text-cyan text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Certificate</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl from-cyan/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-light border border-cyan/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(0,212,255,0.3)]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center flex-shrink-0">
                    <Award className="text-cyan" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {certifications[selectedCert].title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan font-mono text-sm">
                      <Building2 size={16} />
                      <span>{certifications[selectedCert].issuer}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-cyan transition-colors p-2 hover:bg-navy-lighter rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Details */}
              <div className="mb-8 p-6 bg-navy/50 rounded-xl border border-gray-800/50">
                <div className="flex items-center gap-2 mb-2 text-gray-300">
                  <Calendar className="text-violet" size={18} />
                  <span className="font-mono text-sm">Issued: {certifications[selectedCert].date}</span>
                </div>
              </div>

              {/* Action button */}
              <a
                href={certifications[selectedCert].certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan to-violet text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                View Certificate PDF
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

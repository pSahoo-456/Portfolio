'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mic } from 'lucide-react';
import { seminars } from '@/data/portfolio';

export default function Seminars() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-navy-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Seminars & Talks</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-navy-lighter transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Mic className="text-cyan flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white">{seminar.title}</h3>
                    <p className="text-violet font-mono text-sm">{seminar.venue}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-cyan" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-300 text-body border-t border-gray-800 pt-4">
                      {seminar.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

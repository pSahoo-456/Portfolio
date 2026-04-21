'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions spanning RAG systems, deep learning, and environmental AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              onClick={() => setSelectedProject(index)}
              className="bg-navy-light rounded-xl border border-gray-800 cursor-pointer card-glow hover:border-cyan/50 transition-all duration-300 overflow-hidden group"
            >
              {project.thumbnail && (
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent opacity-60" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">{project.title}</h3>
                  {project.ieee && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/50">
                      IEEE Published ⭐
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-body mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-xs font-mono border border-cyan/30"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-navy-lighter text-gray-400 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-violet/20 text-violet rounded-lg text-sm font-mono border border-violet/40 hover:bg-violet/30 hover:border-violet/60 transition-all duration-300 mt-4"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-light border border-cyan/30 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto card-glow"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">
                  {projects[selectedProject].title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {projects[selectedProject].ieee && (
                <div className="mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg inline-block">
                  <span className="text-yellow-400 font-bold">⭐ IEEE Xplore Published</span>
                </div>
              )}

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-cyan mb-3 font-mono">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-navy-lighter text-gray-300 rounded-lg text-sm font-mono border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-cyan mb-3 font-mono">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-2 bg-cyan/10 text-cyan rounded-lg text-sm font-mono border border-cyan/30"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


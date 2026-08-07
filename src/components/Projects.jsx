import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { portfolioData } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  BarChart3, 
  X, 
  Maximize2,
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const TiltCard = ({ children, className }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02
      });
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            RESUME PROJECT HIGHLIGHTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Data Analytics, Power BI Dashboards, SQL Database Management, and Computer Vision.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className={`glass-card rounded-2xl border ${project.featured ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-slate-800/80'} overflow-hidden flex flex-col h-full group hover:border-cyan-500/50 transition-colors`}>
                
                {/* Project Image Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-black/20 to-transparent opacity-90" />

                  {/* Quick Expand Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-2 rounded-xl glass-card text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-cyan-400"
                    title="View Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Date Pill & Tech Summary */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] backdrop-blur-md flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {project.subtitle}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-[11px] font-mono text-cyan-400 mb-3">
                      {project.technologiesSummary}
                    </div>

                    {/* Bullet Points from Resume */}
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-2xl border border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    {selectedProject.technologiesSummary}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedProject.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <ul className="space-y-2.5 mb-6">
                  {selectedProject.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center text-sm flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center text-sm flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

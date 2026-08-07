import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2, Code, Database, BarChart2, Smile, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  const { certifications } = portfolioData;

  const iconMap = {
    Code: <Code className="w-6 h-6 text-cyan-400" />,
    BarChart2: <BarChart2 className="w-6 h-6 text-blue-400" />,
    Database: <Database className="w-6 h-6 text-purple-400" />,
    Award: <Award className="w-6 h-6 text-yellow-400" />,
    Smile: <Smile className="w-6 h-6 text-green-400" />
  };

  return (
    <section id="certifications" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            VALIDATED SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                    {iconMap[cert.icon] || <Award className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[10px]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs font-medium mb-4">{cert.issuer}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Credential Verified
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  BookOpen,
  Globe,
  Heart
} from 'lucide-react';

export const About = () => {
  const { aboutSummary, highlights, profileImage, name, spokenLanguages, hobbies } = portfolioData.personalInfo;
  const { coursework } = portfolioData;

  const iconMap = [
    <BarChart3 className="w-6 h-6 text-cyan-400" />,
    <Database className="w-6 h-6 text-blue-400" />,
    <TrendingUp className="w-6 h-6 text-indigo-400" />,
    <Brain className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            BACKGROUND & COURSEWORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Compact Personal Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-52 sm:w-60 aspect-[3/4] rounded-2xl p-1 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-slate-800 border border-cyan-500/30 shadow-xl">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 font-mono text-[11px] shadow-lg whitespace-nowrap">
                Kiran K R • Chikkamagaluru & Bengaluru
              </div>
            </div>
          </motion.div>

          {/* Summary & Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card rounded-2xl p-8 border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              Professional Overview
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              {aboutSummary}
            </p>

            {/* Relevant Coursework Badges */}
            <div className="mb-6 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-cyan-400 uppercase mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, cIdx) => (
                  <span key={cIdx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" /> Languages Known
                </h4>
                <div className="text-xs font-medium text-slate-200">
                  {spokenLanguages.join(', ')}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-pink-400" /> Hobbies & Interests
                </h4>
                <div className="text-xs font-medium text-slate-200">
                  {hobbies.join(' • ')}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-4 border border-slate-700">
                {iconMap[index]}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

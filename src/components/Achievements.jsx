import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Trophy, FolderGit2, Award, Cpu, Code2 } from 'lucide-react';

export const Achievements = () => {
  const { stats } = portfolioData;

  const iconMap = [
    <FolderGit2 className="w-8 h-8 text-cyan-400" />,
    <Award className="w-8 h-8 text-blue-400" />,
    <Cpu className="w-8 h-8 text-indigo-400" />,
    <Code2 className="w-8 h-8 text-purple-400" />
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6 sm:pt-0 sm:px-4 flex flex-col items-center justify-center first:pt-0"
              >
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-4 shadow-lg">
                  {iconMap[index]}
                </div>
                
                <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2">
                  <CountUp
                    end={stat.count}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

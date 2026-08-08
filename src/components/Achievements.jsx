import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FolderGit2, Award, GraduationCap, Briefcase } from 'lucide-react';

export const Achievements = () => {
  const { stats } = portfolioData;

  const iconMap = [
    <FolderGit2 className="w-6 h-6 text-cyan-400" />,
    <Briefcase className="w-6 h-6 text-blue-400" />,
    <Award className="w-6 h-6 text-indigo-400" />,
    <GraduationCap className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden bg-slate-900/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center justify-center first:pt-0"
              >
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 mb-3">
                  {iconMap[index]}
                </div>
                
                <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1">
                  <CountUp
                    end={stat.count}
                    decimals={stat.count % 1 !== 0 ? 2 : 0}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
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

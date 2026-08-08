import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FolderGit2, Award, GraduationCap, Briefcase, Trophy, Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export const Achievements = () => {
  const { stats, achievementsList } = portfolioData;

  const iconMap = [
    <FolderGit2 className="w-6 h-6 text-cyan-400" />,
    <Briefcase className="w-6 h-6 text-blue-400" />,
    <Award className="w-6 h-6 text-indigo-400" />,
    <GraduationCap className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            RECOGNITIONS & METRICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Real Stats Counter */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden bg-slate-900/80 mb-16">
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

        {/* Major Achievements Showcase Card */}
        {achievementsList && achievementsList.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Honors & Event Highlights
            </h3>

            {achievementsList.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Text Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        {item.recognition}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.date}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                    <div className="text-cyan-400 font-semibold text-sm">{item.organization}</div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.achievement}
                    </p>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {/* Location & Team Members */}
                    <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span><strong>Event Location:</strong> {item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span><strong>Team Members:</strong> {item.teamMembers.join(', ')}</span>
                      </div>
                    </div>

                    {/* Technology Focus Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Certificate Preview Image */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 shadow-xl group">
                      <img
                        src={item.certificateImage}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-slate-700 text-[10px] font-mono text-cyan-300">
                        Official Certificate
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

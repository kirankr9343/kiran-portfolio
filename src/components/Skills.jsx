import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Server, 
  Wrench, 
  Sparkles,
  CheckCircle,
  FileCode2,
  Table,
  Filter,
  PieChart,
  TrendingUp,
  Briefcase,
  GitBranch,
  Github,
  Terminal,
  Laptop
} from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const { analytics, languages, database, tools, coreSkills } = portfolioData.skills;

  const categories = [
    { id: 'analytics', name: 'Data Analysis & Viz', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'languages', name: 'Languages & SQL', icon: <Code2 className="w-4 h-4" /> },
    { id: 'database', name: 'Database Management', icon: <Server className="w-4 h-4" /> },
    { id: 'tools', name: 'Developer & Analytics Tools', icon: <Wrench className="w-4 h-4" /> },
    { id: 'all', name: 'All Technical Skills', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const iconComponentMap = {
    BarChart3: <BarChart3 className="w-5 h-5 text-cyan-400" />,
    Table: <Table className="w-5 h-5 text-emerald-400" />,
    Filter: <Filter className="w-5 h-5 text-yellow-400" />,
    PieChart: <PieChart className="w-5 h-5 text-purple-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-blue-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-indigo-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Database: <Database className="w-5 h-5 text-blue-400" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-purple-400" />,
    Server: <Server className="w-5 h-5 text-cyan-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
    Github: <Github className="w-5 h-5 text-slate-300" />,
    Terminal: <Terminal className="w-5 h-5 text-green-400" />,
    Laptop: <Laptop className="w-5 h-5 text-blue-400" />
  };

  const getFilteredSkills = () => {
    switch (activeTab) {
      case 'analytics':
        return [{ title: 'Data Analysis & Visualization', items: analytics || [] }];
      case 'languages':
        return [{ title: 'Programming & Query Languages', items: languages || [] }];
      case 'database':
        return [{ title: 'Database Systems & SQL', items: database || [] }];
      case 'tools':
        return [{ title: 'Analytics & Software Tools', items: tools || [] }];
      default:
        return [
          { title: 'Data Analysis & Visualization', items: analytics || [] },
          { title: 'Languages & SQL', items: languages || [] },
          { title: 'Database Systems', items: database || [] },
          { title: 'Tools & Workspace', items: tools || [] }
        ];
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            TECHNICAL & ANALYTICS SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredSkills().map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-slate-800 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="text-xs font-mono text-cyan-400 font-normal">{group.items.length} Skills</span>
                </h3>

                <div className="space-y-4">
                  {group.items.map((skill, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                            {iconComponentMap[skill.icon] || <CheckCircle className="w-4 h-4 text-cyan-400" />}
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800/90 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: itemIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Resume Skills Tags */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-slate-800 text-center">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            Core Resume Skills & Competencies:
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {coreSkills.map((cSkill, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-medium flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                {cSkill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

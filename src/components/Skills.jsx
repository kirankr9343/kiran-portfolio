import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Server, 
  Wrench, 
  Sparkles,
  CheckCircle,
  FileCode2,
  Briefcase,
  Github,
  Laptop,
  Globe,
  Cpu,
  Layout,
  BookOpen,
  BarChart3,
  Table,
  Filter,
  PieChart,
  TrendingUp
} from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { languages, webDev, analytics, fullStackDb, aiTools, toolsPlatforms } = portfolioData.skills;

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'webDev', name: 'Web Dev & Full Stack', icon: <Layout className="w-4 h-4" /> },
    { id: 'analytics', name: 'Data Analysis & BI', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'fullStackDb', name: 'Databases (SQL/NoSQL)', icon: <Server className="w-4 h-4" /> },
    { id: 'languages', name: 'Languages', icon: <Code2 className="w-4 h-4" /> },
    { id: 'aiTools', name: 'AI Tools', icon: <Cpu className="w-4 h-4" /> },
    { id: 'toolsPlatforms', name: 'Tools & Platforms', icon: <Wrench className="w-4 h-4" /> },
  ];

  const iconComponentMap = {
    Code2: <Code2 className="w-4 h-4 text-cyan-400" />,
    FileCode2: <FileCode2 className="w-4 h-4 text-purple-400" />,
    Database: <Database className="w-4 h-4 text-blue-400" />,
    Layout: <Layout className="w-4 h-4 text-cyan-400" />,
    Server: <Server className="w-4 h-4 text-indigo-400" />,
    Briefcase: <Briefcase className="w-4 h-4 text-blue-400" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-cyan-400" />,
    Table: <Table className="w-4 h-4 text-emerald-400" />,
    Filter: <Filter className="w-4 h-4 text-yellow-400" />,
    PieChart: <PieChart className="w-4 h-4 text-purple-400" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-indigo-400" />,
    Cpu: <Cpu className="w-4 h-4 text-purple-400" />,
    Sparkles: <Sparkles className="w-4 h-4 text-amber-400" />,
    Github: <Github className="w-4 h-4 text-slate-300" />,
    Laptop: <Laptop className="w-4 h-4 text-blue-400" />,
    BookOpen: <BookOpen className="w-4 h-4 text-yellow-400" />,
    Globe: <Globe className="w-4 h-4 text-cyan-400" />
  };

  const getFilteredSkills = () => {
    switch (activeTab) {
      case 'webDev':
        return [{ title: 'Web Development & Full Stack', items: webDev || [] }];
      case 'analytics':
        return [{ title: 'Data Analysis & Business Intelligence', items: analytics || [] }];
      case 'fullStackDb':
        return [{ title: 'Databases & Storage', items: fullStackDb || [] }];
      case 'languages':
        return [{ title: 'Programming & Query Languages', items: languages || [] }];
      case 'aiTools':
        return [{ title: 'AI Tools & Prompt Engineering', items: aiTools || [] }];
      case 'toolsPlatforms':
        return [{ title: 'Tools & Developer Platforms', items: toolsPlatforms || [] }];
      default:
        return [
          { title: 'Web Dev & Full Stack', items: webDev || [] },
          { title: 'Data Analysis & BI', items: analytics || [] },
          { title: 'Databases & Storage', items: fullStackDb || [] },
          { title: 'Languages', items: languages || [] },
          { title: 'AI Tools', items: aiTools || [] },
          { title: 'Tools & Platforms', items: toolsPlatforms || [] }
        ];
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            FULL STACK & DATA ANALYTICS SKILLS
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: groupIdx * 0.05 }}
              className="glass-card rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="text-xs font-mono text-cyan-400 font-normal">{group.items.length} Techs</span>
                </h3>

                <div className="space-y-3">
                  {group.items.map((skill, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-slate-800/80 border border-slate-700">
                            {iconComponentMap[skill.icon] || <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />}
                          </div>
                          <span className="text-xs font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">{skill.level}%</span>
                      </div>

                      <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: itemIdx * 0.05 }}
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

      </div>
    </section>
  );
};

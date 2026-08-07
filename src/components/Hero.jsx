import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { 
  Download, 
  Briefcase, 
  Send, 
  Linkedin, 
  Github, 
  Mail, 
  Code, 
  Database,
  BarChart2,
  Cpu,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { name, title, typingTitles, profileImage } = portfolioData.personalInfo;
  const { linkedin, github, email, leetcode, hackerrank } = portfolioData.socialLinks;

  const typingSequence = typingTitles.flatMap((item) => [item, 1800]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Open to Full Stack & Data Analyst Roles
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-none mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{name}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-semibold text-slate-300 mb-4 flex items-center gap-2">
              <span>{title}</span>
            </h2>

            {/* Dynamic Typing */}
            <div className="text-base sm:text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2 h-10">
              <span className="text-slate-500">&gt;</span>
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-cyan-400"
              />
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Building high-performance web applications (React, Node, Express, REST APIs) and delivering actionable business insights (SQL, Power BI, Python, AI/ML).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Briefcase className="w-4 h-4" />
                View Full Stack & Data Projects
              </ScrollLink>

              <a
                href={portfolioData.personalInfo.resumeUrl}
                download="Kiran_KR_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume PDF
              </a>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-all text-sm font-semibold"
              >
                <Send className="w-4 h-4 text-blue-400" />
                Get in Touch
              </ScrollLink>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={email}
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all hover:-translate-y-1 flex items-center justify-center font-mono text-xs font-bold"
                  aria-label="LeetCode"
                >
                  <Code className="w-4 h-4" />
                </a>
                <a
                  href={hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all hover:-translate-y-1"
                  aria-label="HackerRank"
                >
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Compact Photo & Dual Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Compact Card Frame */}
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl p-1.5 bg-gradient-to-tr from-cyan-500/40 via-blue-500/30 to-indigo-500/30 shadow-[0_0_35px_rgba(6,182,212,0.25)] border border-cyan-500/40">
              
              {/* Inner Photo container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src={profileImage}
                  alt="Kiran K R"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <div className="text-xs font-bold text-white tracking-wide">Kiran K R</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Full Stack & Data Analyst</div>
                </div>
              </div>

              {/* Floating Dual Badges */}
              <div className="absolute -top-3 -left-5 px-3 py-1.5 rounded-lg glass-card border border-cyan-500/40 flex items-center gap-1.5 shadow-lg animate-float">
                <div className="p-1 rounded-md bg-cyan-500/20 text-cyan-400">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-white">React & Node.js</div>
              </div>

              <div className="absolute top-1/3 -right-5 px-3 py-1.5 rounded-lg glass-card border border-blue-500/40 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="p-1 rounded-md bg-blue-500/20 text-blue-400">
                  <BarChart2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-white">Power BI & SQL</div>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg glass-card border border-indigo-500/40 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-white">REST APIs & DBs</div>
              </div>

              <div className="absolute bottom-1/4 -left-6 px-3 py-1.5 rounded-lg glass-card border border-purple-500/40 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="p-1 rounded-md bg-purple-500/20 text-purple-400">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-white">AI & OpenCV</div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400 group-hover:scale-110" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

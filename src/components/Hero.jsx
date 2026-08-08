import React from 'react';
import { TypeAnimation } from 'react-type-animation';
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
  Layout,
  Cpu,
  ArrowDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { name, title, typingTitles, profileImage } = portfolioData.personalInfo;
  const { linkedin, github, email } = portfolioData.socialLinks;

  const typingSequence = typingTitles.flatMap((item) => [item, 1800]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Full Stack Developer & AI/Data Science Student
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{name}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-300 mb-4">
              {title}
            </h2>

            {/* Dynamic Typing */}
            <div className="text-base sm:text-lg font-mono text-cyan-400 mb-6 flex items-center gap-2 h-8">
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
              Building responsive web applications (React, Node, Express, REST APIs, MySQL, MongoDB) and machine learning models (Python, YOLOv8, OpenCV).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={400}
                offset={-70}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
              >
                <Briefcase className="w-4 h-4" />
                View Projects
              </ScrollLink>

              <a
                href={portfolioData.personalInfo.resumeUrl}
                download="Kiran_KR_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume PDF
              </a>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={400}
                offset={-70}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-sm font-semibold"
              >
                <Send className="w-4 h-4 text-blue-400" />
                Contact Me
              </ScrollLink>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={email}
                  className="p-2.5 rounded-lg glass-card hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Graphic & Compact Photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Compact Card Frame */}
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl p-1 bg-slate-800 border border-slate-700/80 shadow-xl">
              
              {/* Inner Photo container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={profileImage}
                  alt="Kiran K R"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <div className="text-xs font-bold text-white tracking-wide">Kiran K R</div>
                  <div className="text-[10px] text-cyan-400 font-mono">B.E. AI & Data Science</div>
                </div>
              </div>

              {/* Minimal Tech Badges */}
              <div className="absolute -top-3 -left-4 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-200 shadow-sm">
                <Layout className="w-3.5 h-3.5 text-cyan-400" /> Web Dev
              </div>

              <div className="absolute top-1/3 -right-4 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-200 shadow-sm">
                <Code className="w-3.5 h-3.5 text-blue-400" /> Python
              </div>

              <div className="absolute -bottom-3 -left-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-200 shadow-sm">
                <Database className="w-3.5 h-3.5 text-indigo-400" /> SQL & DBs
              </div>

              <div className="absolute bottom-1/4 -left-5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-200 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> YOLOv8
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <ScrollLink
            to="about"
            smooth={true}
            duration={400}
            offset={-70}
            className="cursor-pointer flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

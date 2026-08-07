import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Linkedin, Github, Mail, Code, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  const { linkedin, github, email, leetcode, hackerrank } = portfolioData.socialLinks;
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#05070e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-tight">
              Kiran <span className="text-cyan-400">K R</span>
            </span>
            <span className="text-xs text-slate-400 font-mono mt-1">
              Data Analyst | AI & Data Science Engineer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={email} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href={leetcode} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors">
              <Code className="w-4 h-4" />
            </a>
            <a href={hackerrank} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-colors">
              <Sparkles className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll To Top */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-110 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </ScrollLink>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {year} Kiran K R. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Designed & Developed by Kiran K R
          </div>
        </div>

      </div>
    </footer>
  );
};

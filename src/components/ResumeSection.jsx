import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const ResumeSection = () => {
  const { name, title, email, phone, location } = portfolioData.personalInfo;

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Download full official CV or view condensed executive summary below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white">{name}</h3>
              <p className="text-cyan-400 font-mono text-sm mt-1">{title}</p>
              <p className="text-slate-400 text-xs mt-2">{location} | {email} | {phone}</p>
            </div>

            <button
              onClick={() => {
                window.print();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all w-fit"
            >
              <Download className="w-4 h-4" />
              Print / Save Resume PDF
            </button>
          </div>

          {/* Body Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Core Competencies */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Key Competencies
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Power BI & DAX Dashboard Development",
                  "Advanced SQL Querying, Window Functions & CTEs",
                  "Excel Analytics (Pivot Tables, Power Query, XLOOKUP)",
                  "Python Data Analysis (Pandas, NumPy, Matplotlib, Seaborn)",
                  "Business Intelligence & Executive KPI Reporting",
                  "Relational Database Schema Design & ETL Pipelines"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Education & Internship Summary */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Experience & Education Snapshot
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-sm font-bold text-white">Full Stack Intern</div>
                  <div className="text-xs text-cyan-400">Rank Book Academy</div>
                  <div className="text-[11px] text-slate-400 mt-1">Frontend, Backend APIs, Database Management, Testing</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-sm font-bold text-white">B.E. AI & Data Science</div>
                  <div className="text-xs text-cyan-400">Nitte Meenakshi Institute of Technology</div>
                  <div className="text-[11px] text-slate-400 mt-1">CGPA: 8.48 / 10.0</div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
              <span className="text-cyan-400 font-bold font-mono text-lg group-hover:text-white transition-colors">
                K
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Kiran KR
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">DATA & AI ENGINEER</span>
          </div>
        </ScrollLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="!text-cyan-400 font-medium after:w-full"
              className="relative px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 hover:text-white text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#070913] rounded-md group-hover:bg-opacity-0 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
              Hire Me
            </span>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#070913]/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Hire Me
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

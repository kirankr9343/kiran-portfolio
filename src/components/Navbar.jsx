import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => {
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
    { name: 'Achievements', to: 'achievements' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070913]/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={400}
          className="cursor-pointer group flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-sm">
            <div className="w-full h-full bg-white dark:bg-[#070913] rounded-[7px] flex items-center justify-center">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold font-mono text-base">
                K
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              Kiran K R
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Full Stack & AI Engineer</span>
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
              duration={400}
              activeClass="!text-cyan-600 dark:!text-cyan-400 font-semibold"
              className="px-2.5 py-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="p-2 rounded-lg glass-card border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span>Dark</span>
              </>
            )}
          </button>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={400}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold text-xs hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg glass-card border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#070913]/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={400}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

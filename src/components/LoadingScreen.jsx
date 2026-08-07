import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#070913] flex flex-col items-center justify-center"
    >
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="w-16 h-16 rounded-full border-2 border-blue-500/20 border-b-blue-400 animate-spin-slow absolute" />
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          K
        </span>
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-lg font-semibold tracking-wider text-slate-200 uppercase">
          Kiran KR
        </h2>
        <p className="text-xs text-cyan-400 font-mono tracking-widest mt-1">
          DATA ANALYST & AI ENGINEER
        </p>
      </motion.div>
    </motion.div>
  );
};

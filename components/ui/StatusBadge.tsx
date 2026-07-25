"use client";

import React from "react";
import { motion } from "framer-motion";

export const StatusBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111]/80 border border-emerald-500/20 backdrop-blur-md shadow-sm"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="text-xs font-medium text-emerald-400 tracking-wide">
        Available for AI & Backend Engineering Projects
      </span>
    </motion.div>
  );
};

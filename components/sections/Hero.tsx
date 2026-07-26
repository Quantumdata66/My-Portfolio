"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, FileText, Send, MapPin, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getAssetPath } from "@/lib/assets";
import Image from "next/image";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Location Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge />
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Typographic Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                ABDULAZEEZ <br />
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  NURUDEEN
                </span>
              </motion.h1>

              {/* Animated Role Switcher */}
              <div className="h-10 sm:h-12 flex items-center pt-2">
                <span className="text-zinc-500 font-mono text-sm sm:text-base mr-3">Focus:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-2xl font-bold font-mono text-blue-400 tracking-tight"
                  >
                    {PERSONAL_INFO.roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Value Proposition Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-sans"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 group"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/80"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#111111]/60 border border-zinc-800/60">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Dotun's Main Profile Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden glass-card p-2 border border-zinc-800 shadow-2xl group">
              {/* Dotun Photo Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src={getAssetPath("/images/dotun.jpg")}
                  alt="Abdulazeez Nurudeen Adedotun"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />

                {/* Floating Telemetry Widget */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090909]/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>Backend & Machine Learning Engineer</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Lagos, NG</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

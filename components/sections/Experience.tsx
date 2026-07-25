"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_DETAILS } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Industrial Experience</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            High-Voltage Power Systems & Automation
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Hands-on engineering training at Nigeria&apos;s primary electricity transmission operator.
          </p>
        </div>

        {/* Transmission Company of Nigeria Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-zinc-800 space-y-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Badge Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[100px] pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800/80 pb-6">
              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {EXPERIENCE_DETAILS.period}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {EXPERIENCE_DETAILS.company}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mt-1">
                  {EXPERIENCE_DETAILS.department}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800">
                📍 {EXPERIENCE_DETAILS.location}
              </div>
            </div>

            {/* Core Technical Capabilities & Responsibilities Grid */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                Technical Scope & Substation Execution
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {EXPERIENCE_DETAILS.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Footer */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
              <span className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800">
                Relay Testing
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800">
                Protection, Control & Metering (PCM)
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800">
                High-Voltage Grid Operations
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800">
                Secondary Injection Testing
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

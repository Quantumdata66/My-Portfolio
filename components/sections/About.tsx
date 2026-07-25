"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles, Layers } from "lucide-react";
import { TIMELINE_ITEMS } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-black/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Perspective</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Who I Am & How I Build
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Combining rigorous mechatronics systems discipline with modern backend microservices and machine intelligence.
          </p>
        </div>

        {/* 3 Columns Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Intelligent Systems Architecture</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I view software through an engineering systems lens — prioritizing low latency, clean API boundaries, state isolation, and deterministic data flow.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Backend & AI Convergence</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              From building FastAPI microservices to integrating LLM embeddings and Whisper speech-to-text models, I build production AI tools that solve actual problems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Mechatronics Roots</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              My background in Mechatronics Engineering gives me deep experience in sensor fusion, control loops, Linux edge systems, and hardware telemetry.
            </p>
          </motion.div>

        </div>

        {/* Timeline Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white">Engineering Timeline</h3>
          <p className="text-xs font-mono text-zinc-500 mt-1">2021 — PRESENT</p>
        </div>

        {/* Timeline Visual Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-zinc-800 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {TIMELINE_ITEMS.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-[#090909] border-2 border-blue-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-blue-500/20">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.isCurrent ? "bg-emerald-400 animate-pulse" : "bg-blue-400"}`} />
                  </div>

                  {/* Timeline Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all shadow-xl">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {item.year}
                        </span>
                        {item.isCurrent && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Active
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      {item.organization && (
                        <p className="text-xs font-semibold text-emerald-400">{item.organization}</p>
                      )}
                      <p className="text-xs text-zinc-400 font-mono">{item.subtitle}</p>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

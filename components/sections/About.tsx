"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, GraduationCap, Cpu, Server } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-black/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multidisciplinary Background</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Foundation &amp; Technical Breadth
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Mechatronics Engineering graduate with multidisciplinary experience spanning artificial intelligence, machine learning, software development, backend engineering, and industrial operations.
          </p>
        </div>

        {/* 4 Pillars of Competence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">AI &amp; Machine Learning</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Applied experience in dataset preparation, exploratory analysis, classification, fine-tuning transformer models (DistilBERT), Random Forest optimization, and handling severe class imbalance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Software &amp; Backend</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Developing REST APIs in FastAPI, schema modeling in PostgreSQL with Row-Level Security, asynchronous processing, and deploying database-driven web applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Embedded &amp; Mechatronics</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Physical hardware integration: multi-sensor fusion (magnetic, thermal, gas), Raspberry Pi edge compute, ESP32 modules, and desktop PyQt monitoring applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Industrial Operations</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Three tenures of industrial engineering training at the Transmission Company of Nigeria (TCN), focusing on Protection, Control &amp; Metering (PC&amp;M), relay testing, and high-voltage grid systems.
            </p>
          </motion.div>

        </div>

        {/* Education & Academic Credentials Spotlight */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#111111] border border-zinc-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-zinc-800 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500">Academic Foundation</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{PERSONAL_INFO.education.degree}</h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">{PERSONAL_INFO.education.institution}</p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-right">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                {PERSONAL_INFO.education.classification}
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                CGPA: <strong className="text-white">{PERSONAL_INFO.education.cgpa}</strong>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Relevant coursework and engineering competencies: Data Analysis, Machine Learning, Sensors &amp; Instrumentation, Control Systems, Microcontroller Interfacing, and Engineering Problem Solving. Combines an engineering mindset with practical exposure to software development, data-driven modeling, and real-world technical environments.
          </p>
        </div>

      </div>
    </section>
  );
};

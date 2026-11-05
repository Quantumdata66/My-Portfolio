"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Award, Sparkles, CheckCircle2, BookOpen } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolioData";

export const CurrentlyBuilding: React.FC = () => {
  const activeFocus = [
    {
      title: "ScamCheck Threat Detection Engine",
      description: "Leading backend microservice evolution, expanding Pydantic v2 validation, and integrating rule-based heuristics with empirical ML evaluations.",
      status: "Nexus BuildLab Lead",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-400"
    },
    {
      title: "AI Agentic Workflows & Tool-Augmented LLMs",
      description: "Implementing structured reasoning, agentic tool invocation, and automated benchmark evaluation across complex multi-step technical workflows.",
      status: "Active Exploration",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Production Backend Architecture & API Resiliency",
      description: "Deepening patterns in PostgreSQL schema migrations, high-throughput FastAPI async concurrency, Dockerized containers, and cloud deployment pipelines.",
      status: "Continuous Development",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400"
    }
  ];

  const technicalReadings = [
    "Designing Data-Intensive Applications — Martin Kleppmann",
    "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow — Aurélien Géron",
    "FastAPI & Modern Async Python Microservice Architecture"
  ];

  return (
    <section id="currently-building" className="py-24 relative bg-black/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Hammer className="w-3.5 h-3.5" />
            <span>Active Engineering Radar</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Current Focus &amp; Certifications
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Transparent breakdown of active technical initiatives, verified professional certifications, and ongoing engineering literature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Active Engineering Focus (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Current Technical Focus Areas</span>
            </h3>

            {activeFocus.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-3 shadow-xl hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border ${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Academic Milestone (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl">
              <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Verified Professional Certifications</span>
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                    <div className="flex items-start gap-2.5 text-xs text-zinc-200 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cert.title}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pl-6">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 pl-6 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading List Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl">
              <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Engineering Literature</span>
              </h3>
              <div className="space-y-2.5">
                {technicalReadings.map((book, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{book}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

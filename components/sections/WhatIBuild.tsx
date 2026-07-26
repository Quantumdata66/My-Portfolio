"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Brain, Cloud, Cpu, ArrowUpRight } from "lucide-react";

export const WhatIBuild: React.FC = () => {
  const buildCategories = [
    {
      icon: Server,
      title: "Backend Systems",
      subtitle: "High-performance REST microservices, authentication frameworks, relational schemas, and data pipelines.",
      tags: ["REST APIs", "Authentication", "Databases", "Cloud Infrastructure"],
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      accentBg: "bg-blue-500/10"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Predictive models, speech-to-text transcript processing, classification algorithms, and tabular ML pipelines.",
      tags: ["Prediction Models", "Transcript Processing", "Computer Vision", "ML Algorithms"],
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10"
    },
    {
      icon: Cloud,
      title: "Cloud Applications",
      subtitle: "Production web applications deployed on cloud platforms with Row-Level Security and object storage.",
      tags: ["Supabase", "PostgreSQL", "Docker", "Vercel / AWS"],
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      accentBg: "bg-purple-500/10"
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      subtitle: "Subterranean sensor telemetry, Raspberry Pi edge compute, PyQt HMI GUIs, and industrial automation.",
      tags: ["Sensor Fusion", "Raspberry Pi", "PyQt HMI", "Automation"],
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
      accentBg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="what-i-build" className="py-24 relative bg-black/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>Capabilities & Focus</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            What I Build
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Architecting software across four core engineering disciplines.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buildCategories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-8 rounded-3xl bg-[#111111] border ${cat.borderColor} space-y-6 shadow-2xl relative overflow-hidden group`}
              >
                {/* Subtle Ambient Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

                <div className="relative z-10 flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${cat.accentBg} border ${cat.borderColor} flex items-center justify-center ${cat.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{cat.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{cat.subtitle}</p>
                </div>

                {/* Technology Badges */}
                <div className="relative z-10 flex flex-wrap gap-2 pt-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

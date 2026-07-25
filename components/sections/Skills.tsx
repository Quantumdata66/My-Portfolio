"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Cpu, Terminal, CheckCircle2, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case "Backend":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "Cloud & Infrastructure":
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      case "Machine Learning & AI":
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case "Engineering & Hardware":
        return <Cpu className="w-4 h-4 text-pink-400" />;
      default:
        return <Terminal className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills & Tooling Matrix
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Curated technology stack across backend systems, cloud infra, data pipelines, machine learning, and physical engineering.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-[#111111] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-base font-bold text-white">{catGroup.category}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {catGroup.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {catGroup.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      skill.highlighted
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/30 font-semibold"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {skill.highlighted && <CheckCircle2 className="w-3 h-3 text-blue-400" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

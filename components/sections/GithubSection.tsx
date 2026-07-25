"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Code2, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const GithubSection: React.FC = () => {
  const heatmapData = Array.from({ length: 364 }, (_, i) => {
    const random = Math.sin(i * 12.5) * 100;
    if (random > 70) return 4;
    if (random > 35) return 3;
    if (random > 0) return 2;
    if (random > -40) return 1;
    return 0;
  });

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-emerald-400 shadow-sm shadow-emerald-400/50";
      case 3:
        return "bg-emerald-500/80";
      case 2:
        return "bg-emerald-600/50";
      case 1:
        return "bg-emerald-900/40";
      default:
        return "bg-zinc-900 border border-zinc-800/60";
    }
  };

  const repos = [
    {
      name: "quantum-jersey",
      description: "Production football apparel e-commerce engine with Supabase Auth, PostgreSQL RLS & Vercel edge deployment.",
      stars: 12,
      forks: 3,
      language: "TypeScript",
      languageColor: "bg-blue-400",
      url: "https://github.com/quantumdata66/quantum-jersey"
    },
    {
      name: "underground-ied-detection",
      description: "Multi-sensor fusion (gas, thermal, magnetometer) & Random Forest classifier on Raspberry Pi for capstone B.Eng.",
      stars: 18,
      forks: 5,
      language: "Python",
      languageColor: "bg-amber-400",
      url: "https://github.com/quantumdata66/underground-ied-detection"
    },
    {
      name: "notely-backend-engine",
      description: "FastAPI microservice for parsing podcast RSS feeds, processing audio transcripts with Whisper, and generating timestamped notes.",
      stars: 15,
      forks: 2,
      language: "Python",
      languageColor: "bg-amber-400",
      url: "https://github.com/quantumdata66"
    }
  ];

  return (
    <section className="py-24 relative bg-black/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Git Telemetry</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            GitHub Activity & Repositories
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Continuous engineering workflow, open-source repositories, and code contributions.
          </p>
        </div>

        {/* Heatmap & Stats Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-zinc-800 space-y-8 mb-12 shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Contribution Heatmap</h3>
                <p className="text-xs text-zinc-400 font-mono">@quantumdata66 on GitHub</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          {/* Grid Simulation */}
          <div className="overflow-x-auto pb-2 custom-scrollbar">
            <div className="inline-grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
              {heatmapData.map((level, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-xs ${getHeatmapColor(level)} transition-all hover:scale-125 cursor-pointer`}
                  title={`Day ${idx + 1}: ${level * 3} contributions`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-2">
            <span>Learn more about code activity on GitHub</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-xs bg-zinc-900 border border-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-900/40" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/50" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500/80" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors font-mono">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-800/60">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3 text-zinc-400" /> {repo.forks}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

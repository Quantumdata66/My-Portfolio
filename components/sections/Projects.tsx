"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban, ExternalLink, ArrowRight, Lock, Sparkles, Server, Cpu
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { getAssetPath } from "@/lib/assets";
import Image from "next/image";

export const Projects: React.FC = () => {
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI / ML & NLP", "Backend & Systems", "Mechatronics & Embedded"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "AI / ML & NLP":
        return <Sparkles className="w-3.5 h-3.5 text-blue-400" />;
      case "Backend & Systems":
        return <Server className="w-3.5 h-3.5 text-emerald-400" />;
      case "Mechatronics & Embedded":
        return <Cpu className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <FolderKanban className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-black/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Verified Engineering Work</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Detailed case studies across Natural Language Processing, class-imbalanced predictive modeling, scalable backend services, full-stack commerce, and subterranean sensor fusion.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-[#111111] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-zinc-400">
                {cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isReversed = idx % 2 !== 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-zinc-800 hover:border-zinc-700 transition-all shadow-2xl space-y-6"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                    
                    {/* Project Media Preview */}
                    <div className={`lg:col-span-6 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative w-full aspect-video sm:aspect-[16/10]">
                        <Image
                          src={getAssetPath(project.image)}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-70" />
                      </div>

                      {/* Status & Category Pills overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-black/85 border border-white/10 text-emerald-400 backdrop-blur-md">
                          {project.status}
                        </span>
                        <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-black/85 border border-white/10 text-blue-400 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details Info */}
                    <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div>
                        <span className="text-xs font-mono font-semibold text-blue-400 tracking-wide uppercase">
                          {project.role}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-mono mt-1">{project.subtitle}</p>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Evaluation Metrics Snapshot (if available) */}
                      {project.evaluationMetrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs font-mono">
                          {project.evaluationMetrics.slice(0, 3).map((m, mIdx) => (
                            <div key={mIdx}>
                              <div className="text-[10px] text-zinc-500 uppercase">{m.label}</div>
                              <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Architectural Highlight Snippet */}
                      <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs font-mono text-zinc-400">
                        <span className="text-blue-400 font-bold mr-2">FLOW:</span>
                        {project.architecture.length > 100
                          ? `${project.architecture.slice(0, 100)}...`
                          : project.architecture}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/20"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}

                        {project.githubPrivate && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-500 text-xs font-mono">
                            <Lock className="w-3 h-3 text-zinc-500" />
                            <span>Private Codebase</span>
                          </span>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {project.huggingFaceUrl && (
                          <a
                            href={project.huggingFaceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 text-xs font-medium transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Hugging Face Hub</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};

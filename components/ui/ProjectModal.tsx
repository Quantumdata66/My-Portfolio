"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2, AlertTriangle, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/portfolioData";
import { getAssetPath } from "@/lib/assets";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-zinc-800 rounded-2xl shadow-2xl z-10 custom-scrollbar text-zinc-200"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 text-zinc-400 hover:text-white hover:bg-black/90 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative w-full h-64 sm:h-80 bg-zinc-900 border-b border-zinc-800">
            <Image
              src={getAssetPath(project.image)}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.status}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white">{project.title}</h2>
                <p className="text-sm text-zinc-400 mt-1 max-w-xl">{project.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Application
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview / My Role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div>
                <span className="text-xs uppercase font-medium text-zinc-500 tracking-wider">My Role</span>
                <p className="text-sm font-semibold text-blue-400 mt-1">{project.role}</p>
              </div>
              <div>
                <span className="text-xs uppercase font-medium text-zinc-500 tracking-wider">Status</span>
                <p className="text-sm font-semibold text-emerald-400 mt-1">{project.status}</p>
              </div>
              <div>
                <span className="text-xs uppercase font-medium text-zinc-500 tracking-wider">Primary Tech</span>
                <p className="text-sm font-semibold text-zinc-300 mt-1">{project.techStack.slice(0, 3).join(", ")}</p>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold mb-3">
                  <AlertTriangle className="w-5 h-5" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2.5 text-emerald-400 font-semibold mb-3">
                  <Lightbulb className="w-5 h-5" />
                  <span>The System Solution</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Architectural Deep-Dive */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-blue-950/20 to-zinc-900/50 border border-blue-500/20">
              <div className="flex items-center gap-2.5 text-blue-400 font-semibold mb-3">
                <Layers className="w-5 h-5" />
                <span>System Architecture & Data Flow</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-mono bg-black/40 p-4 rounded-lg border border-white/5">
                {project.architecture}
              </p>
            </div>

            {/* Key Responsibilities / Features */}
            {(project.responsibilities || project.features) && (
              <div>
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  Key Technical Execution
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {(project.responsibilities || project.features)?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

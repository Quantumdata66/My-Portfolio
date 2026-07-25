"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import Image from "next/image";

export const Projects: React.FC = () => {
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-black/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Intelligent Software & Systems
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Detailed case studies of AI pipelines, production e-commerce platforms, and capstone mechatronics hardware projects.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-zinc-800 hover:border-zinc-700 transition-all shadow-2xl space-y-6"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Project Media Preview */}
                  <div className={`lg:col-span-7 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Status Pill overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-black/80 border border-white/10 text-emerald-400 backdrop-blur-md">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Info */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
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

                    {/* Architectural Highlight Snippet */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400">
                      <span className="text-blue-400 font-bold mr-2">ARCH:</span>
                      {project.architecture.slice(0, 110)}...
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
                        <span>View Case Study</span>
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

                      {project.liveUrl && project.liveUrl !== "#" && (
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
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
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

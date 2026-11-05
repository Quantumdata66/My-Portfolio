"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Camera, Calendar, MapPin, Building2, UserCheck } from "lucide-react";
import { WORK_EXPERIENCES } from "@/data/portfolioData";
import { getAssetPath } from "@/lib/assets";
import Image from "next/image";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering &amp; Technical Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Chronological engineering experience across machine learning and backend leadership, collaborative podcast AI software, and high-voltage electricity transmission operations.
          </p>
        </div>

        {/* Chronological Work Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-12">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-zinc-800 space-y-8 shadow-2xl relative overflow-hidden"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 flex items-center gap-2.5">
                    <Building2 className="w-6 h-6 text-blue-400" />
                    <span>{exp.company}</span>
                  </h3>
                  <p className="text-base font-semibold text-emerald-400 mt-1">
                    {exp.role}
                  </p>
                </div>

                <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Personal Contributions Highlight */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Personal Contributions &amp; Technical Execution</span>
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {exp.personalContributions.map((contrib, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos Showcase (for TCN) */}
              {exp.photos && exp.photos.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                  <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                    <Camera className="w-4 h-4 text-blue-400" />
                    <span>Field Operations &amp; Substation Telemetry</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.photos.map((photo, pIdx) => (
                      <motion.div
                        key={pIdx}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] shadow-lg"
                      >
                        <Image
                          src={getAssetPath(photo.src)}
                          alt={photo.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-zinc-300 line-clamp-2">
                          {photo.caption}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
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

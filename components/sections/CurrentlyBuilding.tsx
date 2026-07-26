"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, BookOpen, Award, Sparkles, CheckCircle2 } from "lucide-react";

export const CurrentlyBuilding: React.FC = () => {
  const activeFocus = [
    {
      title: "Notely — AI Podcast Intelligence App",
      description: "Collaborating in a software team building AI-driven episode matching algorithms, transcript processing, and timestamp note extraction.",
      status: "In Active Development",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-400"
    },
    {
      title: "Machine Learning Systems & MLOps",
      description: "Designing end-to-end ML training pipelines, model monitoring, tabular classification, and low-latency inference endpoints.",
      status: "Active Research",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Cloud Infrastructure & Containerization",
      description: "Deepening hands-on mastery of cloud deployment, serverless microservices, relational database tuning, and production architecture.",
      status: "Ongoing Skill Building",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400"
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "B.Eng Mechatronics Engineering (2026 Graduating Candidate)"
  ];

  const readingList = [
    "Designing Data-Intensive Applications — Martin Kleppmann",
    "Python High Performance & FastAPI Microservices Architecture",
    "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow"
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
            Currently Building & Learning
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Transparent breakdown of active projects, technical literature, and continuous learning roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Projects & Systems (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Active Projects & Engineering Focus
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

          {/* Certifications & Reading List (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl">
              <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Certifications & Academic Milestone
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading & Study List Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 shadow-xl">
              <h3 className="text-xs uppercase font-mono font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Technical Reading & Literature
              </h3>
              <div className="space-y-3">
                {readingList.map((book, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300 font-mono">
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

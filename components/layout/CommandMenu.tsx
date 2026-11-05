"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, ExternalLink, Code2, User, FolderKanban, Terminal, Sparkles, X, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const scrollToSection = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl bg-[#111111] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-zinc-200"
        >
          <div className="flex items-center px-4 border-b border-zinc-800">
            <Search className="w-4 h-4 text-zinc-400 shrink-0 mr-3" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a section name or action..."
              className="w-full py-4 text-sm bg-transparent outline-none text-white placeholder-zinc-500 font-sans"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto p-2 space-y-4 custom-scrollbar text-sm">
            {/* Quick Navigation Group */}
            <div>
              <div className="px-3 py-1.5 text-[11px] uppercase font-bold text-zinc-500 tracking-wider">
                Navigation
              </div>
              <div className="space-y-1 mt-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <Sparkles className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Overview &amp; Hero</span>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <User className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>About &amp; Academic Honors</span>
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <FolderKanban className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>7 Verified Projects &amp; Case Studies</span>
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <Briefcase className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Career Experience (Nexus BuildLab, Notely, TCN)</span>
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <Code2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Skills &amp; Tooling Matrix</span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <Terminal className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Contact &amp; Work Availability</span>
                </button>
              </div>
            </div>

            {/* Actions Group */}
            <div>
              <div className="px-3 py-1.5 text-[11px] uppercase font-bold text-zinc-500 tracking-wider">
                Actions &amp; External Profiles
              </div>
              <div className="space-y-1 mt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Download Curriculum Vitae (PDF)</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    PDF
                  </span>
                </button>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-zinc-400" />
                    <span>GitHub Profile (@Quantumdata66)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left text-zinc-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-3 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px]">ESC</kbd> to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

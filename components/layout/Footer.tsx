"use client";

import React, { useEffect, useState } from "react";
import { Mail, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const [lagosTime, setLagosTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setLagosTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 bg-[#090909] border-t border-zinc-900 text-zinc-500 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
              AN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-zinc-300">ABDULAZEEZ NURUDEEN ADEDOTUN</span>
              <span className="text-[10px] font-mono text-zinc-500">Backend • AI • Mechatronics Engineer</span>
            </div>
          </div>

          {/* Live Lagos Clock */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Lagos, Nigeria:</span>
            <span className="text-white font-bold">{lagosTime || "10:45 PM WAT"}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Copyright & SEO details */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} Abdulazeez Nurudeen Adedotun. All rights reserved.</p>
          <p>Engineered with Next.js 15, TypeScript, TailwindCSS & Framer Motion.</p>
        </div>

      </div>
    </footer>
  );
};

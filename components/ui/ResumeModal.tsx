"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Check } from "lucide-react";
import { RAW_RESUME_TEXT } from "@/data/resumeData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownloadText = () => {
    const blob = new Blob([RAW_RESUME_TEXT], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ABDULAZEEZ_NURUDEEN_ADEDOTUN_RESUME.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F0F12] border border-zinc-800 rounded-2xl shadow-2xl z-10 custom-scrollbar text-zinc-200"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#0F0F12]/95 border-b border-zinc-800 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Curriculum Vitae</h2>
                <p className="text-xs text-zinc-400">Abdulazeez Nurudeen Adedotun</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadText}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Download className="w-4 h-4" />}
                {copied ? "Downloaded!" : "Download Resume (.txt)"}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content View - Verbatim Text */}
          <div className="p-6 sm:p-10 font-mono text-xs sm:text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed bg-[#0A0A0C] border border-zinc-800/80 rounded-xl m-4 sm:m-8 custom-scrollbar">
            {RAW_RESUME_TEXT}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Mail, MapPin, GraduationCap, Briefcase, Code, Check, Phone, Award, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { RESUME_DATA } from "@/data/resumeData";

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
    const textContent = `
${RESUME_DATA.header.name}
${RESUME_DATA.header.title}
${RESUME_DATA.header.location} | Phone: ${RESUME_DATA.header.phone} | Email: ${RESUME_DATA.header.email}
LinkedIn: ${RESUME_DATA.header.linkedin} | GitHub: ${RESUME_DATA.header.github}

--------------------------------------------------
PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

--------------------------------------------------
TECHNICAL SKILLS
Programming Languages: ${RESUME_DATA.technicalSkills.programming.join(", ")}
Backend Development: FastAPI, REST APIs, Authentication, Supabase
Databases: PostgreSQL, Supabase
Cloud & DevOps: ${RESUME_DATA.technicalSkills.backendCloud.join(", ")}
Machine Learning & Data: ${RESUME_DATA.technicalSkills.machineLearningData.join(", ")}
Engineering Tools: ${RESUME_DATA.technicalSkills.engineeringTools.join(", ")}

--------------------------------------------------
PROJECTS
${RESUME_DATA.projects.map(p => `
${p.name}
${p.role}
${p.bullets.map(b => `- ${b}`).join("\n")}
Technologies: ${p.technologies.join(", ")}
`).join("\n")}

--------------------------------------------------
INDUSTRIAL EXPERIENCE
${RESUME_DATA.experience.map(e => `
${e.role} | ${e.company} (${e.period})
${e.bullets.map(b => `- ${b}`).join("\n")}
`).join("\n")}

--------------------------------------------------
EDUCATION
${RESUME_DATA.education.degree} (${RESUME_DATA.education.graduationYear})
${RESUME_DATA.education.institution}, ${RESUME_DATA.education.location}

--------------------------------------------------
CERTIFICATIONS
${RESUME_DATA.certifications.join("\n")}

--------------------------------------------------
CORE COMPETENCIES
${RESUME_DATA.coreCompetencies.join(" • ")}
    `.trim();

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abdulazeez_Nurudeen_Adedotun_Resume.txt";
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

          {/* Resume Content View */}
          <div className="p-6 sm:p-10 space-y-8 font-sans">
            {/* Contact Details Header */}
            <div className="border-b border-zinc-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {RESUME_DATA.header.name}
              </h1>
              <p className="text-sm font-semibold text-blue-400 mt-1">
                {RESUME_DATA.header.title}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-zinc-500" /> {RESUME_DATA.header.location}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-zinc-500" /> {RESUME_DATA.header.phone}</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-zinc-500" /> {RESUME_DATA.header.email}</span>
                <span className="flex items-center gap-1.5"><LinkedinIcon className="w-3.5 h-3.5 text-zinc-500" /> {RESUME_DATA.header.linkedin}</span>
                <span className="flex items-center gap-1.5"><GithubIcon className="w-3.5 h-3.5 text-zinc-500" /> {RESUME_DATA.header.github}</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-2">Professional Summary</h3>
              <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80">
                {RESUME_DATA.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-400">Programming Languages</span>
                  <p className="text-xs text-zinc-300 mt-1">{RESUME_DATA.technicalSkills.programming.join(" • ")}</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-400">Backend & Databases</span>
                  <p className="text-xs text-zinc-300 mt-1">FastAPI • REST APIs • Authentication • Supabase • PostgreSQL</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-400">Cloud & DevOps</span>
                  <p className="text-xs text-zinc-300 mt-1">{RESUME_DATA.technicalSkills.backendCloud.join(" • ")}</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                  <span className="text-xs font-semibold text-zinc-400">Machine Learning & Engineering Tools</span>
                  <p className="text-xs text-zinc-300 mt-1">
                    {RESUME_DATA.technicalSkills.machineLearningData.join(" • ")} • {RESUME_DATA.technicalSkills.engineeringTools.join(" • ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Projects
              </h3>
              <div className="space-y-4">
                {RESUME_DATA.projects.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white">{proj.name}</h4>
                        <p className="text-xs text-blue-400 font-medium">{proj.role}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 pt-1">
                      {proj.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <div className="pt-2 text-xs font-mono text-zinc-500">
                      <span className="text-zinc-400 font-semibold">Technologies:</span> {proj.technologies.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Experience */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                Industrial Experience
              </h3>
              <div className="space-y-4">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white">{exp.company}</h4>
                        <p className="text-xs text-blue-400 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 pt-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                Education
              </h3>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-white">{RESUME_DATA.education.degree}</h4>
                    <p className="text-xs text-zinc-400">{RESUME_DATA.education.institution}, {RESUME_DATA.education.location}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Graduation {RESUME_DATA.education.graduationYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                Certifications
              </h3>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <p key={idx} className="text-xs font-semibold text-zinc-300">{cert}</p>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs uppercase font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.coreCompetencies.map((comp) => (
                  <span key={comp} className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {comp}
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

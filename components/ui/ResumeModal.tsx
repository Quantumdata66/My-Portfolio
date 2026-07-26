"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Check } from "lucide-react";
import { RAW_RESUME_TEXT } from "@/data/resumeData";
import jsPDF from "jspdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

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

  const handleDownloadPdf = () => {
    setDownloading(true);
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 15;
      const maxLineWidth = pageWidth - margin * 2;
      let y = 15;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin) {
          doc.addPage();
          y = 15;
        }
      };

      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42); // Dark slate
      doc.text("ABDULAZEEZ NURUDEEN ADEDOTUN", margin, y);
      y += 6;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(37, 99, 235); // Blue
      doc.text("Mechatronics Engineer | Machine Learning | Backend Engineer & Cloud Computing", margin, y);
      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(71, 85, 105);
      doc.text("Lagos, Nigeria  |  +234 902 636 6179  |  nurdul4002@gmail.com", margin, y);
      y += 4.5;

      doc.text("LinkedIn: linkedin.com/in/nurudeen-abdulazeez  |  GitHub: github.com/quantumdata66", margin, y);
      y += 7;

      // Divider Line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line(margin, y, pageWidth - margin, y);
      y += 7;

      // Sections Helper
      const addSectionHeader = (title: string) => {
        checkPageBreak(10);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(15, 23, 42);
        doc.text(title, margin, y);
        y += 4.5;
      };

      // Professional Summary
      addSectionHeader("PROFESSIONAL SUMMARY");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);

      const summaryText = "Mechatronics Engineering graduate with experience developing intelligent software systems, backend applications, and AI-powered solutions. Passionate about backend engineering, machine learning, cloud computing, and MLOps, with hands-on experience building production ready applications and engineering solutions. Built and deployed Quantum Jersey, a full-stack e-commerce platform integrating Supabase, PostgreSQL, cloud storage, authentication, and AI-assisted product management. Currently collaborating in a software development team to build Notely, a podcast note taking application, contributing to AI algorithm development, transcript processing, and backend functionality. Continuously expanding expertise in Python, FastAPI, SQL, Docker, AWS, and modern software engineering practices.";
      const summaryLines = doc.splitTextToSize(summaryText, maxLineWidth);
      checkPageBreak(summaryLines.length * 4);
      doc.text(summaryLines, margin, y);
      y += summaryLines.length * 4 + 5;

      // Technical Skills
      addSectionHeader("TECHNICAL SKILLS");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);

      const skills = [
        ["Programming Languages:", "Python, SQL, JavaScript, HTML5, CSS3"],
        ["Backend Development:", "FastAPI, REST APIs, Authentication, Supabase"],
        ["Databases:", "PostgreSQL, Supabase"],
        ["Cloud & DevOps:", "Git, GitHub, Docker, Vercel, AWS"],
        ["Machine Learning & Data:", "NumPy, Pandas, Scikit-learn"],
        ["Engineering Tools:", "SOLIDWORKS, MATLAB, Raspberry Pi, Linux, Microsoft Office Suite"]
      ];

      skills.forEach(([label, val]) => {
        checkPageBreak(4.5);
        doc.setFont("helvetica", "bold");
        doc.text(label, margin, y);
        doc.setFont("helvetica", "normal");
        doc.text(val, margin + 42, y);
        y += 4.5;
      });
      y += 3;

      // Projects
      addSectionHeader("PROJECTS");
      
      const projects = [
        {
          title: "Notely (Ongoing)",
          subtitle: "AI / Backend Developer | Team Project",
          bullets: [
            "Collaborating in a cross-functional software development team to build Notely, a mobile application that enables users to capture timestamped notes while listening to podcasts.",
            "Contributing to the design and implementation of AI-driven episode matching and transcript processing algorithms.",
            "Developing backend logic for transcript analysis, confidence scoring, and intelligent note extraction.",
            "Working collaboratively using Git and GitHub through feature branching, pull requests, and code reviews.",
            "Collaborating with frontend and backend developers to integrate AI functionality into the application."
          ],
          tech: "Technologies: TypeScript, Node.js, Git, GitHub, AI Algorithms, Transcript Processing"
        },
        {
          title: "Quantum Jersey – Full-Stack E-commerce Platform",
          subtitle: "Live Demo: https://quantumjersey.vercel.app/",
          bullets: [
            "Built and deployed a production-ready football merchandise e-commerce platform.",
            "Implemented Supabase Authentication, PostgreSQL database integration, cloud object storage, and secure Row-Level Security (RLS) policies.",
            "Developed an administrative dashboard supporting product management, inventory updates, and image uploads.",
            "Integrated AI-assisted product management workflows to streamline product publishing.",
            "Deployed the application on Vercel with a custom domain."
          ],
          tech: "Technologies: HTML, CSS, JavaScript, Supabase, PostgreSQL, GitHub, Vercel"
        },
        {
          title: "Design and Development of an Underground IED Detection System Using Sensor Fusion",
          subtitle: "Bachelor of Engineering Final Year Project",
          bullets: [
            "Designed and developed an intelligent underground IED detection prototype using sensor fusion techniques.",
            "Integrated magnetic, thermal, and gas sensors with Raspberry Pi for real-time environmental monitoring.",
            "Developed a PyQt graphical user interface for system visualization and monitoring.",
            "Evaluated machine learning techniques, including random forest, to improve detection reliability and reduce false positives."
          ],
          tech: "Technologies: Python, Raspberry Pi, PyQt, Machine Learning, Sensor Fusion"
        }
      ];

      projects.forEach((proj) => {
        checkPageBreak(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(proj.title, margin, y);
        y += 4;

        if (proj.subtitle) {
          doc.setFont("helvetica", "bold");
          doc.setTextColor(37, 99, 235);
          doc.text(proj.subtitle, margin, y);
          y += 4;
        }

        doc.setFont("helvetica", "normal");
        doc.setTextColor(51, 65, 85);
        proj.bullets.forEach((b) => {
          const bulletLines = doc.splitTextToSize(`•  ${b}`, maxLineWidth - 3);
          checkPageBreak(bulletLines.length * 4);
          doc.text(bulletLines, margin + 2, y);
          y += bulletLines.length * 4;
        });

        doc.setFont("helvetica", "bold");
        doc.setTextColor(100, 116, 139);
        const techLines = doc.splitTextToSize(proj.tech, maxLineWidth);
        checkPageBreak(techLines.length * 4);
        doc.text(techLines, margin, y);
        y += techLines.length * 4 + 4;
      });

      // Industrial Experience
      addSectionHeader("INDUSTRIAL EXPERIENCE");
      checkPageBreak(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text("Industrial Trainee  |  Transmission Company of Nigeria (TCN)", margin, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text("Jul 2021–Dec 2021, Jun–Sep 2024, Apr–Oct 2025", margin + 115, y);
      y += 5;

      const expBullets = [
        "Worked across transmission operations and the Protection, Control & Metering (PC&M) department.",
        "Assisted in preventive maintenance of high-voltage transmission infrastructure.",
        "Participated in relay testing, protection system maintenance, and equipment inspections.",
        "Gained practical experience in electrical transmission systems, engineering maintenance, and operational safety procedures."
      ];

      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      expBullets.forEach((b) => {
        const bulletLines = doc.splitTextToSize(`•  ${b}`, maxLineWidth - 3);
        checkPageBreak(bulletLines.length * 4);
        doc.text(bulletLines, margin + 2, y);
        y += bulletLines.length * 4;
      });
      y += 3;

      // Education
      addSectionHeader("EDUCATION");
      checkPageBreak(8);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text("Bachelor of Engineering (B.Eng.) – Mechatronics Engineering", margin, y);
      doc.setFont("helvetica", "normal");
      doc.text("2026", margin + 140, y);
      y += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105);
      doc.text("Air Force Institute of Technology (AFIT), Kaduna", margin, y);
      y += 75;

      // Certifications
      addSectionHeader("CERTIFICATIONS");
      checkPageBreak(6);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      doc.text("Google Data Analytics Professional Certificate", margin, y);
      y += 7.5;

      // Core Competencies
      addSectionHeader("CORE COMPETENCIES");
      checkPageBreak(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      const comps = "Backend Development  •  Machine Learning  •  Cloud Computing  •  REST API Development  •  Database Management  •  Software Development  •  Team Collaboration  •  Problem Solving  •  Analytical Thinking  •  Technical Documentation  •  Continuous Learning";
      const compLines = doc.splitTextToSize(comps, maxLineWidth);
      doc.text(compLines, margin, y);

      // Save PDF
      doc.save("ABDULAZEEZ_NURUDEEN_ADEDOTUN_RESUME.pdf");

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
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
                onClick={handleDownloadPdf}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>PDF Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{downloading ? "Generating PDF..." : "Download Resume (.pdf)"}</span>
                  </>
                )}
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

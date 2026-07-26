"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { BlogSection } from "@/components/sections/BlogSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [cmdMenuOpen, setCmdMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090909] text-zinc-100 relative bg-grid-pattern overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Header Navbar */}
      <Navbar
        onOpenCmdMenu={() => setCmdMenuOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <Hero onOpenResume={() => setResumeOpen(true)} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <BlogSection />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Interactive Command Menu (Cmd+K) */}
      <CommandMenu
        isOpen={cmdMenuOpen}
        onClose={() => setCmdMenuOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </main>
  );
}

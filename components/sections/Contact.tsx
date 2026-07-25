"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CTA & Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Initiate Contact</span>
              </span>

              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Build <br />
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-white bg-clip-text text-transparent">
                  Something Meaningful.
                </span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Whether you want to discuss backend microservices, machine learning engineering, mechatronics capstone projects, or high-throughput AI application architecture — my inbox is open.
              </p>
            </div>

            {/* Quick Copy Email Box */}
            <div className="p-4 rounded-2xl bg-[#111111] border border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">Direct Email</span>
                  <p className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono font-semibold text-zinc-500 tracking-wider">
                Professional Channels
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#111111] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-3 group"
                >
                  <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <h4 className="text-xs font-bold font-mono">GitHub</h4>
                    <span className="text-[10px] text-zinc-500">@quantumdata66</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#111111] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-3 group"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xs font-bold font-mono">LinkedIn</h4>
                    <span className="text-[10px] text-zinc-500">nurudeen-abdulazeez</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-zinc-800 shadow-2xl space-y-6"
            >
              <div className="border-b border-zinc-800/80 pb-4">
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Expect a response within 24 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Transmitted Successfully</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out, {formData.name}. I will review your message and reply to {formData.email} promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-all font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-400">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-400">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Engineering Collaboration"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-400">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, engineering scope, or role details..."
                      className="w-full px-4 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-all font-sans custom-scrollbar"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Transmission</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

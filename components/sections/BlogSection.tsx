"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Check, Send } from "lucide-react";
import { BLOG_POSTS } from "@/data/portfolioData";

export const BlogSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section id="blog" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Insights</span>
            <span className="ml-1 text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Articles & Case Notes
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            Deep-dives into backend architectures, edge machine learning, speech transcription pipelines, and database security.
          </p>
        </div>

        {/* Coming Soon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {post.tag}
                  </span>
                  <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>{post.readTime}</span>
                <span className="text-zinc-600 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  Drafting <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Waitlist Box */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#111111] border border-zinc-800 text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Subscribe for Upcoming Technical Releases</h3>
            <p className="text-xs text-zinc-400">
              Get notified when new articles on FastAPI, MLOps, and Embedded AI are published. No spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter.your.email@domain.com"
              className="flex-1 px-4 py-3 text-xs font-mono rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-500/20"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Waitlist</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

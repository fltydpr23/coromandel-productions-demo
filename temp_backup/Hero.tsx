"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10 bg-accent/20 border-2 border-accent text-accent-dark px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px]"
          >
            <TrendingUp size={14} />
            Data-Driven Storytelling
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] mb-12 tracking-tighter"
          >
            Video ads boost <br />
            intent by <span className="text-secondary italic bg-accent/10 px-4 rounded-[2rem]">97%.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-medium max-w-3xl leading-relaxed mb-16 text-muted"
          >
            Elevate your brand's story—unlock the unmatched impact of cinematic video advertising. 
            Crafted for <span className="text-black font-black underline decoration-accent decoration-4">GenZ</span> and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <a
              href="#contact"
              className="px-12 py-6 bg-black text-white rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_0px_rgba(142,194,194,1)]"
            >
              Start Project
            </a>
            <a
              href="#work"
              className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-2 border-black px-12 py-6 rounded-full hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Our Showreel
              <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <Play size={10} className="fill-current" />
              </div>
            </a>
          </motion.div>

          {/* Simple Email Input focal point as in screenshot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 w-full max-w-2xl"
          >
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Enter your email" 
                className="w-full px-10 py-6 pr-40 bg-white border-2 border-black rounded-full font-sans text-lg focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.1em] hover:bg-accent transition-colors">
                Unlock Impact
              </button>
            </div>
            <p className="mt-6 text-[10px] uppercase font-black tracking-widest text-muted/60">
              Unlock the unmatched impact of Video Advertising
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}

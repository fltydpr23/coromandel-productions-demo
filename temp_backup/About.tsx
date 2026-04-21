"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, Globe, History } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-[1px] bg-black" />
              <span className="text-black uppercase tracking-[0.5em] text-[10px] font-black">
                Our Story
              </span>
            </div>
            
            <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.85] mb-12">
              FOUNDED IN <br />
              <span className="text-secondary italic bg-accent/20 px-4 rounded-[2rem]">2016.</span> <br />
              GUIDED BY TRUTH.
            </h2>
            
            <div className="space-y-10 text-muted text-xl leading-relaxed font-medium">
              <p>
                Launched by award-winning filmmaker <span className="text-black font-black underline decoration-accent decoration-2">Veeru Murugappan</span>, 
                Coromandel Productions was built to tell stories that resonate beyond the screen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="p-8 bg-surface-2 rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center mb-6">
                    <Globe size={20} className="text-accent" />
                  </div>
                  <h4 className="font-display text-2xl mb-2 text-black">Global Partnership</h4>
                  <p className="text-sm">Strategic owners of Barn Media, UK since 2020.</p>
                </div>
                <div className="p-8 bg-surface-2 rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center mb-6">
                    <History size={20} className="text-accent" />
                  </div>
                  <h4 className="font-display text-2xl mb-2 text-black">9+ Years</h4>
                  <p className="text-sm">Decade of craft across Sports and Social Impact.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="brutalist-card relative aspect-[4/5] overflow-hidden group border-4">
              <img 
                src="/veeru.jpg" 
                alt="Veeru Murugappan" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <Quote size={48} className="text-accent mb-6" />
                <p className="font-display text-3xl italic mb-8 leading-tight">
                  "Production is the architecture of emotion. We build the structures that allow truth to speak."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-accent" />
                  <div>
                    <h5 className="font-display text-xl leading-none underline decoration-accent">Veeru Murugappan</h5>
                    <p className="text-[10px] uppercase font-black tracking-widest text-accent mt-2">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent rounded-full border-2 border-black flex items-center justify-center text-center p-6 shadow-xl animate-float">
               <span className="text-black font-black uppercase tracking-widest text-[10px] leading-tight">
                  Official <br /> Production <br /> Partner
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

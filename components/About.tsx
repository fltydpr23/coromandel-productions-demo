"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Hyper-accent glow */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold">
                The Architect
              </span>
            </div>
            
            <h2 className="font-serif text-6xl md:text-8xl text-foreground tracking-tighter mb-10 leading-[0.9]">
              FOUNDED IN <span className="text-accent italic">2016.</span> <br />
              DRIVEN BY <span className="text-primary">TRUTH.</span>
            </h2>
            
            <div className="space-y-8 text-muted text-lg leading-relaxed font-light border-l border-border pl-8">
              <p>
                Launched in 2016 by award-winning filmmaker <span className="text-foreground font-medium">Veeru Murugappan</span>, 
                Coromandel Productions emerged with a singular vision: to tell stories that resonate 
                beyond the surface level. Today, we are India&apos;s specialist studio based in 
                <span className="text-foreground font-medium"> Singapore and Chennai.</span>
              </p>
              <p>
                In 2020, we solidified our international presence by becoming <span className="text-primary italic font-medium">co-owners of Barn Media</span>, 
                a premier UK-based production house. This partnership is a defining differentiator, 
                allowing us to bridge Asian storytelling with world-class European production standards.
              </p>
              <p>
                Today, we specialize in high-impact sports features, corporate documentaries, 
                and social impact stories. We don&apos;t just point cameras; we build the architectural 
                frameworks that allow truth to speak.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-[0_0_50px_rgba(240,195,83,0.1)] border border-white/5">
              <img 
                src="/veeru.jpg" 
                alt="Veeru Murugappan" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                <Quote size={48} className="text-primary mb-8 opacity-40 shrink-0" />
                <p className="font-serif text-3xl md:text-4xl text-white italic mb-8 leading-tight tracking-tight">
                  "Production is the architecture of emotion. We build the structures that allow truth to speak."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-white">Veeru Murugappan</p>
                    <p className="text-[10px] text-primary uppercase tracking-[0.4em] mt-1 font-medium italic">Founder // Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hyper-Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full border-dashed animate-[spin_30s_linear_infinite] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

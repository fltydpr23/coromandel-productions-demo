"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Play, ArrowRight, ExternalLink } from "lucide-react";

export default function Work() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Focus only on the 6 flagship projects
  const displayProjects = projects.slice(0, 6);

  return (
    <section id="work" className="py-32 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold font-sans">
                Our Work
              </span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl text-foreground tracking-tighter leading-none">
              PRODUCTION <br />
              <span className="italic text-primary">ARCHIVES.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-xl leading-relaxed font-light">
            A curated selection of high-velocity storytelling across Sports, Corporate, and Social Impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden rounded-[2rem] shadow-2xl">
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(`https://vimeo.com/${project.vimeoId}`, "_blank")}
              className="group relative aspect-[16/10] bg-surface-2 overflow-hidden cursor-pointer"
            >
              {/* Thumbnail Image */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  hoveredId === project.id ? "scale-110 blur-sm opacity-20" : "scale-100 opacity-60 group-hover:opacity-80"
                }`}
              />

              {/* Vimeo Video Hover State (Hidden on Mobile for Performance) */}
              <AnimatePresence>
                {hoveredId === project.id && project.vimeoId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 p-2 hidden lg:block"
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <iframe
                        src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&loop=1&background=1&muted=1`}
                        className="w-full h-full object-cover scale-[1.2]"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end pointer-events-none">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block font-sans">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl text-white group-hover:text-primary transition-colors mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-700 mb-6" />
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-sans">Play Narrative</span>
                    <Play size={14} className="text-primary fill-current" />
                  </div>
                </div>
              </div>

              {/* Grain/Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center text-center"
        >
          <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent mb-10" />
          <h4 className="font-serif text-4xl text-foreground mb-8 text-center px-4">
            WANT TO SEE THE <span className="italic text-primary">FULL RANGE?</span>
          </h4>
          <a
            href="https://vimeo.com/coromandelproductions"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 px-12 py-6 border border-foreground/10 rounded-full hover:border-primary transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-foreground font-bold">Explore Full Archives</span>
            <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-500">
              <ExternalLink size={18} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

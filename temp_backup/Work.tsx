"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { projects } from "@/data/projects";

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-7xl md:text-9xl leading-[0.8] mb-10 tracking-tighter">
              THE <span className="text-secondary italic bg-accent/20 px-4 rounded-[2rem]">WORK.</span>
            </h2>
            <p className="text-xl text-muted font-medium">
              We don't just make videos; we build visual legacies for global brands in sports and beyond.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <ArrowLeft size={32} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <ArrowRight size={32} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto no-scrollbar px-6 md:px-[10vw] pb-20"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] group"
          >
            <div className="relative aspect-[16/10] brutalist-card overflow-hidden group">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
                  <h3 className="font-display text-4xl">{project.title}</h3>
                </div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                  <Play size={20} className="fill-current" />
                </div>
              </div>
            </div>
            <div className="mt-8 px-4">
              <p className="text-muted font-medium text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

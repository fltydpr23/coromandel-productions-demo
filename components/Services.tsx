"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Building2, Heart, Film, Sparkles, ArrowUpRight, Play } from "lucide-react";

const services = [
  {
    title: "Sports Features",
    description: "Capturing the intensity, triumph, and soul of competition with top-tier cinematography.",
    icon: Trophy,
    category: "01ACTION",
    image: "/work-sports.png"
  },
  {
    title: "Corporate Identity",
    description: "Elevating brand identity through cinematic storytelling that connects with modern audiences.",
    icon: Building2,
    category: "02IDENTITY",
    image: "/work-corporate.png"
  },
  {
    title: "Impact Stories",
    description: "Films from the heart. Documenting stories that drive change and move the needle.",
    icon: Heart,
    category: "PURPOSE",
    image: "/work-documentary.png"
  },
  {
    title: "Documentaries",
    description: "In-depth, unscripted narratives that explore the human condition beyond the lens.",
    icon: Film,
    category: "NARRATIVE",
    image: "/work-bat-maker.png"
  },
  {
    title: "Original Content",
    description: "Conceptualizing and producing original IP and scripted content that pushes boundaries.",
    icon: Sparkles,
    category: "CREATION",
    image: "/work-sports.png"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-40 bg-background relative overflow-hidden">
      {/* Background Hyper-Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 blur-[160px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Our Capabilities
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-8">
              DYNAMIC <br />
              <span className="italic text-accent">CRAFT.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl font-light">
              We leverage a decade of experience and global reach to add value wherever the story leads. 
              From action-packed sports to intimate impact stories.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="hidden lg:block w-52 h-52 relative group cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text className="text-[6.5px] uppercase tracking-[0.3em] font-black fill-primary/30 group-hover:fill-primary transition-colors duration-700">
                  <textPath href="#circlePath">
                    TRUTH BEYOND THE LENS • ESTABLISHED 2016 • CINEMATIC STORIES •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/20 transition-colors duration-700">
                <ArrowUpRight className="text-accent group-hover:text-primary transition-all duration-700 group-hover:scale-110" size={40} />
              </div>
            </div>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-background/80 backdrop-blur-md p-12 lg:p-20 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 transition-all duration-700 hover:bg-surface-2 cursor-pointer border-b border-white/5 last:border-b-0 overflow-hidden"
            >
              {/* Liquid Image Reveal Background */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    exit={{ clipPath: "inset(0 0 0 100%)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 shrink-0 z-10">
                <div className={`absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700`} />
                <service.icon className="w-12 h-12 lg:w-16 lg:h-16 text-accent group-hover:text-primary transition-all duration-700 relative z-10" />
              </div>

              <div className="flex-1 z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-6 block font-bold">
                  {service.category}
                </span>
                <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground group-hover:text-accent transition-all duration-700 tracking-tighter">
                  {service.title}
                </h3>
              </div>

              <div className="max-w-sm ml-auto z-10">
                <p className="text-lg text-muted group-hover:text-foreground transition-colors duration-700 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-primary font-bold text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x--4 group-hover:translate-x-0">
                  Detailed Scope <Play size={12} fill="currentColor" />
                </div>
              </div>

              {/* Animated Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top z-20" />
            </motion.div>
          ))}

          {/* Custom CTA Row */}
          <div className="p-20 bg-primary/90 flex flex-col lg:flex-row items-center justify-between gap-12 group cursor-pointer transition-all duration-700 hover:bg-primary">
            <h3 className="font-serif text-5xl md:text-7xl text-background tracking-tighter leading-none">
              HAVE A DIFFERENT <br /> <span className="italic">VISION?</span>
            </h3>
            <div className="flex flex-col items-center lg:items-end gap-10">
              <p className="text-xl text-background/80 max-w-sm text-center lg:text-right font-medium">
                We handle bespoke productions for agencies and brands worldwide.
              </p>
              <a href="#contact" className="px-12 py-6 bg-background text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Discuss Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

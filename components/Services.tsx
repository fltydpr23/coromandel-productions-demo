"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Trophy, Building2, Heart, Film, Sparkles, ArrowUpRight, Play } from "lucide-react";

const services = [
  {
    title: "Sports Features",
    description: "Capturing the intensity, triumph, and soul of competition with top-tier cinematography.",
    icon: Trophy,
    category: "01 // ACTION",
    image: "/work-sports.png"
  },
  {
    title: "Corporate Identity",
    description: "Elevating brand identity through cinematic storytelling that connects with modern audiences.",
    icon: Building2,
    category: "02 // IDENTITY",
    image: "/work-corporate.png"
  },
  {
    title: "Impact Stories",
    description: "Films from the heart. Documenting stories that drive change and move the needle.",
    icon: Heart,
    category: "03 // PURPOSE",
    image: "/work-documentary.png"
  },
  {
    title: "Documentaries",
    description: "In-depth, unscripted narratives that explore the human condition beyond the lens.",
    icon: Film,
    category: "04 // NARRATIVE",
    image: "/work-bat-maker.png"
  },
  {
    title: "Original Content",
    description: "Conceptualizing and producing original IP and scripted content that pushes boundaries.",
    icon: Sparkles,
    category: "05 // CREATION",
    image: "/work-sports.png"
  }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Horizontal Moving Content */}
        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 items-center">
          {/* Section Introduction Card */}
          <div className="flex flex-col justify-center min-w-[70vw] md:min-w-[40vw] mr-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Our Capabilities
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-12">
              DYNAMIC <br />
              <span className="italic text-accent">CRAFT.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl font-light mb-12">
              We leverage a decade of experience and global reach to add value wherever the story leads. 
              From action-packed sports to intimate impact stories.
            </p>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-48 h-48 relative group cursor-pointer"
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
                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/20 transition-colors duration-700">
                  <ArrowUpRight className="text-accent group-hover:text-primary transition-all duration-700 group-hover:scale-110" size={32} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

          {/* Final CTA Card */}
          <div className="min-w-[80vw] h-[70vh] bg-primary/90 flex flex-col items-center justify-center p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent)] group-hover:scale-150 transition-transform duration-1000" />
             <h3 className="font-serif text-6xl md:text-[8rem] text-background tracking-tighter leading-none text-center relative z-10 mb-12">
               HAVE A DIFFERENT <br /> <span className="italic">VISION?</span>
             </h3>
             <p className="text-xl md:text-2xl text-background/80 max-w-xl text-center font-medium relative z-10 mb-12">
               We handle bespoke productions for agencies and brands worldwide.
             </p>
             <a href="#contact" className="relative z-10 px-16 py-8 bg-background text-primary rounded-full text-sm font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl">
               Discuss Project
             </a>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-24 right-24 h-px bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full w-full bg-primary origin-left"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-w-[80vw] h-[70vh] bg-surface-2 rounded-[3rem] border border-white/5 overflow-hidden group cursor-pointer flex flex-col md:flex-row shadow-2xl"
    >
      {/* Background Image Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-40"
          style={{
            scale: isHovered ? 1.05 : 1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end p-12 md:p-20 w-full md:w-1/2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-6 block font-bold">
          {service.category}
        </span>
        <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white group-hover:text-accent transition-all duration-700 tracking-tighter mb-8 leading-tight">
          {service.title}
        </h3>
        <p className="text-lg md:text-xl text-muted group-hover:text-foreground transition-colors duration-700 leading-relaxed font-light">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-center p-12 md:p-20 md:w-1/2">
        <div className="relative w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000" />
          <service.icon className="w-16 h-16 lg:w-24 lg:h-24 text-accent group-hover:text-primary transition-all duration-700 relative z-10" />
          
          {/* Animated Circle for Icon */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
             <circle 
               cx="50%" cy="50%" r="48%" 
               className="stroke-primary/20 fill-none" 
               strokeWidth="1" 
             />
             <motion.circle 
               cx="50%" cy="50%" r="48%" 
               className="stroke-primary fill-none" 
               strokeWidth="2"
               strokeDasharray="100 100"
               initial={{ strokeDashoffset: 100 }}
               animate={{ strokeDashoffset: isHovered ? 0 : 100 }}
               transition={{ duration: 1, ease: "easeInOut" }}
             />
          </svg>
        </div>
      </div>

      {/* Interactive Liquid reveal accent line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
        className="absolute left-0 bottom-0 w-2 bg-primary z-20"
      />
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Building2, Heart, Film, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Sports Features",
    description: "Capturing the intensity, triumph, and soul of competition with legacy-grade cinematography.",
    icon: Trophy,
    category: "01",
  },
  {
    title: "Corporate Films",
    description: "Elevating brand identity through cinematic storytelling that resonates with modern audiences.",
    icon: Building2,
    category: "02",
  },
  {
    title: "Impact Stories",
    description: "Films from the heart. Documenting stories that move the needle on global issues.",
    icon: Heart,
    category: "03",
  },
  {
    title: "Original Content",
    description: "Concept-to-delivery production for brands and agencies looking for a distinctive edge.",
    icon: Sparkles,
    category: "04",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-surface-2 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-black font-black mb-10"
          >
            Our Capabilities
          </motion.div>
          <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.8] mb-12">
            WE MAKE VIDEOS <br />
            THAT <span className="text-secondary italic bg-accent/20 px-4 rounded-[2rem]">HAVE IMPACT.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted font-medium max-w-2xl">
            From the heat of action in Vietnam to corporate headquarters in Singapore, 
            we bring a decade of expertise to every frame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="brutalist-card p-12 group flex flex-col justify-between min-h-[400px]"
            >
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 bg-accent/10 border-2 border-black rounded-3xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <service.icon size={36} className="text-black" />
                </div>
                <span className="font-display text-7xl text-black/10 group-hover:text-accent transition-colors">{service.category}</span>
              </div>
              
              <div>
                <h3 className="font-display text-5xl mb-6">{service.title}</h3>
                <p className="text-lg text-muted font-medium leading-relaxed mb-10">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-accent transition-colors">
                  Full Details <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="p-16 bg-black text-white rounded-[2.5rem] flex flex-col justify-center items-center text-center group cursor-pointer md:col-span-2 mt-10 shadow-[8px_8px_0px_0px_rgba(142,194,194,1)]">
            <h3 className="font-display text-5xl md:text-7xl mb-8 tracking-tighter">
              READY TO <br /> <span className="italic text-accent underline decoration-white/20">START YOURS?</span>
            </h3>
            <a href="#contact" className="pill-button bg-white text-black hover:bg-accent">
              Let's Talk Production
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

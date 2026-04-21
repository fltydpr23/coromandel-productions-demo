"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";

export default function Contact() {
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  const contactInfo = [
    { id: "email", icon: Mail, label: "Email Us", value: "hello@coromandel.sg", sub: "Response within 24h" },
    { id: "phone", icon: Phone, label: "Call Us", value: "+65 6812 5888", sub: "Singapore HQ" },
    { id: "location", icon: MapPin, label: "Our Studio", value: "International Plaza, SG", sub: "Global Partnership" },
  ];

  return (
    <section id="contact" className="py-40 bg-background relative overflow-hidden">
      {/* Dynamic Background Noise & Gradients */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[80%] h-full bg-accent/5 blur-[160px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-10 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full"
            >
              <Zap size={12} className="text-primary animate-pulse" />
              <span className="text-primary uppercase tracking-[0.5em] text-[9px] font-black py-1">
                Start a Conversation
              </span>
            </motion.div>

            <h2 className="font-serif text-7xl md:text-9xl text-foreground tracking-tighter leading-[0.85] mb-12">
              LET'S START <br />
              YOUR <span className="italic text-accent">LEGACY.</span>
            </h2>

            <p className="text-muted text-xl mb-16 max-w-sm leading-relaxed font-light">
              Booking for Q3 2026. Join the ranks of global brands shaping narratives with us.
            </p>

            <div className="space-y-10">
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.id}
                  onMouseEnter={() => setHoveredInfo(info.id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  className="group flex items-center gap-8 cursor-pointer"
                >
                  <div className="relative w-16 h-16 shrink-0 border border-border rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary/5 overflow-hidden">
                    <info.icon size={20} className="text-foreground group-hover:text-primary transition-colors duration-500" />
                    {hoveredInfo === info.id && (
                      <motion.div 
                        layoutId="contact-glow"
                        className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-1">{info.label}</p>
                    <p className="font-serif text-3xl text-foreground group-hover:text-accent transition-colors flex items-center gap-3">
                      {info.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-2">{info.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="bg-surface-2 border border-white/5 p-12 md:p-20 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Internal Accent Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
              
              <form className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="YOUR NAME" 
                      className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="YOUR@EMAIL.COM" 
                      className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">What are we building?</label>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {["Sports", "Corporate", "Social", "Doc", "Scripted"].map((cat) => (
                      <label key={cat} className="group relative cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-muted transition-all duration-500 peer-checked:bg-primary peer-checked:text-background peer-checked:border-primary peer-checked:shadow-[0_0_20px_rgba(241,111,36,0.4)]">
                          {cat}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">Tell us about your project</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us what you're thinking..." 
                    className="w-full bg-transparent border-b border-border pb-6 focus:outline-none focus:border-primary transition-colors text-foreground font-serif text-2xl placeholder:text-muted/30 resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-background py-8 rounded-full text-[12px] font-black uppercase tracking-[0.5em] hover:bg-accent transition-all duration-700 flex items-center justify-center gap-6 shadow-[0_0_40px_rgba(241,111,36,0.3)] hover:shadow-[0_0_40px_rgba(240,195,83,0.3)]"
                >
                  SEND MESSAGE
                  <Send size={18} className="animate-[bounce_2s_infinite]" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

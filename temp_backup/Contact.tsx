"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-[1px] bg-black" />
              <span className="text-black uppercase tracking-[0.5em] text-[10px] font-black">
                Get In Touch
              </span>
            </div>
            
            <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.85] mb-12">
              START YOUR <br />
              <span className="text-secondary italic bg-accent/20 px-4 rounded-[2rem]">LEGACY.</span>
            </h2>

            <p className="text-xl text-muted font-medium mb-16 leading-relaxed">
              We're currently booking productions for late 2026. 
              Let's discuss how we can elevate your brand through cinema.
            </p>

            <div className="space-y-12">
              <div className="group flex items-center gap-8 cursor-pointer">
                <div className="w-16 h-16 border-2 border-black rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold mb-1">Email Us</p>
                  <p className="font-display text-3xl text-black">hello@coromandel.sg</p>
                </div>
              </div>

              <div className="group flex items-center gap-8 cursor-pointer">
                <div className="w-16 h-16 border-2 border-black rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold mb-1">Call HQ</p>
                  <p className="font-display text-3xl text-black">+65 6812 5888</p>
                </div>
              </div>

              <div className="group flex items-center gap-8 cursor-pointer">
                <div className="w-16 h-16 border-2 border-black rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold mb-1">Location</p>
                  <p className="font-display text-3xl text-black">International Plaza, SG</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brutalist-card p-12 md:p-20 shadow-[12px_12px_0px_0px_rgba(142,194,194,1)] border-4"
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-black font-black">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b-2 border-black/10 pb-6 focus:outline-none focus:border-accent transition-colors font-display text-2xl placeholder:text-muted/30"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-black font-black">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@email.com" 
                    className="w-full bg-transparent border-b-2 border-black/10 pb-6 focus:outline-none focus:border-accent transition-colors font-display text-2xl placeholder:text-muted/30"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] uppercase tracking-[0.4em] text-black font-black">Project Type</label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["Sports", "Corporate", "Social", "Doc", "Commercial"].map((cat) => (
                    <label key={cat} className="group relative cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="px-6 py-3 border-2 border-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black text-black transition-all peer-checked:bg-accent peer-checked:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent/10">
                        {cat}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-black font-black">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about the project vision..." 
                  className="w-full bg-transparent border-b-2 border-black/10 pb-6 focus:outline-none focus:border-accent transition-colors font-display text-2xl placeholder:text-muted/30 resize-none"
                />
              </div>

              <button className="w-full bg-black text-white py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-6 shadow-[8px_8px_0px_0px_rgba(142,194,194,1)] group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

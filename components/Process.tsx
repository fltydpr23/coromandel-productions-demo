"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "We start with a 15-minute call to understand your goals, audience, and the emotional core of the project.",
  },
  {
    num: "02",
    title: "Treatment",
    description: "Our creative directors develop a visual direction and narrative treatment for your approval within 3 days.",
  },
  {
    num: "03",
    title: "Pre-Production",
    description: "Shot listing, scripting, location scouting, and permits. We handle the logistics so you don't have to.",
  },
  {
    num: "04",
    title: "Production",
    description: "The shoot day. Using high-end units (ARRI/RED) and a tailored crew to capture the vision safely.",
  },
  {
    num: "05",
    title: "Post-Production",
    description: "Editing, color grading, sound design, and VFX. We deliver the first cut within 10 working days.",
  },
  {
    num: "06",
    title: "Delivery",
    description: "Two rounds of collaborative amends via our online portal, followed by master delivery in all formats.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20 text-center mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">
              The Journey
            </span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Roadmap to <br />
            <span className="italic text-primary">Delivery.</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Professional filmmaking is a structured art. We've refined our process 
            over 10+ years to ensure quality, transparency, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Decorative line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="flex items-end gap-4 mb-6">
                <span className="text-6xl font-serif font-light text-primary/10 group-hover:text-primary/30 transition-colors duration-500 leading-none">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors mb-2">
                  {step.title}
                </h3>
              </div>
              <div className="pl-0 md:pl-2">
                <p className="text-muted text-sm leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {step.description}
                </p>
              </div>
              
              {/* Connector dot for decoration */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: `${(index) * 33.3 + 16.6}%` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

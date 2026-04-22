"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Calculator } from "lucide-react";

const tiers = [
  {
    name: "Development",
    price: "Workshop Basis",
    description: "Initial creative session, concept direction, and feasibility study.",
    features: [
      "Initial Consultation",
      "Creative Workshop",
      "Visual Treatment Deck",
      "Resource Planning",
    ],
    cta: "Inquire for Scope",
    highlight: false,
  },
  {
    name: "Production",
    price: "Project Based",
    description: "Our signature format. Full end-to-end cinematic storytelling.",
    features: [
      "All from Development",
      "Scripting & Storyboarding",
      "Professional Multi-man Crew",
      "Cinematic Post-Production",
      "Hero Narrative (2-4 mins)",
      "Multi-platform Deliverables",
    ],
    cta: "Request a Quote",
    highlight: true,
  },
  {
    name: "Campaign",
    price: "Bespoke Strategy",
    description: "Ambitious content series and global brand identities.",
    features: [
      "Everything in Production",
      "Expanded Creative Direction",
      "Multi-location Sourcing",
      "Advanced Motion & VFX",
      "Global Broadcast Specs",
      "Campaign Performance Audit",
    ],
    cta: "Discuss Strategy",
    highlight: false,
  },
];

const addons = [
  { name: "Video SEO Strategy", price: "Custom Quote" },
  { name: "Aerial / Drone Cinematography", price: "Project Based" },
  { name: "Global Location Scouting", price: "Bespoke" },
  { name: "Fast-Track Post-Production", price: "Rush Terms" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        03
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
                Investment
              </span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl text-foreground tracking-tighter leading-[0.85] mb-8">
              BESPOKE <br />
              <span className="italic text-primary">VALUATION.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl font-light">
              Cinematic storytelling is an inherently bespoke endeavor. We approach every project as a unique narrative challenge, crafting tailored production frameworks that align precisely with your brand&apos;s ambitions and technical scope.
            </p>
          </div>
          
          <div className="bg-surface-2 border border-white/5 p-8 rounded-3xl backdrop-blur-md max-w-xs">
            <Calculator className="text-primary mb-4" size={24} />
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">The Production Framework</p>
            <p className="text-xs text-white/60 leading-relaxed italic">
              "We prioritize financial transparency while honoring the creative process. Every quote is engineered around the specific technical requirements, crew expertise, and post-production depth your narrative demands."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[2.5rem] border flex flex-col min-h-[600px] transition-all duration-700 group ${
                tier.highlight 
                  ? "bg-primary text-background border-primary shadow-[0_0_80px_rgba(241,111,36,0.15)]" 
                  : "bg-surface-2 border-white/5 text-foreground hover:border-primary/30"
              }`}
            >
              <h3 className="font-serif text-3xl mb-2">{tier.name}</h3>
              <div className="text-3xl font-serif font-bold mb-8 opacity-80">
                {tier.price}
              </div>
              <p className={`text-base mb-12 font-light leading-relaxed ${tier.highlight ? "text-background/70" : "text-muted"}`}>
                {tier.description}
              </p>
              
              <ul className="mb-12 flex-grow space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <Check size={16} className={`shrink-0 ${tier.highlight ? "text-background" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group/btn relative w-full py-6 rounded-full text-center text-[11px] font-black uppercase tracking-[0.4em] transition-all overflow-hidden ${
                  tier.highlight 
                    ? "bg-background text-primary" 
                    : "border border-primary text-primary"
                }`}
              >
                <div className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ${tier.highlight ? "bg-white" : "bg-primary"}`} />
                <span className={`relative z-10 transition-colors duration-500 ${tier.highlight ? "group-hover/btn:text-primary" : "group-hover/btn:text-background"}`}>
                  {tier.cta}
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Specialized Production Capabilities */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-2 border border-white/5 p-12 md:p-20 rounded-[3rem] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
            
            <h3 className="font-serif text-3xl md:text-4xl mb-12 text-center">Specialized <span className="italic text-primary">Capabillities.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
              {addons.map((addon) => (
                <div key={addon.name} className="flex justify-between items-center pb-6 border-b border-white/5 group">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted group-hover:text-primary transition-colors">{addon.name}</span>
                  <span className="font-serif text-primary text-lg italic">{addon.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-muted font-bold">
                * Logistics, Licensing, and Talent fees are scoped per territory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


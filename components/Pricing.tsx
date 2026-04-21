"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Development",
    price: "Free",
    description: "Initial creative workshop and concept direction.",
    features: [
      "Initial Consultation",
      "Creative Workshop",
      "Visual Deck",
      "Project Estimate",
    ],
    cta: "Book Workshop",
    highlight: false,
  },
  {
    name: "Production",
    price: "$6,000+",
    description: "Our core format. Full end-to-end cinematic production.",
    features: [
      "All from Development",
      "Scripting & Storyboarding",
      "Professional 2-man Crew",
      "Cinematic Post-Production",
      "Hero Film (2-4 mins)",
      "2 Social Media Cuts",
    ],
    cta: "Start Production",
    highlight: true,
  },
  {
    name: "Campaign",
    price: "$15,000+",
    description: "Ambitious content series for global brands.",
    features: [
      "Everything in Production",
      "Expanded Creative Treatment",
      "Multi-location Sourcing",
      "Motion Graphics & VFX",
      "Multiple Deliverables",
      "Broadcast Compliance",
    ],
    cta: "Build Campaign",
    highlight: false,
  },
];

const addons = [
  { name: "Video SEO Strategy", price: "From $800" },
  { name: "Aerial / Drone Cinematography", price: "From $1,200" },
  { name: "Global Location Scouting", price: "From $1,500" },
  { name: "Fast-Track Delivery (24h)", price: "+20%" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        03
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">
              Investment
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Transparent <br />
            <span className="italic text-primary">Budgeting.</span>
          </h2>
          <p className="text-muted leading-relaxed">
            High-end production requires intentional investment. We provide clear, 
            tier-based pricing to ensure your vision matches your reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 border flex flex-col min-h-[500px] transition-all duration-500 ${
                tier.highlight 
                  ? "bg-primary text-background border-primary" 
                  : "bg-surface-2 border-white/10 text-foreground hover:border-primary/50"
              }`}
            >
              <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
              <div className="text-4xl font-serif font-bold mb-6">
                {tier.price}
              </div>
              <p className={`text-sm mb-10 ${tier.highlight ? "text-background/80" : "text-muted"}`}>
                {tier.description}
              </p>
              
              <ul className="mb-10 flex-grow space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs uppercase tracking-widest font-medium">
                    <Check size={14} className="mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 text-center text-[10px] font-bold uppercase tracking-widest transition-all ${
                  tier.highlight 
                    ? "bg-background text-primary border-2 border-background hover:bg-transparent hover:text-background" 
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-background"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section - HONORS THE "FULL MENU" FROM ORIGINAL HTML */}
        <div className="max-w-4xl mx-auto bg-background/50 border border-white/10 p-12 backdrop-blur-sm">
          <h3 className="font-serif text-2xl mb-8 text-center italic">A-La-Carte // Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {addons.map((addon) => (
              <div key={addon.name} className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted">{addon.name}</span>
                <span className="font-serif text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
              *All projects incur a local logistics fee based on location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

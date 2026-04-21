"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "ICC", type: "text", color: "#0055A4" },
  { name: "Infosys", type: "text", color: "#007CC3" },
  { name: "Food from the Heart", type: "text", color: "#E31B23" },
  { name: "BVB 09", type: "text", color: "#FDE100" },
  { name: "World Bank Group", type: "text", color: "#0072BC" },
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 justify-center">
          <div className="h-[1px] w-12 bg-primary/30" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted font-bold text-center">
            Trusted by Global Giants
          </span>
          <div className="h-[1px] w-12 bg-primary/30" />
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center hover:pause-animation">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="mx-12 lg:mx-20 flex items-center gap-4 cursor-pointer"
            >
              <div className="font-serif text-3xl lg:text-5xl text-foreground/20 hover:text-primary transition-all duration-700 hover:scale-110 tracking-tighter filter grayscale group-hover:grayscale-0">
                {partner.name}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

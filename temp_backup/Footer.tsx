"use client";

import React from "react";
import { Globe, Mail, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-40 pb-12 border-t-4 border-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="relative w-20 h-20 block mb-10 group">
              <Image
                src="/logo-small.png"
                alt="Coromandel"
                fill
                className="object-contain transition-transform group-hover:rotate-12"
              />
            </div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tighter mb-8 max-w-sm">
              CINEMATIC <span className="text-secondary italic bg-accent/20 px-2 rounded-xl">LEGACIES</span> <br />
              CRAFTED FROM SINGAPORE.
            </h3>
            <p className="text-lg text-muted font-medium max-w-sm leading-relaxed mb-10">
              An award-winning video production house crafting narratives that last. 
              Partnered with Barn Media, UK.
            </p>
            <div className="flex gap-4">
              {[Globe, X, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 border-2 border-black rounded-xl flex items-center justify-center hover:bg-accent transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Icon size={20} className="text-black" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-black mb-10">Explore</h4>
            <ul className="space-y-6">
              {["Services", "Work", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-display text-2xl text-black hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-black mb-10">Official</h4>
            <ul className="space-y-6">
              {["Privacy Policy", "Cookie Policy", "Legal Disclosure"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-display text-2xl text-black hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-muted/60">
            &copy; {currentYear} Coromandel Productions. All Perspectives Reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-black px-4 py-2 border-2 border-black rounded-lg bg-accent/20">Singapore HQ</span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-black px-4 py-2 border-2 border-black rounded-lg bg-surface-2">UK Partnership</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

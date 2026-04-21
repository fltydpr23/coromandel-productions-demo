"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, Share2, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="font-serif text-3xl font-bold tracking-tight text-foreground block mb-6"
            >
              COROMANDEL<span className="text-primary italic ml-1">PRODUCTIONS</span>
            </Link>
            <p className="text-muted max-w-sm leading-relaxed mb-8">
              An award-winning video production house crafting cinematic legacies from Singapore. 
              Proud co-owners of Barn Media, UK.
            </p>
            <div className="flex gap-6">
              {[Globe, Mail, Share2, X].map((Icon, i) => (
                <a key={i} href="#" className="text-muted hover:text-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Services", "Works", "Process", "Pricing", "About"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Cookie Policy", "Health & Safety", "Insurance"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
            &copy; {currentYear} Coromandel Productions. All Cinematic Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
             <span className="text-[10px] uppercase tracking-[0.3em] text-muted decoration-primary underline underline-offset-4">Singapore HQ</span>
             <span className="text-[10px] uppercase tracking-[0.3em] text-muted underline underline-offset-4 decoration-primary">UK Partnership</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

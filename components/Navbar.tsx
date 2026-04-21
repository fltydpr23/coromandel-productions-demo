"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Globe } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Archive", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Studio", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "py-4" : "py-6 lg:py-10"}`}>
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between px-8 py-2 rounded-full border transition-all duration-700 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo Section */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-40 h-16 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Coromandel Productions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/50 hover:text-primary transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            
            <ThemeToggle />

            <a
              href="#contact"
              className="relative px-8 py-3 bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden group"
            >
              <span className="relative z-10 transition-colors group-hover:text-background">Start Production</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-50 flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo.png"
                  alt="Coromandel"
                  fill
                  className="object-contain"
                />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-foreground" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-6xl font-bold tracking-tighter hover:text-primary transition-colors italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 text-foreground/50 mb-6">
                <Globe size={16} />
                <span className="text-xs uppercase tracking-widest">Global HQ — Singapore</span>
              </div>
              <p className="font-serif text-xl italic text-foreground/80">"Stories from the heart. Beyond the lens."</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

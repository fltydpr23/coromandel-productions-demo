"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <TrustBar />
        <Services />
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

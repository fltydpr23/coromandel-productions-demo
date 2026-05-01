"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import GlobalMap from "@/components/GlobalMap";
import Clients from "@/components/Clients";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
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
        <GlobalMap />
        <Clients />
        <Process />
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

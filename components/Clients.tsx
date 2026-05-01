"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    id: "icc",
    name: "ICC",
    logo: "/client logos/icc-logo.png",
    context: "ICC Cricket World Cup — Highlights & Feature Films",
    location: "Global",
  },
  {
    id: "world-bank",
    name: "World Bank",
    logo: "/client logos/World_Bank-Logo.png",
    context: "Social Impact Documentary — Vietnam & India",
    location: "Asia Pacific",
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "/client logos/infosys-logo.jpg",
    context: "Corporate Brand Film — Bengaluru",
    location: "India",
  },
  {
    id: "bvb",
    name: "Borussia Dortmund",
    logo: "/client logos/Borussia_Dortmund_logo.png",
    context: "BVB Asia Tour 2020 — Official Highlights",
    location: "Singapore & Asia",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(241,111,36,0.03),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Trusted By
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-foreground tracking-tighter leading-[0.85]">
              THE WORLD&apos;S <br />
              <span className="italic text-primary">BEST.</span>
            </h2>
          </div>
          <p className="text-muted text-xl leading-relaxed max-w-sm font-light">
            From global sports governing bodies to international development banks — we've told the stories that matter.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-background flex flex-col items-center justify-center p-12 md:p-16 hover:bg-surface-2 transition-all duration-500 cursor-default"
            >
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Logo */}
              <div className="relative w-40 h-20 mb-8 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Context */}
              <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-[9px] uppercase tracking-[0.4em] text-primary font-bold mb-2">{client.location}</p>
                <p className="text-xs text-muted font-light leading-relaxed max-w-[160px]">{client.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
            + Many more across Sports, CSR, and Entertainment
          </p>
        </motion.div>
      </div>
    </section>
  );
}

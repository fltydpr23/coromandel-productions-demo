"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { MapPin } from "lucide-react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Location {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  role: string;
  detail: string;
  isHQ?: boolean;
}

const locations: Location[] = [
  {
    id: "singapore",
    name: "Singapore",
    country: "SG",
    coordinates: [103.8198, 1.3521],
    role: "Global HQ",
    detail: "Primary production base & client servicing hub.",
    isHQ: true,
  },
  {
    id: "chennai",
    name: "Chennai",
    country: "IN",
    coordinates: [80.2707, 13.0827],
    role: "India Studio",
    detail: "South Asia production & post-production operations.",
    isHQ: true,
  },
  {
    id: "london",
    name: "London",
    country: "UK",
    coordinates: [-0.1276, 51.5074],
    role: "Barn Media UK — Co-Owners",
    detail: "European content strategy & co-production partner.",
    isHQ: true,
  },
  {
    id: "auckland",
    name: "Auckland",
    country: "NZ",
    coordinates: [174.7633, -36.8485],
    role: "Production",
    detail: "Filming location & regional production partner.",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    coordinates: [55.2708, 25.2048],
    role: "Production",
    detail: "MENA region production & client access.",
  },
];

// Connection lines from Singapore HQ to all other nodes
const connections = locations
  .filter((l) => l.id !== "singapore")
  .map((l) => ({
    from: [103.8198, 1.3521] as [number, number],
    to: l.coordinates,
    targetId: l.id,
  }));

export default function GlobalMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <section id="global" className="py-40 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(241,111,36,0.04),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-8"
            >
              Global Reach
            </motion.div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-foreground tracking-tighter leading-[0.85]">
              A GLOBAL <br />
              <span className="italic text-primary">STUDIO.</span>
            </h2>
          </div>
          <p className="text-muted text-xl leading-relaxed max-w-sm font-light">
            Five continents. One cinematic vision. We produce wherever the story demands.
          </p>
        </div>

        <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/5 bg-[#080808] shadow-[0_0_120px_rgba(0,0,0,0.8)]">
          {/* Map */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 160, center: [30, 10] }}
            className="w-full"
            style={{ height: "600px" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#111111"
                    stroke="#1a1a1a"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#1a1a1a", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Animated connection lines */}
            {connections.map((conn, i) => (
              <Line
                key={i}
                from={conn.from}
                to={conn.to}
                stroke="rgba(241,111,36,0.2)"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            ))}

            {/* Location markers */}
            {locations.map((loc) => (
              <Marker
                key={loc.id}
                coordinates={loc.coordinates}
                onClick={() => setActiveLocation(activeLocation?.id === loc.id ? null : loc)}
              >
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulsing ring for HQ nodes */}
                  {loc.isHQ && (
                    <motion.circle
                      r={14}
                      fill="transparent"
                      stroke="rgba(241,111,36,0.4)"
                      strokeWidth={1}
                      animate={{ r: [10, 18, 10], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <circle
                    r={loc.isHQ ? 6 : 4}
                    fill={activeLocation?.id === loc.id ? "#f16f24" : loc.isHQ ? "#f16f24" : "#5a4a3a"}
                    stroke={loc.isHQ ? "#f16f24" : "#3a2a1a"}
                    strokeWidth={1.5}
                  />
                  {/* Label */}
                  <text
                    textAnchor="middle"
                    y={-12}
                    style={{
                      fontSize: "7px",
                      fontFamily: "sans-serif",
                      fontWeight: "700",
                      fill: activeLocation?.id === loc.id ? "#f16f24" : "#666",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {loc.name}
                  </text>
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>

          {/* Location Detail Tooltip */}
          <AnimatePresence>
            {activeLocation && (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-8 left-8 bg-black/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[9px] uppercase tracking-[0.4em] text-primary font-black">{activeLocation.role}</span>
                </div>
                <p className="font-serif text-2xl text-white mb-2">{activeLocation.name}, {activeLocation.country}</p>
                <p className="text-white/50 text-xs leading-relaxed">{activeLocation.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-[8px] uppercase tracking-widest text-white/40">Studio Hubs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#5a4a3a]" />
              <span className="text-[8px] uppercase tracking-widest text-white/40">Production Locations</span>
            </div>
          </div>
        </div>

        {/* Location pills row */}
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          {locations.map((loc) => (
            <motion.button
              key={loc.id}
              onClick={() => setActiveLocation(activeLocation?.id === loc.id ? null : loc)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
                activeLocation?.id === loc.id
                  ? "bg-primary text-background border-primary"
                  : "border-white/10 text-muted hover:border-primary/30 hover:text-primary"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin size={10} />
              {loc.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

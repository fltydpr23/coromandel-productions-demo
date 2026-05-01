"use client";

import { motion } from "framer-motion";
import { projects, categoryMeta } from "@/data/projects";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const meta = categoryMeta[category];
  const categoryProjects = projects.filter((p) => p.slug === category);

  if (!meta) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted font-serif text-2xl">Category not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#services"
          className="group flex items-center gap-3 text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Back to Capabilities</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(241,111,36,0.08),transparent_60%)]" />
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold mb-6"
          >
            {meta.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-7xl md:text-[10rem] text-foreground tracking-tighter leading-[0.85] mb-8"
          >
            {meta.label.split(" ")[0]} <br />
            <span className="italic text-primary">{meta.label.split(" ").slice(1).join(" ")}.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl max-w-xl leading-relaxed font-light"
          >
            {meta.description}
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto" />

      {/* Video Grid */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {categoryProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative rounded-[2rem] overflow-hidden bg-surface-2 border border-white/5 hover:border-primary/20 transition-all duration-700 ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                {/* Vimeo iframe */}
                <div className={`relative w-full ${i === 0 ? "aspect-[21/9]" : "aspect-video"} bg-black`}>
                  <iframe
                    src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=f16f24`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Project info */}
                <div className="p-8 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-2">
                      {meta.tagline} · {project.year}
                    </p>
                    <h3 className="font-serif text-2xl text-foreground tracking-tight">{project.title}</h3>
                    <p className="text-muted text-sm mt-2 font-light">{project.description}</p>
                  </div>
                  <a
                    href={`https://vimeo.com/${project.vimeoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all shrink-0"
                  >
                    <ExternalLink size={16} className="text-muted hover:text-primary transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 text-center">
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto mb-16" />
        <h2 className="font-serif text-5xl md:text-7xl text-foreground tracking-tighter mb-8">
          READY TO <span className="italic text-primary">CREATE?</span>
        </h2>
        <p className="text-muted text-xl mb-12 max-w-md mx-auto font-light leading-relaxed">
          Tell us your vision. We'll build the framework to bring it to life.
        </p>
        <Link
          href="/#contact"
          className="group relative inline-flex items-center gap-6 px-16 py-8 bg-primary text-background rounded-full text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">Start Production</span>
          <Play size={14} className="relative z-10 fill-current" />
        </Link>
      </section>
    </main>
  );
}

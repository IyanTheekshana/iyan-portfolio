"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content, localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlossaryText } from "@/components/GlossaryText";

export default function Hero() {
  const { personal } = content;
  const heroCopy = useCopy().hero;
  const { language } = useCopyContext();
  const heroLocale = localized[language].hero;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 text-foreground"
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-sm text-foreground/80 shadow-sm"
            >
              <Sparkles size={16} className="text-primary" />
              {heroCopy.badge}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-secondary leading-tight tracking-tight">
                {heroLocale.headline}
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl">
                {heroLocale.subline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#contact"
                className="sheen inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                {heroCopy.ctaPrimary}
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors"
              >
                {heroCopy.ctaSecondary}
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {heroLocale.highlights.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 * idx }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-foreground/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <GlossaryText text={item} />
                  </motion.span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {heroLocale.stats.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 * idx,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                    className="glass-panel rounded-2xl px-4 py-3"
                  >
                    <p className="text-sm text-foreground/60">{item.label}</p>
                    <p className="text-2xl font-semibold text-secondary mt-1">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className="glass-panel hero-card rounded-[28px] p-6 sm:p-8 border border-border bg-white/90">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white font-medium mb-1">
                    {personal.name}
                  </p>
                  <p className="text-2xl font-semibold text-secondary">
                    {personal.role}
                  </p>
                  <p className="text-foreground/70 mt-3 leading-relaxed">
                    {heroLocale.cardBody}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Sparkles size={22} color="white" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {heroLocale.badges.map((badge) => (
                  <div
                    key={badge}
                    className="glass-panel rounded-2xl px-3 py-2 text-sm text-foreground/70"
                  >
                    {badge}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-border bg-primary/5 px-4 py-3 text-sm text-secondary">
                {heroCopy.note}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

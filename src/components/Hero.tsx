"use client";

import { GlossaryText } from "@/components/GlossaryText";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { content, localized } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { personal } = content;
  const heroCopy = useCopy().hero;
  const { language } = useCopyContext();
  const heroLocale = localized[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-20 text-foreground glow-mesh"
    >
      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium tracking-wide text-primary shadow-[0_0_20px_rgba(255,255,0,0.2)]"
            >
              <Sparkles size={18} className="animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold">
                {heroCopy.badge}
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-heading font-black leading-[1.1] sm:leading-[0.95] tracking-tighter">
                {heroLocale.headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block mr-4 ${i === 2 ? "text-white" : "text-gradient"}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-sm"
              >
                {heroLocale.subline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,255,0,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {heroCopy.ctaPrimary} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all text-white"
              >
                {heroCopy.ctaSecondary}
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {heroLocale.stats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary mb-1">
                    {item.label}
                  </p>
                  <p className="text-3xl font-heading font-black text-white">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative group"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="relative glass-card rounded-[32px] p-10 border border-white/20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/40">
                    <Sparkles size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                      {personal.role}
                    </h3>
                    <p className="text-sm font-medium text-primary uppercase tracking-widest">
                      Digital Alchemist
                    </p>
                  </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed font-light">
                  {heroLocale.cardBody}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {heroLocale.highlights.slice(0, 4).map((highlight) => (
                    <div
                      key={highlight}
                      className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-[12px] font-bold text-white/90 text-center uppercase tracking-wider"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

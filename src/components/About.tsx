"use client";

import { motion } from "framer-motion";
import { Compass, Palette } from "lucide-react";
import { content, localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { GlossaryText } from "@/components/GlossaryText";

export default function About() {
  const { about } = content;
  const aboutCopy = useCopy().about;
  const { language } = useCopyContext();
  const aboutLocale = localized[language].about;

  const age = (() => {
    const birth = new Date(about.birthDate);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    const hasHadBirthday =
      now.getMonth() > birth.getMonth() ||
      (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
    if (!hasHadBirthday) years -= 1;
    return years;
  })();

  const paragraphs = aboutLocale.paragraphs.map((paragraph) =>
    paragraph.replace("{{age}}", age.toString())
  );

  const quickFacts = aboutLocale.quickFacts;
  const learning = aboutLocale.learning;

  return (
    <section id="about" className="py-24 relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {aboutCopy.sectionBadge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter">
            {aboutCopy.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card rounded-[40px] p-10 space-y-8 flex-1 border border-white/10 bg-black/20">
              <div className="flex items-center gap-4 text-primary">
                <Compass size={24} className="animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">{aboutCopy.journeyBadge}</span>
              </div>

              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-xl text-white/80 font-light leading-relaxed">
                    <GlossaryText text={paragraph} />
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">{aboutCopy.styleLabel}</p>
                  <p className="text-lg font-bold text-white mb-1">{aboutCopy.styleValue}</p>
                  <div className="h-1 w-12 bg-primary/40 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">{aboutCopy.collabLabel}</p>
                  <p className="text-lg font-bold text-white mb-1">{aboutCopy.collabValue}</p>
                  <div className="h-1 w-12 bg-primary/40 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card rounded-[40px] p-10 border border-white/10 bg-black/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700" />

              <div className="flex items-center gap-5 mb-10">
                <div className="h-20 w-20 rounded-3xl bg-primary/20 border border-primary/40 flex items-center justify-center font-black text-3xl text-primary shadow-[0_0_20px_rgba(255,255,0,0.2)]">
                  IT
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-1">{aboutCopy.profileBadge}</p>
                  <h3 className="text-3xl font-heading font-black text-white">{aboutCopy.profileRole}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="p-5 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors"
                    >
                      <fact.icon size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1">{fact.label}</p>
                        <p className="text-base font-bold text-white">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">{aboutCopy.motivationLabel}</p>
                  <p className="text-lg text-white/90 font-light leading-relaxed italic">
                    "{aboutCopy.motivationValue}"
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4">
                    {aboutCopy.learningTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {learning.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-1.5 rounded-xl border border-white/10 bg-white/5 text-[11px] font-bold text-white/80 uppercase tracking-widest hover:border-primary/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Palette size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-0.5">{aboutCopy.aestheticLabel}</p>
                  <p className="text-base font-bold text-white">
                    {aboutCopy.aestheticValue}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

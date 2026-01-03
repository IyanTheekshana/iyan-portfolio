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
    <section id="about" className="py-16 md:py-20 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12 text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {aboutCopy.sectionBadge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            {aboutCopy.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel space-y-6 text-lg text-foreground/80 leading-relaxed rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-primary">
              <Compass size={16} />
              {aboutCopy.journeyBadge}
            </div>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                <GlossaryText text={paragraph} />
              </p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-sm text-foreground/60">{aboutCopy.styleLabel}</p>
                <p className="text-base font-semibold text-secondary">{aboutCopy.styleValue}</p>
              </div>
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-sm text-foreground/60">{aboutCopy.collabLabel}</p>
                <p className="text-base font-semibold text-secondary">{aboutCopy.collabValue}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-border bg-white/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary font-semibold text-lg flex items-center justify-center shadow-sm">
                  IT
                </div>
                <div>
                  <p className="text-sm text-foreground/60">{aboutCopy.profileBadge}</p>
                  <p className="text-lg font-semibold text-secondary">{aboutCopy.profileRole}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border bg-white p-4 flex items-start gap-3 shadow-sm"
                  >
                    <fact.icon size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground/60">{fact.label}</p>
                      <p className="text-base font-semibold text-secondary">{fact.value}</p>
                    </div>
                  </div>
                ))}
                <div className="glass-panel rounded-2xl p-4 col-span-1 sm:col-span-2">
                  <p className="text-sm text-foreground/60">{aboutCopy.motivationLabel}</p>
                  <p className="text-base font-semibold text-secondary leading-relaxed">
                    {aboutCopy.motivationValue}
                  </p>
                </div>
                <div className="glass-panel rounded-2xl p-4 col-span-1 sm:col-span-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-2">
                    {aboutCopy.learningTitle}
                  </p>
                  <div className="chip-row">
                    {learning.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-white px-3 py-1 text-xs text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 glass-panel rounded-2xl p-4 flex items-start gap-3">
                <Palette size={18} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-foreground/60">{aboutCopy.aestheticLabel}</p>
                  <p className="text-base font-semibold text-secondary">
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

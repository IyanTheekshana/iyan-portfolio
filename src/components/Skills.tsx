"use client";

import { motion, Variants } from "framer-motion";
import { content, localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { GlossaryText } from "@/components/GlossaryText";

const skillLookup = Object.fromEntries(
  content.skills.items.map((skill) => [skill.name, skill])
);

export default function Skills() {
  const copy = useCopy();
  const { language } = useCopyContext();
  const skillHighlights =
    localized[language].skills?.highlights ?? content.skills.highlights;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section id="skills" className="py-16 md:py-20 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {copy.skills.sectionBadge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            {copy.skills.sectionTitle}
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            {copy.skills.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10"
        >
          {skillHighlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariant}
              className={`glass-panel rounded-3xl p-4 sm:p-5 text-secondary`}
            >
              <p className="text-sm text-foreground/60 font-semibold uppercase tracking-[0.16em]">{copy.skills.focusLabel}</p>
              <p className="text-xl font-semibold text-secondary mt-2">
                <GlossaryText text={item.title} />
              </p>
              <p className="text-sm text-foreground/70 mt-2">
                <GlossaryText text={item.body} />
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-6">
          {content.skills.categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-3xl p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-[0.14em]">{category.title}</p>
                  <p className="text-lg font-semibold text-secondary">{copy.skills.categorySubtitle}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 shadow-inner shadow-foreground/10" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((name) => {
                  const skill = skillLookup[name];
                  if (!skill) return null;
                  const Icon = skill.icon;
                  return (
                    <div
                      key={name}
                      className="group glass-panel rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30"
                      style={{ boxShadow: `0 4px 20px -2px ${skill.color}20` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-primary/5 text-foreground border border-border">
                          <Icon size={26} color={skill.color} />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.16em] text-foreground/50">
                          {copy.skills.skillBadge}
                        </span>
                      </div>
                      <p className="mt-3 font-semibold text-secondary">{name}</p>
                      <div className="mt-2 h-1.5 rounded-full bg-primary/10 overflow-hidden">
                        <span
                          className="block h-full rounded-full bg-primary"
                          style={{ width: "82%" }}
                        />
                      </div>
                      <p className="text-xs text-foreground/60 mt-2">{copy.skills.skillCaption}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

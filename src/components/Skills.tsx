"use client";

import { motion, Variants } from "framer-motion";
import { content, localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { GlossaryText } from "@/components/GlossaryText";
import { Sparkles } from "lucide-react";
import TiltCard from "@/components/TiltCard";

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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {copy.skills.sectionBadge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter mb-6">
            {copy.skills.sectionTitle}
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto font-light leading-relaxed">
            {copy.skills.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {skillHighlights.map((item) => (
            <TiltCard key={item.title}>
              <motion.div
                variants={itemVariant}
                className="h-full glass-card rounded-[32px] p-8 relative overflow-hidden group border-white/10 bg-black/20"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4">{copy.skills.focusLabel}</p>
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  <GlossaryText text={item.title} />
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  <GlossaryText text={item.body} />
                </p>
                <div className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                  <Sparkles size={20} />
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>

        <div className="space-y-8">
          {content.skills.categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-[40px] p-10 border border-white/10 bg-black/20"
            >
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-2">{category.title}</p>
                  <h3 className="text-3xl font-heading font-black text-white">{copy.skills.categorySubtitle}</h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,255,0,0.2)]">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {category.items.map((name) => {
                  const skill = skillLookup[name];
                  if (!skill) return null;
                  const Icon = skill.icon;
                  return (
                    <div
                      key={name}
                      className="group relative p-4 sm:p-6 rounded-[24px] sm:rounded-[28px] bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                            <Icon size={30} color={skill.color} className="group-hover:text-black transition-colors" />
                          </div>
                          <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/40 group-hover:text-black/40">
                            Skill
                          </span>
                        </div>

                        <h4 className="font-bold text-white text-lg mb-4 group-hover:text-primary transition-colors">{name}</h4>

                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,0,0.5)]"
                          />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/50 mt-3 group-hover:text-white/70">
                          {copy.skills.skillCaption}
                        </p>
                      </div>
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

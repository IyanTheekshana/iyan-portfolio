"use client";

import { motion } from "framer-motion";
import { localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { Check, Clock } from "lucide-react";
import { GlossaryText } from "@/components/GlossaryText";

export default function Services() {
  const copy = useCopy();
  const { language } = useCopyContext();
  const services = localized[language].services;
  const process = localized[language].process;

  return (
    <section id="services" className="py-16 md:py-20 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {copy.services.badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            {copy.services.title}
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            <GlossaryText text={copy.services.subtitle} />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl p-5 sm:p-6 hover-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-primary font-semibold uppercase tracking-[0.12em]">
                      {copy.services.badge}
                    </p>
                    <p className="text-xl font-semibold text-secondary mt-1">
                      <GlossaryText text={service.title} />
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                    <Clock size={14} /> {service.timeline}
                  </span>
                </div>
                <p className="text-foreground/70 mt-3">
                  <GlossaryText text={service.body} />
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-primary" />
                      <GlossaryText text={item} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.14em] text-primary">{copy.process.badge}</p>
                <p className="text-2xl font-semibold text-secondary">{copy.process.title}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                <Clock size={14} />
                Tempo medio: 2-3 settimane
              </span>
            </div>
            <div className="space-y-4">
              {process.map((step, idx) => (
                <div
                  key={step.title}
                  className="glass-panel flex gap-4 rounded-2xl border border-dashed border-border bg-white/70 px-4 py-3"
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-secondary">
                        <GlossaryText text={step.title} />
                      </p>
                      <span className="text-xs text-foreground/60">{step.time}</span>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">
                      <GlossaryText text={step.description} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

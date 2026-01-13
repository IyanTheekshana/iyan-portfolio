"use client";

import { motion } from "framer-motion";
import { localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { Check, Clock, Sparkles } from "lucide-react";
import { GlossaryText } from "@/components/GlossaryText";

export default function Services() {
  const copy = useCopy();
  const { language } = useCopyContext();
  const services = localized[language].services;
  const process = localized[language].process;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {copy.services.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter mb-6">
            {copy.services.title}
          </h2>
          <p className="text-xl text-secondary/70 font-light leading-relaxed">
            <GlossaryText text={copy.services.subtitle} />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-[32px] p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-all duration-500" />

                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <Sparkles size={28} />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/5 bg-white/5 text-[11px] font-bold text-secondary uppercase tracking-widest">
                      <Clock size={14} className="text-primary" /> {service.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    <GlossaryText text={service.title} />
                  </h3>

                  <p className="text-secondary/70 font-light leading-relaxed mb-8 flex-1">
                    <GlossaryText text={service.body} />
                  </p>

                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-secondary">
                        <div className="h-5 w-5 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                          <Check size={12} />
                        </div>
                        <GlossaryText text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent blur-2xl -z-10" />
            <div className="glass-card rounded-[40px] p-10 border border-white/5 h-full">
              <div className="flex flex-col gap-8">
                <div className="pb-8 border-b border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-3">{copy.process.badge}</p>
                  <h3 className="text-4xl font-heading font-bold text-white">{copy.process.title}</h3>
                </div>

                <div className="space-y-6">
                  {process.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          {idx + 1}
                        </div>
                        {idx !== process.length - 1 && (
                          <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent my-2" />
                        )}
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                            <GlossaryText text={step.title} />
                          </h4>
                          <span className="text-[10px] uppercase tracking-widest font-black text-primary border border-primary/20 px-2 py-0.5 rounded-md">{step.time}</span>
                        </div>
                        <p className="text-secondary/70 text-sm font-light leading-relaxed">
                          <GlossaryText text={step.description} />
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 p-6 rounded-3xl bg-primary/10 border border-primary/20 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
                  <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">Insight</p>
                  <p className="text-sm font-medium text-white/90 italic leading-relaxed">
                    "Il nostro processo è collaudato per massimizzare il valore in tempi record, senza mai rinunciare alla precisione."
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

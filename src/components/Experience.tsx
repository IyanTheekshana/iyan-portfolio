"use client";

import { localized } from "@/lib/data";
import { useCopy, useCopyContext } from "@/lib/copy-context";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  const { language } = useCopyContext();
  const { experience, education } = localized[language];
  const experienceCopy = useCopy().experience;

  return (
    <section id="experience" className="py-16 md:py-20 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {experienceCopy.badge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            {experienceCopy.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-border">
                <Briefcase size={18} />
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                {experienceCopy.experienceTitle}
              </h3>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 w-px bg-border" />
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                {experience.map((job) => (
                  <motion.div
                    key={`${job.company}-${job.role}`}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
                  }}
                  className="relative"
                >
                  <div className="glass-panel rounded-3xl p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-foreground/60">
                          {job.company}
                        </p>
                        <p className="text-lg font-semibold text-secondary">
                          {job.role}
                        </p>
                      </div>
                      <div className="chip-row items-center text-sm text-foreground/70">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 border border-border text-primary">
                          <Calendar size={14} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-border">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                      <p className="mt-3 text-foreground/70 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-border">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                {experienceCopy.educationTitle}
              </h3>
            </div>
            <div className="glass-panel rounded-3xl p-5 sm:p-6 space-y-5 shadow-sm">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="rounded-2xl border border-border bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-foreground/60">{edu.school}</p>
                      <p className="text-lg font-semibold text-secondary">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground/70">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

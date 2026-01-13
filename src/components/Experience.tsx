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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {experienceCopy.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter mb-6">
            {experienceCopy.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/40 shadow-[0_0_15px_rgba(255,255,0,0.2)]">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">
                {experienceCopy.experienceTitle}
              </h3>
            </div>

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
              {experience.map((job, idx) => (
                <motion.div
                  key={`${job.company}-${job.role}-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                  }}
                  className="group relative"
                >
                  <div className="glass-card rounded-[32px] p-8 border border-white/10 bg-black/20 hover:border-primary/50 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
                          {job.company}
                        </p>
                        <h4 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                          {job.role}
                        </h4>
                      </div>
                      <div className="flex flex-col xs:flex-row flex-wrap gap-2 w-full sm:w-auto">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/70 whitespace-nowrap">
                          <Calendar size={14} className="text-primary" />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/70">
                          <MapPin size={14} className="text-primary" />
                          <span className="truncate max-w-[150px] xs:max-w-none">{job.location}</span>
                        </span>
                      </div>
                    </div>
                    <p className="text-white/80 font-light leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/40 shadow-[0_0_15px_rgba(255,255,0,0.2)]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">
                {experienceCopy.educationTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={`${edu.school}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card rounded-[32px] p-8 border border-white/10 bg-black/20"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary">
                        {edu.school}
                      </p>
                      <h4 className="text-xl font-heading font-bold text-white">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-heading font-black text-primary shadow-[0_0_10px_rgba(255,255,0,0.3)]">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">
                    <Calendar size={14} className="text-primary" />
                    {edu.period}
                  </div>

                  <p className="text-white/80 font-light leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}

              <div className="p-8 rounded-[32px] border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center text-center space-y-4">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                  <GraduationCap size={20} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40">
                  Continuous Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

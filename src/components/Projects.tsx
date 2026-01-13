"use client";

import { useCopy, useCopyContext } from "@/lib/copy-context";
import { content, localized } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GlossaryText } from "@/components/GlossaryText";
import TiltCard from "@/components/TiltCard";

export default function Projects() {
  const projectsCopy = useCopy().projects;
  const { language } = useCopyContext();
  const filtered = content.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {projectsCopy.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter mb-6">
            {projectsCopy.title}
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto font-light leading-relaxed">
            <GlossaryText text={projectsCopy.subtitle} />
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filtered.map((project) => {
            const localizedProjects = localized[language].projects as Record<
              string,
              { title: string; description: string }
            >;
            const localizedProj = localizedProjects[project.key] ?? {};
            const title = localizedProj.title ?? project.title;
            const description =
              localizedProj.description ?? project.description;

            return (
              <TiltCard
                key={project.title}
                className="group h-full"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="relative flex flex-col h-full glass-card rounded-[32px] overflow-hidden border border-white/5"
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-black" />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <h3 className="text-7xl font-heading font-black text-white/5 select-none tracking-tighter">
                        {project.title.substring(0, 2).toUpperCase()}
                      </h3>
                    </div>
                    {project.live && (
                      <div className="absolute top-4 right-4">
                        <Link
                          href={`/projects?key=${project.key}`}
                          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary transition-colors active:scale-95"
                        >
                          <ArrowUpRight size={20} />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-3 mb-4">
                      <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                    </div>

                    <p className="text-secondary/70 leading-relaxed text-base font-light mb-8 flex-1">
                      <GlossaryText text={description} />
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-secondary uppercase tracking-[0.1em] group-hover:border-primary/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

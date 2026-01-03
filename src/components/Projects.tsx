"use client";

import { useCopy, useCopyContext } from "@/lib/copy-context";
import { content, localized } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GlossaryText } from "@/components/GlossaryText";

export default function Projects() {
  const projectsCopy = useCopy().projects;
  const { language } = useCopyContext();
  const filtered = content.projects;

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/80 border border-border text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {projectsCopy.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-secondary mt-4">
            {projectsCopy.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mt-3">
            <GlossaryText text={projectsCopy.subtitle} />
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
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
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 45, damping: 14 },
                  },
                }}
                className="group relative flex flex-col h-full glass-panel rounded-3xl overflow-hidden hover-lift"
              >
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden border-b border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-5xl font-heading font-black text-primary/15 select-none tracking-tighter">
                      {project.title.substring(0, 2).toUpperCase()}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold text-secondary">
                      {title}
                    </h3>
                    <div className="flex gap-2">
                      {project.live && (
                        <Link
                          href={`/projects?key=${project.key}`}
                          className="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline"
                        >
                          {projectsCopy.live} <ArrowUpRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mt-3 text-sm">
                    <GlossaryText text={description} />
                  </p>

                  <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-primary/5 border border-border text-[12px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

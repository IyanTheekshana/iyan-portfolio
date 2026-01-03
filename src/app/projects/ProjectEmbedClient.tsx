"use client";

import { useCopy, useCopyContext } from "@/lib/copy-context";
import { content, localized } from "@/lib/data";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Project = (typeof content.projects)[number];

const labels = {
  ita: {
    back: "Torna ai progetti",
    openExternal: "Apri in nuova scheda",
    embedNote: "Se l'anteprima non si carica, apri il progetto direttamente.",
    missing: "Anteprima non disponibile per questo progetto.",
  },
  eng: {
    back: "Back to projects",
    openExternal: "Open in new tab",
    embedNote: "If the preview does not load, open the project directly.",
    missing: "Preview not available for this project.",
  },
};

export default function ProjectEmbedClient({ project }: { project: Project }) {
  const projectsCopy = useCopy().projects;
  const { language } = useCopyContext();
  const localizedProjects = localized[language].projects as Record<
    string,
    { title?: string; description?: string }
  >;
  const localizedProject = localizedProjects[project.key] ?? {};
  const title = localizedProject.title ?? project.title;
  const description = localizedProject.description ?? project.description;
  const t = labels[language];

  return (
    <section className="py-16 md:py-20 lg:py-24 text-foreground">
      <div className="section-shell space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-primary shadow-sm border border-border hover:-translate-y-0.5 transition-all"
            >
              <ArrowLeft size={16} />
              {t.back}
            </Link>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink size={16} />
                {projectsCopy.live}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground/80 border border-border hover:-translate-y-0.5 transition-all"
              >
                <FaGithub size={16} />
                {projectsCopy.repo}
              </a>
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-secondary">
              {title}
            </h1>
            <p className="text-foreground/70 max-w-3xl leading-relaxed">
              {description}
            </p>
            {!!project.tags?.length && (
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-primary/5 border border-border text-xs font-semibold text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="glass-panel border border-border rounded-3xl overflow-hidden">
          {project.live ? (
            <div className="relative">
              <iframe
                src={project.live}
                title={`${project.title} live preview`}
                className="w-full h-[70vh] min-h-[520px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="p-8 text-foreground/70">{t.missing}</div>
          )}
        </div>

        {project.live && (
          <p className="text-sm text-foreground/60">
            {t.embedNote}{" "}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              {t.openExternal}
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}

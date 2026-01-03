import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/data";
import ProjectEmbedClient from "./ProjectEmbedClient";

type SearchParamValue = string | string[] | undefined;
type MaybePromise<T> = T | Promise<T>;
type PageProps = {
  searchParams?: MaybePromise<{ key?: SearchParamValue }>;
};

const projects = content.projects;

const normalizeKey = (key?: SearchParamValue) =>
  Array.isArray(key) ? key[0] : key;

const getProject = (key?: SearchParamValue) => {
  const normalized = normalizeKey(key);
  return normalized ? projects.find((project) => project.key === normalized) : undefined;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const project = getProject(params?.key);

  if (!project) {
    return {
      title: "Project preview | Iyan Theekshana",
      description: "Anteprima live di un progetto.",
    };
  }

  return {
    title: `${project.title} | Live preview`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Live preview`,
      description: project.description,
      images: project.image
        ? [
            {
              url: project.image,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const project = getProject(params?.key);

  if (!project) {
    return (
      <section className="py-16 md:py-20 lg:py-24 text-foreground">
        <div className="section-shell space-y-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            Progetto non trovato
          </h1>
          <p className="text-foreground/70 max-w-2xl">
            Seleziona un progetto dalla sezione progetti per vedere l&apos;anteprima (Project not found).
          </p>
          <Link
            href="/#projects"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 transition-all"
          >
            Torna ai progetti
          </Link>
        </div>
      </section>
    );
  }

  return <ProjectEmbedClient project={project} />;
}

"use client";

import { useCopy } from "@/lib/copy-context";
import { GlossaryText } from "@/components/GlossaryText";
import { content } from "@/lib/data";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { personal } = content;
  const footerCopy = useCopy().footer;

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-shell">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-8">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
              Digital Alchemy v2.0
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            </div>
            <p className="text-secondary/40 text-[11px] font-medium uppercase tracking-widest">
              &copy; {new Date().getFullYear()} <GlossaryText text={personal.name} />. {footerCopy.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

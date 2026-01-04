"use client";

import { useCopy } from "@/lib/copy-context";
import { GlossaryText } from "@/components/GlossaryText";
import { content } from "@/lib/data";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { personal } = content;
  const footerCopy = useCopy().footer;

  return (
    <footer className="mt-12 border-t border-border bg-white/80 py-8 backdrop-blur text-foreground">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-center space-y-4 text-foreground">
          <div className="flex space-x-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <GlossaryText text={personal.name} />. {footerCopy.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

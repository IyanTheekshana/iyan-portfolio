"use client";

import { useCopyContext } from "@/lib/copy-context";
import { glossaryTerms, type GlossaryTerm } from "@/lib/glossary";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Language = "ita" | "eng";

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const glossaryLookup = new Map<string, GlossaryTerm>();
const glossaryPatterns: string[] = [];

glossaryTerms.forEach((term) => {
  const variants = [term.label, ...(term.aliases ?? [])];
  variants.forEach((variant) =>
    glossaryLookup.set(variant.toLowerCase(), term)
  );
  glossaryPatterns.push(...variants.map(escapeRegExp));
});

const glossaryRegex = new RegExp(`\\b(${glossaryPatterns.join("|")})\\b`, "gi");

type GlossaryTextProps = {
  text: string;
};

function GlossaryTooltip({
  term,
  display,
  language,
}: {
  term: GlossaryTerm;
  display: string;
  language: Language;
}) {
  const description = term.description[language] ?? term.description.eng;
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLSpanElement | null>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = () => {
    const el = triggerRef.current;
    const tooltipEl = tooltipRef.current;
    if (!el || !tooltipEl) return;
    const rect = el.getBoundingClientRect();
    const tooltipWidth = tooltipEl.offsetWidth;
    const margin = 16;
    const idealLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
    const clampedLeft = Math.min(
      Math.max(idealLeft, margin),
      window.innerWidth - margin - tooltipWidth
    );
    setCoords({
      top: rect.bottom + 10,
      left: clampedLeft,
    });
  };

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const handler = () => updatePosition();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const tooltip = (
    <span
      ref={tooltipRef}
      className="pointer-events-none fixed z-[99999] w-max max-w-xs rounded-xl border border-border bg-white/95 px-3 py-2 text-xs text-foreground shadow-xl ring-1 ring-primary/10 transition-all duration-150 ease-out"
      style={{
        top: coords.top,
        left: coords.left,
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(4px)",
      }}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
        {term.label}
      </span>
      <span className="mt-0.5 block leading-snug text-foreground/80">
        {description}
      </span>
    </span>
  );

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        className="cursor-help"
        tabIndex={0}
        aria-label={`${display}: ${description}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {display}
      </span>
      {mounted ? createPortal(tooltip, document.body) : tooltip}
    </span>
  );
}

export function GlossaryText({ text }: GlossaryTextProps) {
  const { language } = useCopyContext();
  const nodes: React.ReactNode[] = [];

  glossaryRegex.lastIndex = 0;
  let match: RegExpExecArray | null;
  let lastIndex = 0;

  while ((match = glossaryRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const matched = match[1];
    const term = glossaryLookup.get(matched.toLowerCase());

    if (term) {
      nodes.push(
        <GlossaryTooltip
          key={`${term.key}-${match.index}`}
          term={term}
          display={matched}
          language={language as Language}
        />
      );
    } else {
      nodes.push(matched);
    }

    lastIndex = glossaryRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <span className="inline">{nodes}</span>;
}

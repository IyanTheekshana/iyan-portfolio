"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlossaryText } from "@/components/GlossaryText";
import { content } from "@/lib/data";
import { useCopyContext } from "@/lib/copy-context";

export default function Navbar() {
  const { personal, navigation } = content;
  const { copy, toggleLanguage, language } = useCopyContext();
  const navbarCopy = copy.navbar;
  const labelFor = (href: string, fallback: string) =>
    (navbarCopy.links as Record<string, string | undefined>)[href] ?? fallback;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur-md bg-white/90 border-b border-border shadow-[0_10px_30px_-24px_rgba(15,23,42,0.35)]"
        : "bg-transparent"
        }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
              IT
            </span>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-xs uppercase tracking-[0.16em] text-foreground/60 whitespace-nowrap">
                {navbarCopy.brandSubtitle}
              </span>
              <span className="text-sm sm:text-base text-foreground whitespace-nowrap">
                <GlossaryText text={personal.name} />
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-foreground shadow-sm">
              {navigation.links.map((link) => (
                // Normalize hash links to root to avoid keeping query params on nested routes
                <Link
                  key={link.name}
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="px-2 py-1 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors whitespace-nowrap"
                >
                  {labelFor(link.href, link.name)}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-semibold border border-primary/20 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {navbarCopy.availability}
              </span>
              <Link
                href="/#contact"
                className="sheen inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <Sparkles size={16} />
                {navbarCopy.cta}
              </Link>
              <button
                onClick={toggleLanguage}
                className="island px-3 py-1.5 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary transition-colors border border-border bg-white"
                aria-label="Cambia lingua"
              >
                {navbarCopy.langToggleLabel ?? (language === "ita" ? "EN" : "IT")}
              </button>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="island px-3 py-1.5 rounded-full text-xs font-semibold text-foreground/80 hover:text-primary transition-colors border border-border bg-white"
              aria-label="Cambia lingua"
            >
              {navbarCopy.langToggleLabel ?? (language === "ita" ? "EN" : "IT")}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-foreground hover:text-primary focus:outline-none island bg-white border border-border"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel mx-4 mt-2 rounded-2xl border border-border bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.links.map((link) => (
              <Link
                key={link.name}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/80 hover:text-foreground hover:bg-primary/10 px-3 py-2 rounded-md text-base font-semibold whitespace-nowrap"
              >
                {labelFor(link.href, link.name)}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center rounded-2xl bg-primary hover:bg-primary/90 px-3 py-3 font-semibold text-white shadow-sm whitespace-nowrap"
            >
              {navbarCopy.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

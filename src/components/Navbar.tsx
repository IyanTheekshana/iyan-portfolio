"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlossaryText } from "@/components/GlossaryText";
import { content } from "@/lib/data";
import { useCopyContext } from "@/lib/copy-context";
import { motion } from "framer-motion";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 pt-4 sm:pt-6 ${scrolled ? "translate-y-0" : "translate-y-0"
        }`}
    >
      <div className="section-shell max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between gap-6 px-6 py-2 transition-all duration-500 rounded-2xl border ${scrolled
            ? "bg-panel/80 backdrop-blur-xl border-white/10 shadow-glow"
            : "bg-transparent border-transparent"
            }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-heading font-black tracking-tighter text-white group"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-bold transition-transform group-hover:scale-110">
              IT
              <div className="absolute inset-0 bg-primary/20 animate-ping rounded-xl -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold">
                {navbarCopy.brandSubtitle}
              </span>
              <span className="text-sm whitespace-nowrap group-hover:text-primary transition-colors text-white">
                <GlossaryText text={personal.name} />
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navigation.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-secondary hover:text-white hover:bg-white/5 transition-all"
                >
                  {labelFor(link.href, link.name)}
                </Link>
              ))}
            </div>

            <div className="h-4 w-px bg-white/10 mx-1" />

            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-xs font-bold text-secondary hover:text-white transition-all transform active:scale-95"
              >
                {language === "ita" ? "EN" : "IT"}
              </button>
              <Link
                href="/#contact"
                className="relative px-5 py-2 bg-white text-black rounded-xl font-bold text-xs transition-all hover:scale-105 active:scale-95 shadow-lg overflow-hidden group"
              >
                <span className="relative z-10">{navbarCopy.cta}</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-secondary border border-white/5 bg-white/5 active:scale-95 transition-transform"
            >
              {language === "ita" ? "EN" : "IT"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-white active:scale-95 transition-transform"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="lg:hidden absolute top-24 left-4 right-4 glass-card p-6 rounded-3xl z-50 border border-white/10"
        >
          <div className="flex flex-col gap-3">
            {navigation.links.map((link) => (
              <Link
                key={link.name}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/5 text-sm font-bold text-secondary hover:text-white transition-colors"
              >
                {labelFor(link.href, link.name)}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 rounded-xl bg-primary text-white text-center font-bold text-sm shadow-glow"
            >
              {navbarCopy.cta}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

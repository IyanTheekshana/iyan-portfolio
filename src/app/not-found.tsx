"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  const redirectMs = 2200;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, redirectMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 py-12">
      <div className="glass-panel max-w-xl w-full rounded-3xl p-8 sm:p-10 text-center border border-border shadow-lg">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
          <Home size={14} />
          Torno alla home
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
          Pagina non trovata
        </h1>
        <p className="mt-3 text-foreground/70">
          La pagina richiesta non esiste. Verrai reindirizzato automaticamente alla home tra pochi
          istanti.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 transition-all"
          >
            Vai alla home <ArrowRight size={16} />
          </Link>
          <span className="text-xs text-foreground/60">
            Redirect automatico in {redirectMs / 1000}s
          </span>
        </div>
      </div>
    </section>
  );
}

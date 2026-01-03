"use client";

import { useCopy } from "@/lib/copy-context";
import { content } from "@/lib/data";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export default function Contact() {
  const { personal } = content;
  const contactCopy = useCopy().contact;
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const missingEnv =
    !EMAILJS_SERVICE || !EMAILJS_TEMPLATE || !EMAILJS_PUBLIC;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (missingEnv) {
      setError("Configura EmailJS in .env.local prima di inviare.");
      return;
    }

    setIsSending(true);
    setSent(false);
    setError(null);

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, {
        publicKey: EMAILJS_PUBLIC,
      })
      .then(() => {
        setSent(true);
        formRef.current?.reset();
      })
      .catch(() =>
        setError("Invio non riuscito. Verifica ID/Template/Public key EmailJS.")
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-16 md:py-20 text-foreground">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {contactCopy.badge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-semibold text-secondary">
            {contactCopy.title}
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            {contactCopy.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden shadow-sm"
        >
          <div className="relative z-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary text-3xl font-bold shadow-sm border border-border">
              IT
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-secondary">
              {personal.name}
            </h3>
            <p className="text-foreground/60 text-lg mt-1">{personal.role}</p>
            <p className="mt-4 text-foreground/60 max-w-md mx-auto">
              {contactCopy.location}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition-all"
              >
                <FaEnvelope /> {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition-all"
              >
                <FaLinkedin /> {contactCopy.socials.linkedin}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition-all"
              >
                <FaGithub /> {contactCopy.socials.github}
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="mt-8 sm:mt-10 glass-panel rounded-2xl p-5 sm:p-6 text-left space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
                  <span>Nome</span>
                  <input
                    name="name"
                    required
                    className="rounded-xl border border-border bg-white/60 px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Il tuo nome"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-xl border border-border bg-white/60 px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
                <span>Messaggio</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="rounded-xl border border-border bg-white/60 px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  placeholder="Dimmi di cosa hai bisogno: pagine, contenuti, timing..."
                />
              </label>
              <button
                type="submit"
                disabled={isSending || missingEnv}
                className="sheen w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-semibold py-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {missingEnv
                  ? "Configura EmailJS (.env.local)"
                  : isSending
                    ? "Invio..."
                    : "Invia richiesta"}
              </button>
              {sent && (
                <p className="text-xs text-emerald-600 font-semibold">
                  {contactCopy.successMessage}
                </p>
              )}
              {error && (
                <p className="text-xs text-red-600 font-semibold">{error}</p>
              )}
              {missingEnv && !error && (
                <p className="text-xs text-foreground/60 font-semibold">
                  Aggiungi NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useCopy } from "@/lib/copy-context";
import { content } from "@/lib/data";
import { GlossaryText } from "@/components/GlossaryText";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Sparkles } from "lucide-react";

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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
            {contactCopy.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-tight sm:leading-none tracking-tighter mb-6">
            {contactCopy.title}
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto font-light leading-relaxed">
            {contactCopy.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card rounded-[40px] p-10 relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700" />

              <div className="flex items-center gap-6 mb-10">
                <div className="h-20 w-20 rounded-3xl bg-primary/20 border border-primary/30 flex items-center justify-center font-black text-3xl text-primary shadow-glow italic">
                  IT
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-black text-white tracking-tight">
                    <GlossaryText text={personal.name} />
                  </h3>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mt-1">{personal.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group/link"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-all duration-500 shadow-glow">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/40">Email</span>
                    <span className="text-base font-bold text-white group-hover/link:text-primary transition-colors">{personal.email}</span>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group/link"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-all duration-500 shadow-glow">
                      <FaLinkedin size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/40 whitespace-nowrap">LinkedIn</span>
                    </div>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group/link"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-all duration-500 shadow-glow">
                      <FaGithub size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/40 whitespace-nowrap">GitHub</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-primary/5 border border-primary/10 flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm text-secondary/70 font-light leading-relaxed">
                  {contactCopy.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="glass-card rounded-[40px] p-10 border border-white/5 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary px-1">Nome</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary px-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary px-1">Messaggio</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-secondary/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Descrivi il tuo progetto o la tua domanda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending || missingEnv}
                className="relative w-full group overflow-hidden rounded-2xl bg-white py-5 text-black font-black uppercase tracking-[0.2em] text-sm transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">
                  {missingEnv
                    ? "Configurazione Mancante"
                    : isSending
                      ? "Inviando..."
                      : "Invia Messaggio"}
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-primary font-bold uppercase tracking-widest mt-4"
                >
                  {contactCopy.successMessage}
                </motion.p>
              )}
              {error && (
                <p className="text-center text-xs text-red-500 font-bold uppercase tracking-widest mt-4">{error}</p>
              )
              }
              {missingEnv && !error && (
                <p className="text-center text-[10px] text-white/40 font-bold uppercase tracking-widest mt-4 leading-relaxed">
                  Configura le API Key di EmailJS in .env.local per attivare il form.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

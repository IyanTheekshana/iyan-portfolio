import { MapPin, Sparkles } from "lucide-react";
import {
  FaAngular,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiDotnet, SiTypescript, SiWebflow, SiWix } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Unico contenitore dati, modellato come fosse una collection NoSQL
// per facilitare eventuale fetch da backend/database in futuro.
export const content = {
  personal: {
    name: "Iyan Theekshana",
    email: "iyan.dev123@gmail.com",
    linkedin: "https://www.linkedin.com/in/iyan-theekshana/",
    github: "https://github.com/IyanTheekshana",
    about: {
      title: "Chi sono",
      description: [
        "Creo siti essenziali per brand e piccole aziende: messaggi chiari, immagini curate e frizione zero.",
        "Mi occupo di discovery, design minimal, sviluppo su Next.js/React e lancio con SEO tecnica e analytics.",
        "Consegno in cicli brevi: bozza in 3-5 giorni, sito online in 2-3 settimane con handoff curato.",
      ],
    },
  },
  navigation: {
    links: [
      { name: "Home", href: "#home" },
      { name: "Servizi", href: "#services" },
      { name: "Progetti", href: "#projects" },
      { name: "Chi sono", href: "#about" },
      { name: "Percorso", href: "#experience" },
    ],
  },
  hero: {
    stats: [
      {
        label: "Progetti live",
        value: "10+",
        tone: "from-emerald-500/80 via-cyan-400/70 to-emerald-300/70",
      },
      {
        label: "Prototipo",
        value: "3-5 gg",
        tone: "from-sky-500/70 via-white/60 to-emerald-200/60",
      },
      {
        label: "Tempo di risposta",
        value: "<24h",
        tone: "from-amber-300/70 via-emerald-200/60 to-sky-300/70",
      },
    ],
    highlights: [
      "Design su misura, testo in primo piano",
      "Sviluppo Next.js/React e handoff curato",
      "Ottimizzazione performance e SEO tecnica",
    ],
    badges: ["Bozza in 3-5 giorni", "Codice leggero e pronto alla produzione"],
  },
  services: [
    {
      title: "Design + UX",
      body: "Wireframe e UI essenziale per far emergere contenuti e tono di voce.",
      deliverables: [
        "Wireframe navigabile",
        "UI kit leggero e componenti riusabili",
        "Prototipo condiviso (Figma)",
      ],
      timeline: "3-5 giorni",
    },
    {
      title: "Sviluppo Web",
      body: "Next.js/React per siti veloci, SEO-ready e facili da aggiornare.",
      deliverables: [
        "Sito responsive su Next.js",
        "SEO tecnica di base + analytics",
        "Hand-off documentato",
      ],
      timeline: "7-10 giorni",
    },
    {
      title: "Cura continua",
      body: "Aggiornamenti, micro ottimizzazioni e test di messaggio.",
      deliverables: [
        "Piccoli miglioramenti mensili",
        "A/B test semplice su contenuti",
        "Monitoraggio performance",
      ],
      timeline: "Mensile",
    },
  ],
  process: [
    {
      title: "Call di allineamento",
      description: "30 minuti per obiettivi, contenuti e tono.",
      time: "30 minuti",
    },
    {
      title: "Bozza visiva",
      description: "Wireframe e UI kit condiviso per approvazione rapida.",
      time: "3-5 giorni",
    },
    {
      title: "Sviluppo",
      description:
        "Build Next.js, copy finalizzato, SEO tecnica e tracciamenti.",
      time: "7-10 giorni",
    },
    {
      title: "Go-live + cura",
      description: "Deploy, fix rapidi, monitoraggio e micro ottimizzazioni.",
      time: "1-2 giorni",
    },
  ],
  about: {
    title: "Chi sono",
    birthDate: "1998-08-26",
    paragraphs: [
      "Mi chiamo Iyan Theekshana, ho {{age}} anni e aiuto brand e PMI a pubblicare siti essenziali, chiari e immediatamente comprensibili.",
      "Progetto e sviluppo interfacce pulite e veloci con React e Next.js, curando ritmo visivo, testi efficaci e immagini coerenti con il messaggio.",
      "Nel lavoro quotidiano ottimizzo codice e architetture per applicazioni full-stack utilizzando WiseJ e C#/.NET, con particolare attenzione a stabilita, manutenibilita e performance.",
      "Lavoro per cicli brevi e concreti: bozza condivisa, sviluppo rapido, verifiche su performance, SEO tecnica e accessibilita di base.",
      "Nel tempo libero realizzo web app e siti moderni con Next.js e React, sperimentando soluzioni UI/UX e tecnologie che rendano i progetti piu interessanti, veloci e scalabili.",
    ],
    quickFacts: [
      { label: "Citta", value: "Milano, IT", icon: MapPin },
      { label: "Ruolo", value: "Web designer & developer", icon: Sparkles },
    ],
    learning: ["Docker/Kubernetes", "Next.js avanzato", "Node.js avanzato"],
  },
  skills: {
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: "React", icon: FaReact, color: "#61DBFB" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      { name: "Webflow", icon: SiWebflow, color: "#0066FF" },
      { name: "Wix", icon: SiWix, color: "#FAAD4D" },
      { name: "Figma", icon: FaFigma, color: "#A259FF" },
    ],
    categories: [
      {
        title: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Angular",
          "React",
          "TypeScript",
          "Figma",
        ],
      },
      { title: "Backend & Database", items: ["C#", ".NET", "PHP", "MySQL"] },
      { title: "Altro", items: ["WordPress", "Webflow", "Wix"] },
    ],
    highlights: [
      {
        title: "UI Systems",
        body: "Componenti riusabili e naming chiaro per evolvere nel tempo.",
        accent: "from-emerald-400/70 via-teal-300/60 to-white",
      },
      {
        title: "Performance",
        body: "Bundle leggeri, lazy loading e metriche monitorate.",
        accent: "from-sky-400/70 via-emerald-200/70 to-white",
      },
      {
        title: "DX Curata",
        body: "Documentazione handoff, check SEO e accessibilita di base.",
        accent: "from-amber-300/80 via-emerald-200/60 to-white",
      },
    ],
  },
  projects: [
    {
      key: "dakshi",
      title: "Dakshi Portfolio",
      description:
        "Portfolio web per sassofonista: sezioni brevi, immagini di performance in primo piano e CTA per booking.",
      image: "/img/dakshi.png",
      live: "https://dakshi-portfolio.web.app/",
      github: "",
      tags: ["React", "Landing Page", "Portfolio", "Admin Panel"],
    },
    {
      key: "linelife",
      title: "LINELIFE CAF",
      description:
        "Supporto completo per dichiarazioni, domande INPS, ISEE, bonus e altro. Professionisti che semplificano ogni esigenza fiscale.",
      image: "/img/line-life-cafe.png",
      live: "https://line-life-caf.web.app/",
      github: "",
      tags: ["React", "Landing Page", "Admin Panel"],
    },
    {
      key: "scuolafinder",
      title: "Scuola Finder",
      description:
        "Ricerca scuole di Milano con filtri rapidi e interfaccia pulita.",
      image: "/img/scuola-finder.png",
      live: "https://scuolafinder.netlify.app/",
      github: "https://github.com/IyanTheekshana/ScuolaFinder",
      tags: ["React", "API"],
    },
  ],
  experience: [
    {
      company: "Datev Koinos",
      role: "Junior Software Developer",
      period: "Giu 2023 - Presente",
      location: "Milano, Lombardia, Italia",
      description:
        "Faccio parte di un team composto da quattro persone e mi occupo del porting delle applicazioni web tramite il framework Wisej in C#.",
      logo: "/img/datev.png",
    },
    {
      company: "Area Etica srl",
      role: "Junior Oracle Database Administrator",
      period: "Ago 2022 - Gen 2023",
      location: "Milano, Lombardia, Italia",
      description: "Stage come Junior Oracle DBA.",
      logo: "/img/area-etica.png",
    },
    {
      company: "Piksel",
      role: "Junior Configuration Specialist",
      period: "Giu 2022 - Ago 2022",
      location: "Milano, Lombardia, Italia",
      description: "Stage come Configuration Specialist.",
      logo: "/img/piksel.png",
    },
    {
      company: "WeMake",
      role: "Progettista 3D",
      period: "Feb 2017 - Mar 2017",
      location: "Milano, Lombardia, Italia",
      description: "Stage come progettista 3D.",
      logo: "/img/wemake.png",
    },
  ],
  education: [
    {
      school: "Galdus Formazione",
      degree: "IFTS Sviluppatore software per l'Industria 4.0",
      period: "Nov 2021 - Ott 2022",
      grade: "94/100",
      description:
        "Programmazione di base, Java, .NET, JavaScript, SQL, HTML5 & CSS3, Angular.",
    },
  ],
};

// Contenuti localizzati
export const localized = {
  ita: {
    hero: {
      headline: "Web designer & developer",
      subline:
        "per brand e piccole aziende: meno fronzoli, piu velocita e credibilita online.",
      cardBody:
        "Siti leggeri, contenuti in evidenza, consegna rapida e handoff curato.",
      note: "Call di 30 minuti per capire obiettivi e contenuti. Rispondo entro 24 ore.",
      highlights: [
        "Design su misura, testo in primo piano",
        "Sviluppo Next.js/React e handoff curato",
        "Ottimizzazione performance e SEO tecnica",
      ],
      badges: [
        "Bozza in 3-5 giorni",
        "Codice leggero e pronto alla produzione",
      ],
      stats: [
        {
          label: "Progetti live",
          value: "10+",
          tone: "from-emerald-500/80 via-cyan-400/70 to-emerald-300/70",
        },
        {
          label: "Prototipo",
          value: "3-5 gg",
          tone: "from-sky-500/70 via-white/60 to-emerald-200/60",
        },
        {
          label: "Tempo di risposta",
          value: "<24h",
          tone: "from-amber-300/70 via-emerald-200/60 to-sky-300/70",
        },
      ],
    },
    services: [
      {
        title: "Design + UX",
        body: "Wireframe e UI essenziale per far emergere contenuti e tono di voce.",
        deliverables: [
          "Wireframe navigabile",
          "UI kit leggero e componenti riusabili",
          "Prototipo condiviso (Figma)",
        ],
        timeline: "3-5 giorni",
      },
      {
        title: "Sviluppo Web",
        body: "Next.js/React per siti veloci, SEO-ready e facili da aggiornare.",
        deliverables: [
          "Sito responsive su Next.js",
          "SEO tecnica di base + analytics",
          "Hand-off documentato",
        ],
        timeline: "7-10 giorni",
      },
      {
        title: "Cura continua",
        body: "Aggiornamenti, micro ottimizzazioni e test di messaggio.",
        deliverables: [
          "Piccoli miglioramenti mensili",
          "A/B test semplice su contenuti",
          "Monitoraggio performance",
        ],
        timeline: "Mensile",
      },
    ],
    process: [
      {
        title: "Call di allineamento",
        description: "30 minuti per obiettivi, contenuti e tono.",
        time: "30 minuti",
      },
      {
        title: "Bozza visiva",
        description: "Wireframe e UI kit condiviso per approvazione rapida.",
        time: "3-5 giorni",
      },
      {
        title: "Sviluppo",
        description:
          "Build Next.js, copy finalizzato, SEO tecnica e tracciamenti.",
        time: "7-10 giorni",
      },
      {
        title: "Go-live + cura",
        description: "Deploy, fix rapidi, monitoraggio e micro ottimizzazioni.",
        time: "1-2 giorni",
      },
    ],
    about: {
      paragraphs: [
        "Mi chiamo Iyan Theekshana, ho {{age}} anni e aiuto brand e PMI a pubblicare siti essenziali, chiari e immediatamente comprensibili.",
        "Progetto e sviluppo interfacce pulite e veloci con React e Next.js, curando ritmo visivo, testi efficaci e immagini coerenti con il messaggio.",
        "Nel lavoro quotidiano ottimizzo codice e architetture per applicazioni full-stack utilizzando WiseJ e C#/.NET, con particolare attenzione a stabilita, manutenibilita e performance.",
        "Lavoro per cicli brevi e concreti: bozza condivisa, sviluppo rapido, verifiche su performance, SEO tecnica e accessibilita di base.",
        "Nel tempo libero realizzo web app e siti moderni con Next.js e React, sperimentando soluzioni UI/UX e tecnologie che rendano i progetti piu interessanti, veloci e scalabili.",
      ],
      quickFacts: [
        { label: "Citta", value: "Milano, IT", icon: MapPin },
        { label: "Ruolo", value: "Web designer & developer", icon: Sparkles },
      ],
      learning: ["Docker/Kubernetes", "Next.js avanzato", "Node.js avanzato"],
    },
    projects: {
      dakshi: {
        title: "Dakshi Portfolio",
        description:
          "Portfolio web per sassofonista: sezioni brevi, immagini di performance in primo piano e CTA per booking.",
      },
      linelife: {
        title: "LINELIFE CAF",
        description:
          "Supporto completo per dichiarazioni, domande INPS, ISEE, bonus e altro. Professionisti che semplificano ogni esigenza fiscale.",
      },
      scuolafinder: {
        title: "Scuola Finder",
        description:
          "Ricerca scuole di Milano con filtri rapidi e interfaccia pulita.",
      },
    },
    skills: {
      highlights: [
        {
          title: "UI Systems",
          body: "Componenti riusabili e naming chiaro per evolvere nel tempo.",
        },
        {
          title: "Performance",
          body: "Bundle leggeri, lazy loading e metriche monitorate.",
        },
        {
          title: "DX Curata",
          body: "Documentazione handoff, check SEO e accessibilita di base.",
        },
      ],
    },
    experience: [
      {
        company: "Datev Koinos",
        role: "Software Developer",
        period: "Giu 2023 - Presente",
        location: "Milano, Lombardia, Italia",
        description:
          "Mi occupo del porting di applicazioni web con Wisej in C#, lavorando in un team di quattro persone.",
        logo: "/img/datev.png",
      },
      {
        company: "Area Etica srl",
        role: "Junior Oracle Database Administrator",
        period: "Ago 2022 - Gen 2023",
        location: "Milano, Lombardia, Italia",
        description: "Stage come Junior Oracle DBA.",
        logo: "/img/area-etica.png",
      },
      {
        company: "Piksel",
        role: "Junior Configuration Specialist",
        period: "Giu 2022 - Ago 2022",
        location: "Milano, Lombardia, Italia",
        description: "Stage come Configuration Specialist.",
        logo: "/img/piksel.png",
      },
      {
        company: "WeMake",
        role: "Progettista 3D",
        period: "Feb 2017 - Mar 2017",
        location: "Milano, Lombardia, Italia",
        description: "Stage come progettista 3D.",
        logo: "/img/wemake.png",
      },
    ],
    education: [
      {
        school: "Galdus Formazione",
        degree: "IFTS Sviluppatore software per l'Industria 4.0",
        period: "Nov 2021 - Ott 2022",
        grade: "94/100",
        description:
          "Programmazione di base, Java, .NET, JavaScript, SQL, HTML5 & CSS3, Angular.",
      },
    ],
  },
  eng: {
    hero: {
      headline: "Web designer & developer",
      subline:
        "for brands and small businesses: less noise, more clarity and credibility online.",
      cardBody:
        "Lightweight sites with content upfront, fast delivery and a clean handoff.",
      note: "30-minute call to align on goals and content. I usually reply within 24 hours.",
      highlights: [
        "Tailored design, copy first",
        "Next.js/React build with clean handoff",
        "Performance and technical SEO tuning",
      ],
      badges: ["Prototype in 3-5 days", "Lightweight, production-ready code"],
      stats: [
        {
          label: "Live projects",
          value: "10+",
          tone: "from-emerald-500/80 via-cyan-400/70 to-emerald-300/70",
        },
        {
          label: "Prototype",
          value: "3-5 days",
          tone: "from-sky-500/70 via-white/60 to-emerald-200/60",
        },
        {
          label: "Response time",
          value: "<24h",
          tone: "from-amber-300/70 via-emerald-200/60 to-sky-300/70",
        },
      ],
    },
    services: [
      {
        title: "Design + UX",
        body: "Wireframes and essential UI to spotlight content and tone of voice.",
        deliverables: [
          "Clickable wireframe",
          "Lean UI kit and reusable components",
          "Shared prototype (Figma)",
        ],
        timeline: "3-5 days",
      },
      {
        title: "Web Development",
        body: "Next.js/React builds for fast, SEO-ready sites that are easy to update.",
        deliverables: [
          "Responsive site on Next.js",
          "Baseline technical SEO + analytics",
          "Documented handoff",
        ],
        timeline: "7-10 days",
      },
      {
        title: "Ongoing Care",
        body: "Updates, small optimizations and message testing.",
        deliverables: [
          "Monthly improvements",
          "Lightweight A/B tests on copy",
          "Performance monitoring",
        ],
        timeline: "Monthly",
      },
    ],
    process: [
      {
        title: "Alignment call",
        description: "30 minutes on goals, content, and tone.",
        time: "30 minutes",
      },
      {
        title: "Visual draft",
        description: "Wireframe and UI kit shared for quick approval.",
        time: "3-5 days",
      },
      {
        title: "Build",
        description: "Next.js build, final copy, technical SEO and tracking.",
        time: "7-10 days",
      },
      {
        title: "Go-live + care",
        description: "Deploy, quick fixes, monitoring and micro-optimizations.",
        time: "1-2 days",
      },
    ],
    about: {
      paragraphs: [
        "My name is Iyan Theekshana, I’m {{age}} years old, and I help brands and small businesses launch essential websites that are clear and easy to understand at first glance.",
        "I design and build clean, fast interfaces using React and Next.js, with strong attention to visual rhythm, effective copy, and meaningful imagery.",
        "In my daily work, I optimize code and architecture for full-stack applications using WiseJ and C#/.NET, focusing on stability, maintainability, and performance.",
        "I work in short, focused cycles: shared draft, rapid development, and checks on performance, technical SEO, and basic accessibility.",
        "In my free time, I build modern web apps and websites with Next.js and React, experimenting with UI/UX solutions and technologies that make projects more engaging, fast, and scalable.",
      ],
      quickFacts: [
        { label: "City", value: "Milan, IT", icon: MapPin },
        { label: "Role", value: "Web designer & developer", icon: Sparkles },
      ],
      learning: ["Docker/Kubernetes", "Advanced Next.js", "Advanced Node.js"],
    },
    projects: {
      dakshi: {
        title: "Dakshi Portfolio",
        description:
          "Web portfolio for a saxophonist: short sections, live performance visuals, and a booking CTA.",
      },
      linelife: {
        title: "LINELIFE CAF",
        description:
          "Complete support for tax returns, INPS applications, ISEE, bonuses and more. Professionals who simplify every fiscal requirement.",
      },
      scuolafinder: {
        title: "Scuola Finder",
        description:
          "School finder for Milan with quick filters and a clean UI.",
      },
    },
    skills: {
      highlights: [
        {
          title: "UI Systems",
          body: "Reusable components and clear naming to evolve over time.",
        },
        {
          title: "Performance",
          body: "Light bundles, lazy loading and monitored metrics.",
        },
        {
          title: "Polished DX",
          body: "Handoff docs, SEO checks and basic accessibility baked in.",
        },
      ],
    },
    experience: [
      {
        company: "Datev Koinos",
        role: "Software Developer",
        period: "Jun 2023 - Present",
        location: "Milan, Lombardy, Italy",
        description:
          "Porting web applications with Wisej in C#, working in a four-person team.",
        logo: "/img/datev.png",
      },
      {
        company: "Area Etica srl",
        role: "Junior Oracle Database Administrator",
        period: "Aug 2022 - Jan 2023",
        location: "Milan, Lombardy, Italy",
        description: "Internship as Junior Oracle DBA.",
        logo: "/img/area-etica.png",
      },
      {
        company: "Piksel",
        role: "Junior Configuration Specialist",
        period: "Jun 2022 - Aug 2022",
        location: "Milan, Lombardy, Italy",
        description: "Internship as Configuration Specialist.",
        logo: "/img/piksel.png",
      },
      {
        company: "WeMake",
        role: "3D Designer",
        period: "Feb 2017 - Mar 2017",
        location: "Milan, Lombardy, Italy",
        description: "Internship as 3D designer.",
        logo: "/img/wemake.png",
      },
    ],
    education: [
      {
        school: "Galdus Formazione",
        degree: "IFTS Software Developer for Industry 4.0",
        period: "Nov 2021 - Oct 2022",
        grade: "94/100",
        description:
          "Core programming, Java, .NET, JavaScript, SQL, HTML5 & CSS3, Angular.",
      },
    ],
  },
};

// Testi statici per localizzazione
export const copyIta = {
  navbar: {
    brandSubtitle: "Sono",
    availability: "Disponibile",
    cta: "Prenota una call",
    langToggleLabel: "EN",
    links: {
      "#home": "Home",
      "#services": "Servizi",
      "#projects": "Progetti",
      "#about": "Chi sono",
      "#experience": "Percorso",
      "#contact": "Contatti",
    },
  },
  hero: {
    badge: "Portfolio",
    ctaPrimary: "Prenota una call",
    ctaSecondary: "Guarda i progetti",
    leadSuffix:
      "per brand e piccole aziende: meno fronzoli, piu velocita e credibilita online.",
    note: "Call di 30 minuti per capire obiettivi e contenuti. Rispondo entro 24 ore.",
  },
  about: {
    sectionBadge: "Chi sono",
    sectionTitle: "Creo siti essenziali che mettono il contenuto al centro",
    journeyBadge: "Percorso in breve",
    styleLabel: "Stile",
    styleValue: "Minimal, tipografia chiara, pochi accenti",
    collabLabel: "Collaborazione",
    collabValue: "Allineamento rapido, handoff curato",
    profileBadge: "Profilo rapido",
    profileRole: "Web designer & developer",
    motivationLabel: "Motivazione",
    motivationValue:
      "Ridurre il superfluo, mettere a fuoco il messaggio e consegnare in tempi brevi.",
    learningTitle: "In questo momento sto studiando",
    aestheticLabel: "Estetica",
    aestheticValue:
      "Design pulito che mette il contenuto al centro e guida l’utente all’azione.",
  },
  skills: {
    sectionBadge: "Skills",
    sectionTitle: "Stack pronto per andare online",
    sectionSubtitle:
      "Design, sviluppo su Next.js/React e base .NET quando serve per API o integrazioni.",
    focusLabel: "Approccio",
    categorySubtitle: "Tool preferiti",
    skillBadge: "Core",
    skillCaption: "Usato in progetti reali",
  },
  services: {
    badge: "Servizi",
    title: "Cosa posso fare per il tuo brand",
    subtitle:
      "Design essenziale, sviluppo su Next.js/React e cura continua per mantenere il sito aggiornato e veloce.",
  },
  process: {
    badge: "Processo",
    title: "Un flusso rapido e trasparente",
  },
  experience: {
    badge: "Percorso",
    title: "Esperienze e formazione",
    experienceTitle: "Esperienza",
    educationTitle: "Formazione",
  },
  projects: {
    badge: "Portfolio",
    title: "Progetti reali",
    subtitle:
      "Landing, siti e web app con focus su chiarezza, performance e gestione semplice.",
    filterAll: "Tutti",
    tag: "Shot",
    live: "Live",
    repo: "Repository",
  },
  contact: {
    badge: "Contatti",
    title: "Parliamo del tuo prossimo sito",
    subtitle:
      "Call di 30 minuti per definire obiettivi, contenuti e timing di rilascio.",
    location: "Milano - Italiano / Inglese / Singalese",
    successMessage:
      "Grazie per il messaggio. Richiesta inviata con successo, ti risponderò il prima possibile.",
    socials: {
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  footer: {
    rights: "Tutti i diritti riservati.",
  },
};

export const copyEng = {
  navbar: {
    brandSubtitle: "I'm",
    availability: "Available",
    cta: "Book a call",
    langToggleLabel: "IT",
    links: {
      "#home": "Home",
      "#services": "Services",
      "#projects": "Projects",
      "#about": "About",
      "#experience": "Experience",
      "#contact": "Contact",
    },
  },
  hero: {
    badge: "Portfolio",
    ctaPrimary: "Book a call",
    ctaSecondary: "View projects",
    leadSuffix:
      "for brands and small businesses: less noise, more clarity and speed.",
    note: "30-minute call to align on goals and content. I usually reply within 24 hours.",
  },
  about: {
    sectionBadge: "About",
    sectionTitle: "I build essential websites with content in focus",
    journeyBadge: "Journey at a glance",
    styleLabel: "Style",
    styleValue: "Minimal, clean type, restrained accents",
    collabLabel: "Collaboration",
    collabValue: "Fast alignment, documented handoff",
    profileBadge: "Quick profile",
    profileRole: "Web designer & developer",
    motivationLabel: "Motivation",
    motivationValue: "Cut the noise, focus the message, deliver quickly.",
    learningTitle: "Currently studying",
    aestheticLabel: "Aesthetic",
    aestheticValue:
      "Clean design that puts content first and guides users to take action.",
  },
  skills: {
    sectionBadge: "Skills",
    sectionTitle: "Production-ready stack",
    sectionSubtitle:
      "Design, Next.js/React builds and .NET when needed for APIs or integrations.",
    focusLabel: "Approach",
    categorySubtitle: "Preferred tools",
    skillBadge: "Core",
    skillCaption: "Used in real projects",
  },
  services: {
    badge: "Services",
    title: "What I deliver",
    subtitle:
      "Essential design, Next.js/React builds, and ongoing care to keep your site sharp and fast.",
  },
  process: {
    badge: "Process",
    title: "A fast, transparent flow",
  },
  experience: {
    badge: "Path",
    title: "Experience & education",
    experienceTitle: "Experience",
    educationTitle: "Education",
  },
  projects: {
    badge: "Projects",
    title: "Real projects",
    subtitle:
      "Landing pages, websites, and web apps built for clarity, speed and easy maintenance.",
    filterAll: "All",
    tag: "Shot",
    live: "Live Demo",
    repo: "GitHub Repo",
  },
  contact: {
    badge: "Contact",
    title: "Let's plan your next site",
    subtitle: "30-minute call to align on goals, content and launch timeline.",
    location: "Milan - English / Italian / Sinhala",
    successMessage:
      "Thank you for your message. Your request has been successfully sent. I will get back to you as soon as possible.",
    socials: {
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};

// Alias utili: i componenti leggono dal contenitore unico
export const personalInfo = content.personal;
export const navLinks = content.navigation.links;
export const heroStats = content.hero.stats;
export const heroHighlights = content.hero.highlights;
export const heroBadges = content.hero.badges;
export const aboutData = content.about;
export const skills = content.skills.items;
export const skillCategories = content.skills.categories;
export const skillHighlights = content.skills.highlights;
export const projects = content.projects;
export const experience = content.experience;
export const education = content.education;

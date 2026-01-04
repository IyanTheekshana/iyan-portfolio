export type GlossaryTerm = {
  key: string;
  label: string;
  aliases?: string[];
  description: {
    ita: string;
    eng: string;
  };
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    key: "iyan-theekshana",
    label: "Iyan Theekshana",
    description: {
      ita: "ඉයන් තීක්ෂන, nato il 26/08/1998 a Colombo, Sri Lanka perla dell'Oceano Indiano.",
      eng: "ඉයන් තීක්ෂන, born on 26/08/1998 in Colombo, Sri Lanka, pearl of the Indian Ocean.",
    },
  },
  {
    key: "dx",
    label: "DX",
    description: {
      ita: "Developer Experience: quanto e semplice e gradevole per gli sviluppatori lavorare sul progetto.",
      eng: "Developer Experience: how smooth and clear it is for developers to work on the product.",
    },
  },
  {
    key: "ux",
    label: "UX",
    description: {
      ita: "User Experience: esperienza complessiva dell'utente quando interagisce con il sito o il prodotto.",
      eng: "User Experience: the overall feeling and flow a user has when navigating a product.",
    },
  },
  {
    key: "ui",
    label: "UI",
    description: {
      ita: "User Interface: l'interfaccia visiva con cui le persone interagiscono (layout, bottoni, moduli).",
      eng: "User Interface: the visual layer people interact with (layout, buttons, forms).",
    },
  },
  {
    key: "seo",
    label: "SEO",
    description: {
      ita: "Search Engine Optimization: ottimizzazioni tecniche e di contenuto per farsi trovare sui motori di ricerca.",
      eng: "Search Engine Optimization: technical and content tweaks to rank better on search engines.",
    },
  },
  {
    key: "api",
    label: "API",
    aliases: ["APIs"],
    description: {
      ita: "Application Programming Interface: un punto di accesso per far dialogare sistemi e applicazioni.",
      eng: "Application Programming Interface: a contract that lets different systems exchange data reliably.",
    },
  },
  {
    key: "cta",
    label: "CTA",
    description: {
      ita: "Call To Action: il bottone o link che guida l'utente verso l'azione principale (prenota, contattami, acquista).",
      eng: "Call To Action: the button or link that drives the main action (book, contact, buy).",
    },
  },
  {
    key: "ab-test",
    label: "A/B test",
    aliases: ["A/B tests", "A/B testing"],
    description: {
      ita: "Confronto tra due varianti (A e B) per capire quale messaggio o design funziona meglio.",
      eng: "Comparing two variants (A and B) to see which copy or design performs better.",
    },
  },
  {
    key: "nextjs",
    label: "Next.js",
    description: {
      ita: "Framework React che abilita rendering lato server e routing ottimizzato, ideale per siti veloci.",
      eng: "React framework with server rendering and smart routing, great for fast production sites.",
    },
  },
  {
    key: "docker",
    label: "Docker",
    description: {
      ita: "Piattaforma per creare e far girare applicazioni in container isolati e portabili.",
      eng: "Platform to build and run applications in portable, isolated containers.",
    },
  },
  {
    key: "kubernetes",
    label: "Kubernetes",
    aliases: ["K8s"],
    description: {
      ita: "Orchestratore di container: gestisce deploy, scaling e networking di più container.",
      eng: "Container orchestrator that manages deployment, scaling, and networking for many containers.",
    },
  },
  {
    key: "react",
    label: "React",
    description: {
      ita: "Libreria JavaScript per costruire interfacce dinamiche a componenti.",
      eng: "JavaScript library for building component-based, dynamic user interfaces.",
    },
  },
  {
    key: "nodejs",
    label: "Node.js",
    aliases: ["NodeJs", "Node JS"],
    description: {
      ita: "Runtime JavaScript lato server basato su V8, ideale per API e servizi veloci.",
      eng: "Server-side JavaScript runtime on V8, used for fast APIs and services.",
    },
  },
  {
    key: "angular",
    label: "Angular",
    description: {
      ita: "Framework front-end di Google per applicazioni web strutturate con TypeScript.",
      eng: "Google's front-end framework for structured web apps built with TypeScript.",
    },
  },
  {
    key: "landing",
    label: "Landing page",
    aliases: ["Landing pages", "Landing"],
    description: {
      ita: "Pagina focalizzata su un singolo obiettivo (lead, prenotazione, acquisto) con messaggio e CTA chiari.",
      eng: "Single-purpose page aimed at one goal (lead, booking, purchase) with focused copy and CTAs.",
    },
  },
  {
    key: "wisej",
    label: "Wisej",
    aliases: ["WiseJ"],
    description: {
      ita: "Framework per applicazioni web in .NET che consente UI ricche con componenti server-side.",
      eng: ".NET web framework that ships rich UI components rendered from the server side.",
    },
  },
  {
    key: "pmi",
    label: "PMI",
    aliases: ["SMEs"],
    description: {
      ita: "Piccole e Medie Imprese: aziende di dimensioni ridotte con focus su efficienza e risultati rapidi.",
      eng: "Small and Medium Enterprises: leaner teams that need fast, efficient delivery.",
    },
  },
];

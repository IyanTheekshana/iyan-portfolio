import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import MagicBackground from "@/components/MagicBackground";
import MagicCursor from "@/components/MagicCursor";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});
const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iyan Theekshana | Web designer & developer",
  description:
    "Siti web essenziali per brand e PMI: design, sviluppo Next.js/React, handoff e cura continua.",
  verification: {
    google: "iv4xz7NfdtVpI6PthR0aOD-_ceDY2D4VwVTzG04Zd40",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon", sizes: "any" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${heading.variable} ${body.variable} font-body antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Providers>
          <MagicBackground />
          <MagicCursor />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

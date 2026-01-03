"use client";

import { CopyProvider } from "@/lib/copy-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CopyProvider>{children}</CopyProvider>;
}

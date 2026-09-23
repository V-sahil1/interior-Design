"use client";

import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { initAnimations } from "@/lib/animations";

/** Re-mounts on every navigation, so each page gets a fresh GSAP context. */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => initAnimations(ref.current!), { scope: ref });
  return <div ref={ref}>{children}</div>;
}

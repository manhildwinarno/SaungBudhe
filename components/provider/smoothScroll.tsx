"use client";

import ReactLenis from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <HashScroller />
      {children}
    </ReactLenis>
  );
}

function HashScroller() {
  const pathname = usePathname();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollTarget");

      let attempts = 0;
      const maxAttempts = 60;
      const pollInterval = 50;

      const intervalId = setInterval(() => {
        const currentLenis = lenisRef.current;
        if (!currentLenis) return;

        attempts++;
        const el = document.querySelector(scrollTarget);

        if (
          (el && el.getBoundingClientRect().height > 0) ||
          attempts >= maxAttempts
        ) {
          clearInterval(intervalId);

          currentLenis.resize();

          currentLenis.scrollTo(scrollTarget, {
            offset: 0,
            onComplete: () => {
              window.history.pushState(null, "", scrollTarget);
            },
          });
        }
      }, pollInterval);

      return () => clearInterval(intervalId);
    }

    const hash = window.location.hash;
    if (hash) {
      const timeoutId = setTimeout(() => {
        lenisRef.current?.scrollTo(hash, { offset: 0 });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}

"use client";
import { useEffect } from "react";

/* Nav scrolled state, cursor spotlight on .glass, aurora parallax, scroll cue fade. */
export default function NavScroll() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const aur = document.querySelector<HTMLElement>(".aurora");
    const cue = document.querySelector<HTMLElement>(".cue");
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        nav?.classList.toggle("scrolled", y > 40);
        if (!reduce && aur && y < 1400) aur.style.transform = `translate3d(0,${y * 0.15}px,0)`;
        if (cue) cue.style.opacity = String(Math.max(0, 1 - y / 200));
      });
    };
    const onMove = (e: PointerEvent) => {
      const g = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".glass");
      if (!g) return;
      const r = g.getBoundingClientRect();
      g.style.setProperty("--mx", `${e.clientX - r.left}px`);
      g.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}

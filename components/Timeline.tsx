"use client";
import { useEffect, useRef, useState } from "react";

const steps: { t: string; d: string; chips: string[]; skel?: boolean }[] = [
  { t: "Pick your class", d: "Choose board, grade, subject and chapter.", chips: ["CBSE", "Class 7", "Science", "Ch.6"] },
  { t: "Tell us the goal", d: "Lesson plan, worksheet, paper, activity or summary; add a note if you like.", chips: ["Lesson plan", "Worksheet", "Paper"] },
  { t: "AI drafts it", d: "A structured, curriculum-aware draft appears in seconds.", chips: [], skel: true },
  { t: "Refine and personalise", d: "Edit, regenerate, adjust difficulty, use the writing assistant.", chips: ["Edit", "Regenerate", "Easier"] },
  { t: "Teach and track", d: "Export or print, schedule on the calendar, tick off tasks.", chips: ["Print", "Calendar", "Done"] },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setP(0);
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="tl" ref={ref} style={{ ["--p" as string]: p }}>
      <div className="tl-line" aria-hidden><div className="tl-prog" /></div>
      <ol>
        {steps.map((s, i) => {
          const active = p >= (i + 0.35) / steps.length || p >= 1;
          return (
            <li key={s.t} className={`tl-step${active ? " active" : ""}`}>
              <span className="tl-node mono" aria-hidden>0{i + 1}</span>
              <div className="glass tl-card">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="chips" aria-hidden>
                  {s.skel ? <div className="skel"><i /><i /><i /></div> : s.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

const lines = ["Explain how plants make food using sunlight", "Identify chlorophyll, stomata and their roles", "Run a leaf-testing starter activity (10 min)", "Exit ticket: 3 questions on the process"];

export default function Demo() {
  const [n, setN] = useState(0); // 0..lines+2
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(lines.length + 1); return; }
    const t = setInterval(() => setN((v) => (v >= lines.length + 5 ? 0 : v + 1)), 1200);
    return () => clearInterval(t);
  }, []);
  const shown = Math.min(n, lines.length);
  const done = n > lines.length;
  const icon = (d: string) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
  return (
    <div className="mock-wrap" aria-hidden>
      <div className="mock-ring" />
      <div className="mock glass">
        <div className="mock-bar"><i /><i /><i /><span>Lesson plan · Class 7B · Photosynthesis</span></div>
        <div className="mock-body">
          <div className="mock-side">
            {icon("M4 5h16v14H4z M8 9h8 M8 13h5")}{icon("M6 3h9l3 3v15H6z")}{icon("M8 2v4M16 2v4M3 8h18v13H3z")}{icon("M9 12l2 2 4-4")}
          </div>
          <div className="mock-main">
            <div className="mock-h">Photosynthesis</div>
            <div className="mock-sub mono">Objectives</div>
            <ul>
              {lines.slice(0, shown).map((l) => <li key={l} className="typed">{l}</li>)}
            </ul>
            {done ? (
              <div className="ready">Draft ready in 12s</div>
            ) : (
              <div className="draft"><span>Drafting curriculum-aligned plan…</span><div className="bar"><i /></div></div>
            )}
          </div>
        </div>
      </div>
      <div className="sat s1"><b className="dot warm" />Worksheet · 3 levels</div>
      <div className="sat s2"><b className="dot" />Paper · 80 marks ✓</div>
    </div>
  );
}

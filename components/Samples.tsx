"use client";
import { useRef, useState } from "react";

const tabs = [
  {
    id: "lesson", label: "Lesson plan", meta: "Class 7 · Science · Photosynthesis · 40 min",
    body: (
      <>
        <h4>Learning objectives</h4>
        <ul><li>Explain how plants make food using sunlight, water and carbon dioxide.</li><li>Identify the role of chlorophyll and stomata.</li></ul>
        <h4>Starter <span>5 min</span></h4>
        <p>“Why does a plant kept in a dark cupboard turn pale?” Pairs predict, then share.</p>
        <h4>Activity <span>15 min</span></h4>
        <p>Teacher demo: starch test on a leaf kept in sunlight vs. shade. Students record observations.</p>
        <h4>Exit ticket <span>5 min</span></h4>
        <p>Write the word equation for photosynthesis and name one factor that affects its rate.</p>
      </>
    ),
  },
  {
    id: "sheet", label: "Worksheet", meta: "Class 5 · Maths · Fractions · 3 levels",
    body: (
      <>
        <h4>Support</h4>
        <p>1. Shade ½ of the circle. 2. Which is bigger, ¼ or ½?</p>
        <h4>Core</h4>
        <p>3. Add ⅜ + ²⁄₈. 4. Riya ate ¾ of a pizza. What fraction is left?</p>
        <h4>Stretch</h4>
        <p>5. A ribbon of 2½ m is cut into pieces of ¼ m. How many pieces? Show your working.</p>
        <p className="key">Answer key included</p>
      </>
    ),
  },
  {
    id: "paper", label: "Question paper", meta: "Class 8 · Maths · 50 marks · 3 sections",
    body: (
      <>
        <h4>Section A · MCQ <span>10 × 1 = 10</span></h4>
        <p>1. The square root of 196 is (a) 12 (b) 14 (c) 16 (d) 18</p>
        <h4>Section B · Short answer <span>5 × 3 = 15</span></h4>
        <p>11. Find the value of (2x + 3)² when x = 2.</p>
        <h4>Section C · Long answer <span>5 × 5 = 25</span></h4>
        <p>16. A shopkeeper buys an item for ₹800 and sells it at a 15% profit. Find the selling price and the profit.</p>
        <p className="key">Marking scheme and answer key included</p>
      </>
    ),
  },
];

export default function Samples() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setI(n);
    refs.current[n]?.focus();
  };
  const t = tabs[i];
  return (
    <div className="samples">
      <div className="stabs" role="tablist" aria-label="Sample outputs" onKeyDown={onKey}>
        {tabs.map((x, k) => (
          <button key={x.id} ref={(el) => { refs.current[k] = el; }} role="tab" id={`tab-${x.id}`} aria-selected={i === k} aria-controls={`panel-${x.id}`} tabIndex={i === k ? 0 : -1} className="stab" onClick={() => setI(k)}>{x.label}</button>
        ))}
      </div>
      <div className="glass doc" role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} key={t.id}>
        <div className="doc-top"><span className="mono">{t.meta}</span><span className="chip warm">Editable draft</span></div>
        <div className="doc-body">{t.body}</div>
      </div>
      <p className="mono samples-note">Sample content shown for illustration.</p>
    </div>
  );
}

import { faq } from "@/lib/faq";

export default function Faq() {
  return (
    <div className="faq">
      {faq.map(([q, a]) => (
        <details key={q}>
          <summary>{q}<svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></summary>
          <div className="ans"><div><p>{a}</p></div></div>
        </details>
      ))}
    </div>
  );
}

"use client";
import { useState } from "react";

type F = { name: string; email: string; school: string; role: string; classSize: string; note: string; website: string };
const empty: F = { name: "", email: "", school: "", role: "", classSize: "", note: "", website: "" };
const ROLES = ["Teacher", "Principal", "Admin/Coordinator", "Other"];
const SIZES = ["<20", "20-30", "31-40", "40+"];

function check(k: keyof F, v: string): string {
  v = v.trim();
  switch (k) {
    case "name": return v.length < 2 || v.length > 80 ? "Please enter your full name." : "";
    case "email": return v.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "That email doesn't look right." : "";
    case "school": return v.length < 2 || v.length > 120 ? "Tell us which school you're from." : "";
    case "role": return ROLES.includes(v) ? "" : "Choose your role.";
    case "classSize": return SIZES.includes(v) ? "" : "Choose your class strength.";
    case "note": return v.length > 500 ? "Please keep your note under 500 characters." : "";
    default: return "";
  }
}
const keys: (keyof F)[] = ["name", "email", "school", "role", "classSize", "note"];
const Warn = () => <svg aria-hidden viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16v.01" /></svg>;

export default function WaitlistForm() {
  const [f, setF] = useState<F>(empty);
  const [err, setErr] = useState<Partial<Record<keyof F, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fail">("idle");

  const set = (k: keyof F, v: string) => {
    setF((o) => ({ ...o, [k]: v }));
    if (err[k]) setErr((o) => ({ ...o, [k]: check(k, v) }));
  };
  const blur = (k: keyof F) => setErr((o) => ({ ...o, [k]: check(k, f[k]) }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Partial<Record<keyof F, string>> = {};
    keys.forEach((k) => { const m = check(k, f[k]); if (m) errs[k] = m; });
    setErr(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (r.ok) { setStatus("ok"); return; }
      if (r.status === 400) {
        const j = await r.json().catch(() => ({}));
        if (j.errors) { setErr(j.errors); setStatus("idle"); return; }
      }
      setStatus("fail");
    } catch { setStatus("fail"); }
  }

  const field = (k: keyof F, label: string, input: React.ReactNode) => (
    <div className={`fld${err[k] ? " bad" : ""}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      {input}
      {err[k] && <p className="msg" id={`e-${k}`} role="alert"><Warn />{err[k]}</p>}
    </div>
  );
  const common = (k: keyof F) => ({
    id: `f-${k}`, name: k, value: f[k],
    "aria-invalid": !!err[k], "aria-describedby": err[k] ? `e-${k}` : undefined,
    onBlur: () => blur(k),
  });

  return (
    <div className="glass join-card" aria-live="polite">
      {status === "ok" ? (
        <div className="ok">
          <svg aria-hidden viewBox="0 0 52 52" width="72" height="72" fill="none" stroke="var(--mint)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle className="ok-c" cx="26" cy="26" r="23" /><path className="ok-t" d="M15 27l8 8 15-17" /></svg>
          <h3>You&apos;re on the list!</h3>
          <p>We&apos;ll email you when Gyanvistara opens for your school.</p>
          <div className="confetti" aria-hidden>{Array.from({ length: 16 }, (_, i) => <i key={i} style={{ ["--i" as string]: i }} />)}</div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          {status === "fail" && (
            <div className="banner" role="alert"><Warn />Something went wrong and we couldn&apos;t save your spot. Please try again in a moment.</div>
          )}
          <div className="row2">
            {field("name", "Full name", <input type="text" autoComplete="name" {...common("name")} onChange={(e) => set("name", e.target.value)} />)}
            {field("email", "Email", <input type="email" autoComplete="email" {...common("email")} onChange={(e) => set("email", e.target.value)} />)}
          </div>
          {field("school", "School", <input type="text" autoComplete="organization" {...common("school")} onChange={(e) => set("school", e.target.value)} />)}
          <div className="row2">
            {field("role", "Role", <select {...common("role")} onChange={(e) => set("role", e.target.value)}><option value="">Select…</option>{ROLES.map((r) => <option key={r}>{r}</option>)}</select>)}
            {field("classSize", "Class strength", <select {...common("classSize")} onChange={(e) => set("classSize", e.target.value)}><option value="">Students per class…</option>{SIZES.map((r) => <option key={r}>{r}</option>)}</select>)}
          </div>
          {field("note", "Note (optional)", <textarea rows={3} maxLength={600} {...common("note")} onChange={(e) => set("note", e.target.value)} />)}
          <div className="count mono" aria-hidden>{f.note.length}/500</div>
          <div className="hp" aria-hidden="true">
            <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={(e) => set("website", e.target.value)} /></label>
          </div>
          <button className="btn warm block" type="submit" disabled={status === "sending"}>
            {status === "sending" ? <><span className="spin" aria-hidden />Saving your spot…</> : status === "fail" ? "Try again" : "Join the waitlist"}
          </button>
        </form>
      )}
    </div>
  );
}

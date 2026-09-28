import Image from "next/image";
import Footer from "@/components/Footer";

export default function LegalShell({ title, updated, kicker, children }: { title: string; updated?: string; kicker?: string; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <nav className="nav" aria-label="Main" style={{ marginBottom: 0 }}>
        <a href="/" className="brand"><Image src="/logo.png" alt="" width={30} height={30} />Gyanvistara</a>
        <div className="links">
          <a href="/#features">Features</a><a href="/#workflow">Workflow</a><a href="/about">About</a><a href="/contact">Contact</a>
        </div>
        <a href="/#join" className="btn sm">Join waitlist</a>
      </nav>
      <main className="legal" id="main">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h1>{title}</h1>
        {updated && <p className="upd mono">Last updated {updated}</p>}
        {children}
      </main>
      <Footer />
    </>
  );
}

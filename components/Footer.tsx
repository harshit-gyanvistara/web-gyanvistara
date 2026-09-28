import Image from "next/image";

const social = [
  { label: "Instagram", href: "https://www.instagram.com/gyanvistara.ai", d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3zm2.5 13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5z M17.3 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" },
  { label: "Facebook", href: "https://www.facebook.com/share/19Kyf7PJpz/", d: "M13.5 21v-7.5H16l.5-3H13.5V8.3c0-.87.24-1.46 1.5-1.46H16.6V4.14C16.34 4.1 15.46 4 14.44 4 12.3 4 10.85 5.3 10.85 7.76v2.24H8.5v3h2.35V21z" },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="mark" aria-hidden>Gyanvistara</div>
      <div className="wrap foot-in">
        <div className="cols">
          <div>
            <span className="brand"><Image src="/logo.png" alt="" width={26} height={26} />Gyanvistara</span>
            <p className="tagline">The AI teaching assistant for Indian schools. Teach more. Prepare less.</p>
            <div className="social" aria-label="Follow Gyanvistara">
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div><h4>Product</h4><a href="/#features">Features</a><a href="/#workflow">Workflow</a><a href="/#samples">Samples</a><a href="/#faq">FAQ</a></div>
          <div><h4>Company</h4><a href="/about">About</a><a href="/contact">Contact</a><a href="/#join">Waitlist</a></div>
          <div><h4>Legal</h4><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Gyanvistara. Made for teachers in India.</p>
      </div>
    </footer>
  );
}

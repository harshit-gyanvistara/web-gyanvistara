import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = { title: "Contact — Gyanvistara", description: "Get in touch with the Gyanvistara team." };

export default function Contact() {
  return (
    <LegalShell title="Contact us" updated="29 September 2026" kicker="We'd love to hear from you">
      <p>Whether you&apos;re a teacher curious about Gyanvistara, a principal exploring it for your school, or just have a question — reach out any time.</p>
      <h2>Email</h2>
      <p>The fastest way to reach us is <a href="mailto:harshit.gyanvistara@gmail.com">harshit.gyanvistara@gmail.com</a>. We read every message and typically reply within a couple of days.</p>
      <h2>Phone</h2>
      <p>Call or WhatsApp us at <a href="tel:+919667377685">+91 96673 77685</a>.</p>
      <h2>Follow us</h2>
      <p>
        <a href="https://www.instagram.com/gyanvistara.ai" target="_blank" rel="noopener noreferrer">Instagram</a>
        {" · "}
        <a href="https://www.facebook.com/share/19Kyf7PJpz/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
      <h2>Want early access?</h2>
      <p>If you&apos;re asking about bringing Gyanvistara to your school, the quickest path is to <a href="/#join">join the waitlist</a> with your school&apos;s details — we&apos;ll be in touch as we onboard new schools.</p>
      <h2>Press or partnerships</h2>
      <p>For press enquiries or partnership ideas, email us with a short note on what you have in mind and we&apos;ll route it to the right person.</p>
    </LegalShell>
  );
}

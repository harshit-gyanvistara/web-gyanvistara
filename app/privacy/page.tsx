import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = { title: "Privacy Policy — Gyanvistara", description: "How Gyanvistara handles your waitlist information." };

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" kicker="Legal" updated="29 September 2026">
      <p className="draftnote">This is a placeholder policy covering the waitlist only. We&apos;ll publish a full privacy policy before the product itself launches.</p>
      <p>This page explains what we collect when you join the Gyanvistara waitlist and how we use it. It is written in plain language on purpose.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Your name, email address, school, role and typical class strength.</li>
        <li>An optional note, if you choose to write one.</li>
      </ul>
      <h2>Why we collect it</h2>
      <ul>
        <li>To contact you about early access to Gyanvistara.</li>
        <li>To understand which schools and roles we should prioritise.</li>
      </ul>
      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your information.</li>
        <li>We do not share it with advertisers.</li>
      </ul>
      <h2>Keeping and deleting your data</h2>
      <p>We keep waitlist details until the waitlist closes or you ask us to remove them. To see, correct or delete your details, email <a href="mailto:harshit.gyanvistara@gmail.com">harshit.gyanvistara@gmail.com</a>.</p>
      <h2>Children</h2>
      <p>The waitlist is for adults working in schools. Please do not submit information about students.</p>
      <h2>Changes</h2>
      <p>If we change this page, we will update the date above.</p>
    </LegalShell>
  );
}

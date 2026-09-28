import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = { title: "Terms & Conditions — Gyanvistara", description: "Terms for using the Gyanvistara website and waitlist." };

export default function Terms() {
  return (
    <LegalShell title="Terms & Conditions" kicker="Legal" updated="29 September 2026">
      <p className="draftnote">This is a placeholder covering the website and waitlist only. Full terms for the product will follow before launch.</p>
      <p>These terms cover this website and the waitlist. The product will have its own terms when it launches.</p>
      <h2>The waitlist</h2>
      <p>Joining the waitlist does not guarantee access, a launch date or a price. We may invite schools in groups and in any order.</p>
      <h2>Your information</h2>
      <p>Please give accurate details. How we use them is described on the <a href="/privacy">privacy page</a>.</p>
      <h2>Samples and figures</h2>
      <p>Sample lesson plans, worksheets, papers and any figures on this site are for illustration. Figures marked “Illustrative” are not measured results.</p>
      <h2>AI-generated content</h2>
      <p>Content produced by AI can contain mistakes. Teachers should review and edit everything before using it with students.</p>
      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:harshit.gyanvistara@gmail.com">harshit.gyanvistara@gmail.com</a>.</p>
    </LegalShell>
  );
}

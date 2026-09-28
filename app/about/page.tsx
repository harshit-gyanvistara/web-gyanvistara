import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = { title: "About — Gyanvistara", description: "Why we're building Gyanvistara, the AI teaching assistant for Indian schools." };

export default function About() {
  return (
    <LegalShell title="About Gyanvistara" updated="29 September 2026" kicker="Our story">
      <p>Gyanvistara started from a simple observation: teachers in India spend hours every evening on work that has nothing to do with teaching — drafting lesson plans, setting worksheets at three levels, building question papers, and writing the circular that&apos;s due tomorrow morning.</p>
      <p>None of that is why anyone became a teacher. So we&apos;re building an AI teaching assistant that handles the first draft — structured, aligned to your board and chapter, ready to edit — so the time it used to take goes back to the classroom, and to your evening.</p>
      <h2>What we believe</h2>
      <ul>
        <li><strong>Teachers stay in charge.</strong> Every draft opens in an editor. Nothing reaches a student until a teacher has reviewed it.</li>
        <li><strong>Built for Indian classrooms.</strong> CBSE, ICSE and state boards, in English and Hindi — not a generic template translated after the fact.</li>
        <li><strong>The whole school, not just one teacher.</strong> Principals and admins need visibility and a staff roster, not just another app for teachers to check.</li>
      </ul>
      <h2>Where we are</h2>
      <p>We&apos;re a small team building Gyanvistara and onboarding schools in small groups so we can get the details right before opening more widely. If that sounds useful for your school, <a href="/#join">join the waitlist</a> — we&apos;d love to hear from you.</p>
      <h2>Get in touch</h2>
      <p>Questions, feedback, or just want to say hello? Visit our <a href="/contact">contact page</a> or email us directly at <a href="mailto:harshit.gyanvistara@gmail.com">harshit.gyanvistara@gmail.com</a>.</p>
    </LegalShell>
  );
}

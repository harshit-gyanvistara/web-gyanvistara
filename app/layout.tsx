import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { faq } from "@/lib/faq";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["600"], variable: "--font-deva", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Gyanvistara — The AI teaching assistant for your school",
  description: "Lesson plans, worksheets, question papers and more in minutes. Gyanvistara gives every teacher back their evenings.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Gyanvistara — Teach more. Prepare less.",
    description: "The AI teaching assistant that drafts, plans and organises so teachers can teach.",
    type: "website",
    siteName: "Gyanvistara",
  },
  twitter: { card: "summary_large_image", title: "Gyanvistara — Teach more. Prepare less." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Gyanvistara",
      url: SITE,
      logo: `${SITE}/logo.png`,
      telephone: "+91-9667377685",
      email: "harshit.gyanvistara@gmail.com",
      sameAs: ["https://www.instagram.com/gyanvistara.ai", "https://www.facebook.com/share/19Kyf7PJpz/"],
    },
    { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${deva.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

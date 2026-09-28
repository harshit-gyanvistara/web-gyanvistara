import Image from "next/image";
import Reveal from "@/components/Reveal";
import Demo from "@/components/Demo";
import Faq from "@/components/Faq";
import CountUp from "@/components/CountUp";
import Timeline from "@/components/Timeline";
import NavScroll from "@/components/NavScroll";
import WaitlistForm from "@/components/WaitlistForm";
import Samples from "@/components/Samples";
import StickyCta from "@/components/StickyCta";
import Footer from "@/components/Footer";

const I = ({ d }: { d: string }) => (
  <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);
const P = {
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 21h15",
  file: "M6 3h9l3 3v15H6z M14 3v4h4 M9 12h6 M9 16h6",
  grid: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  note: "M5 4h14v12H8l-3 3z M9 9h6",
  pen: "M4 20l4-1L19 8l-3-3L5 16z",
  cal: "M8 2v4M16 2v4M3 8h18v13H3z M8 13l2 2 4-4",
  users: "M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-2a4 4 0 0 0-3-3.9",
};

const tools: { cls: string; tint: string; ic: string; t: string; d: string; vis: React.ReactNode }[] = [
  { cls: "b-lesson", tint: "violet", ic: P.book, t: "Lesson plans", d: "Objectives, activities and assessment, structured by your teaching method.", vis: <div className="skel big"><i /><i /><i /><i /></div> },
  { cls: "b-paper", tint: "cyan", ic: P.file, t: "Question papers", d: "Set sections and weightage, get a paper with an answer key.", vis: <div className="chips"><span className="chip">2 marks</span><span className="chip">3 marks</span><span className="chip">5 marks</span></div> },
  { cls: "b-work", tint: "mint", ic: P.grid, t: "Worksheets", d: "Practice at the right level.", vis: <div className="chips"><span className="chip">Support</span><span className="chip">Core</span><span className="chip">Stretch</span></div> },
  { cls: "b-act", tint: "saffron", ic: P.spark, t: "Activities", d: "Group or solo classroom activities in seconds.", vis: null },
  { cls: "b-sum", tint: "rose", ic: P.note, t: "Summaries", d: "Turn long chapters into crisp notes.", vis: null },
  { cls: "b-cal", tint: "cyan", ic: P.cal, t: "Calendar & tasks", d: "Deadlines, events and to-dos in one place.", vis: <ul className="agenda"><li><b /> Grade unit tests</li><li><b /> Parent calls, 2 pm</li></ul> },
  { cls: "b-write", tint: "violet", ic: P.pen, t: "Writing assistant", d: "Circulars, remarks and parent messages, well phrased.", vis: <div className="letter mono">Dear parents, the annual day will be held on<span className="caret" /></div> },
  { cls: "b-roster", tint: "mint", ic: P.users, t: "Admin staff roster", d: "Principals see the roster and cover in one view.", vis: <div className="avs"><i /><i /><i /><i /><span className="chip warm">Cover suggested</span></div> },
];

const why = [
  ["Get your evenings back", "Draft a lesson plan in about 2 minutes instead of an hour.", "bars"],
  ["Question papers, balanced", "Set papers by chapter, difficulty and marks, with answer keys.", ""],
  ["Made for India", "Aligned to your board, grade and syllabus, not a foreign template.", ""],
  ["Every child, every level", "Generate worksheet variants for support, core and stretch.", "dots"],
  ["One calm dashboard", "Calendar, tasks and deadlines together, no more lost messages.", ""],
  ["Run the school smoothly", "Admins manage the staff roster and cover in one view.", ""],
];

const evenings: [string, string, string][] = [
  ["6:30 pm", "Lesson plan for tomorrow", "60 min"],
  ["7:45 pm", "Three worksheet levels", "45 min"],
  ["8:30 pm", "Unit test paper and key", "90 min"],
  ["10:00 pm", "Chasing circulars and deadlines", "30 min"],
];

const audiences = [
  { who: "For teachers", h: "Your prep, done before the kettle boils.", pts: ["Lesson plans, worksheets and papers that follow your board and chapter", "Rewrite anything: simpler, harder, shorter, in Hindi", "Calendar and tasks beside your content, so nothing slips", "Parent messages and remarks in your own tone"] },
  { who: "For principals and admins", h: "A school that runs on one page.", pts: ["Staff roster and cover suggestions in a single view", "Consistent, well-structured material across classes", "See how the school is using the tool", "Onboard staff in minutes, no training day needed"] },
];

const rows: [string, string, string][] = [
  ["Follows your board, grade and chapter", "Yes", "Only if you write it into the prompt"],
  ["Structured lesson plans", "Built in", "You design the format each time"],
  ["Worksheets at three difficulty levels", "One click", "Repeated prompts"],
  ["Question papers with marks and answer key", "Built in", "Manual set-up and checking"],
  ["Calendar, tasks and staff roster", "Included", "Not included"],
  ["Prompt writing required", "None", "Every time"],
];

const trust = [
  ["You review everything", "Every draft opens in an editor. Nothing goes to a student until you say so. AI can make mistakes, and we design for that."],
  ["Your school's workspace", "Content stays within your school's workspace. We collect only what we need to run the product, and we never sell it."],
  ["Made for your syllabus", "Built around CBSE, ICSE and state boards, with English and Hindi, so drafts fit your classroom."],
  ["Teachers first", "It handles the paperwork, not the teaching. Your judgement and voice are the point."],
];

const next = [
  ["You join", "Tell us about your school. It takes about a minute."],
  ["We email you", "A short confirmation, then early-access details when your group opens."],
  ["We set you up", "We help set up your school's workspace and bring your staff on."],
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <NavScroll />
      <div className="progress" aria-hidden />
      <StickyCta />
      <nav className="nav" aria-label="Main">
        <a href="#top" className="brand"><Image src="/logo.png" alt="" width={30} height={30} />Gyanvistara</a>
        <div className="links">
          <a href="#features">Features</a><a href="#workflow">Workflow</a><a href="#samples">Samples</a><a href="#why">Why us</a><a href="#faq">FAQ</a><a href="/about">About</a>
        </div>
        <a href="#join" className="btn sm">Join waitlist</a>
      </nav>

      <main id="main">
        <header className="hero grain" id="top">
          <div className="aurora" aria-hidden><i /><i /><i /></div>
          <div className="grid-bg" aria-hidden />
          <div className="wrap hero-in">
            <div className="hero-copy">
              <span className="chip glass-chip"><span className="pulse" aria-hidden /><span className="deva">ज्ञान</span> · AI teaching assistant for Indian schools</span>
              <h1>
                <span className="w" style={{ ["--i" as string]: 0 }}>Teach</span>{" "}
                <span className="w" style={{ ["--i" as string]: 1 }}>more.</span><br />
                <span className="nb"><span className="w gtext" style={{ ["--i" as string]: 2 }}>Prepare</span>{" "}
                <span className="w gtext" style={{ ["--i" as string]: 3 }}>less.</span></span>
              </h1>
              <p className="lead">Gyanvistara drafts your lesson plans, worksheets and question papers, and keeps your calendar and tasks in order, so your evenings are yours again.</p>
              <div className="cta">
                <a href="#join" className="btn">Join the waitlist</a>
                <a href="#workflow" className="btn ghost"><svg aria-hidden viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>See how it works</a>
              </div>
              <div className="trust">
                <span>Free to join · No credit card · Early access for schools</span>
              </div>
            </div>
            <Demo />
          </div>
          <div className="cue" aria-hidden><svg viewBox="0 0 24 36" width="22" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="30" rx="8" /><path className="wheel" d="M12 8v5" strokeLinecap="round" /></svg></div>
        </header>

        <section className="wrap stats-wrap" aria-label="Key figures">
          <div className="glass stats">
            <div><strong className="gtext"><CountUp to={6} /></strong><span>content tools</span></div>
            <div><strong className="gtext"><CountUp to={15} prefix="< " suffix="s" /></strong><span>to a first draft</span><em className="tag mono">Illustrative</em></div>
            <div><strong className="gtext"><CountUp to={3} /></strong><span>levels per worksheet</span></div>
            <div><strong className="gtext"><CountUp to={1} /></strong><span>workspace for staff and admins</span></div>
          </div>
        </section>

        <div className="marquee" aria-label="Supported boards and languages">
          <div className="mq-track mono" aria-hidden>
            {[0, 1].map((n) => (
              <span key={n}>{["CBSE", "ICSE", "State boards", "English", "हिन्दी", "Classes 1–12", "Lesson plans", "Worksheets", "Question papers"].map((x) => <b key={x}>{x}</b>)}</span>
            ))}
          </div>
          <p className="sr">Built for CBSE, ICSE and state boards, in English and Hindi, for classes 1 to 12.</p>
        </div>

        <section className="sec wrap" aria-labelledby="h-prob">
          <Reveal>
            <p className="eyebrow">The problem</p>
            <h2 id="h-prob">The school day ends at 3:30. <span className="gtext">The work doesn&apos;t.</span></h2>
            <p className="lead prob-lead">Teachers spend their evenings on lesson plans, worksheets, papers and paperwork. It is unpaid, repetitive and it steals time from the classroom and from home.</p>
          </Reveal>
          <div className="ba">
            <Reveal>
              <div className="glass ba-card">
                <h3>A typical evening</h3>
                <ul className="ev">
                  {evenings.map(([t, n, d]) => <li key={t}><span className="mono">{t}</span><span>{n}</span><em>{d}</em></li>)}
                </ul>
                <p className="ba-total">About 3 hours 45 min of prep</p>
                <span className="tag-il dk mono">Illustrative</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass ba-card good">
                <h3>With Gyanvistara</h3>
                <ul className="ev">
                  <li><span className="mono">6:30 pm</span><span>Pick class and topic, review the drafts</span><em>15 min</em></li>
                  <li><span className="mono">6:45 pm</span><span>Edit, personalise, print or share</span><em>20 min</em></li>
                  <li><span className="mono">7:05 pm</span><span>Done. The evening is yours.</span><em>&nbsp;</em></li>
                </ul>
                <p className="ba-total">About 35 min, and a calmer night</p>
                <span className="tag-il dk mono">Illustrative</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="sec wrap" aria-labelledby="h-tools">
          <Reveal>
            <p className="eyebrow">Tools</p>
            <h2 id="h-tools">Everything a teacher prepares, <span className="gtext">done in minutes</span>.</h2>
          </Reveal>
          <div className="bento">
            {tools.map((t, k) => (
              <Reveal key={t.t} delay={k * 60} className={t.cls}>
                <article className="glass tool">
                  <span className={`ico ${t.tint}`}><I d={t.ic} /></span>
                  <h3>{t.t}</h3>
                  <p>{t.d}</p>
                  {t.vis}
                  <small className="mono">Fully editable</small>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="workflow" className="sec flow" aria-labelledby="h-flow">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Workflow</p>
              <h2 id="h-flow">From blank page to <span className="gtext">ready to teach</span> in five steps.</h2>
            </Reveal>
            <Timeline />
          </div>
        </section>

        <section id="samples" className="sec wrap" aria-labelledby="h-samp">
          <Reveal>
            <p className="eyebrow">See it in action</p>
            <h2 id="h-samp">Real drafts, <span className="gtext">ready to use</span>.</h2>
            <p className="lead prob-lead">Every output is structured the way a teacher would write it. Here is what you get.</p>
          </Reveal>
          <Reveal delay={100}><Samples /></Reveal>
        </section>

        <section id="audience" className="sec wrap" aria-labelledby="h-aud">
          <Reveal><p className="eyebrow">Who it&apos;s for</p><h2 id="h-aud">One product for the staff room <span className="gtext">and the principal&apos;s office</span>.</h2></Reveal>
          <div className="aud">
            {audiences.map((a, k) => (
              <Reveal key={a.who} delay={k * 100}>
                <article className="glass aud-card">
                  <span className="chip">{a.who}</span>
                  <h3>{a.h}</h3>
                  <ul>{a.pts.map((x) => <li key={x}><svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>{x}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="compare" className="sec wrap" aria-labelledby="h-cmp">
          <Reveal><p className="eyebrow">Why not a chatbot?</p><h2 id="h-cmp">Built for teaching, <span className="gtext">not just chatting</span>.</h2></Reveal>
          <Reveal delay={100}>
            <div className="glass cmp-wrap">
              <table className="cmp-t">
                <caption className="sr">Gyanvistara compared with a generic AI chatbot</caption>
                <thead><tr><th scope="col">What teachers need</th><th scope="col" className="us">Gyanvistara</th><th scope="col">Generic AI chatbot</th></tr></thead>
                <tbody>{rows.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td className="us"><svg aria-hidden viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>{b}</td><td>{c}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </section>

        <section id="why" className="sec paper" aria-labelledby="h-why">
          <svg className="wave" aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 0h1440v20C1200 80 900 80 720 50S240 -10 0 40z" fill="#0D1230" /></svg>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Why us</p>
              <h2 id="h-why">Why you need <span className="gtext dk">us</span></h2>
              <p className="note mono">Illustrative figures, not measured results</p>
            </Reveal>
            <div className="why">
              {why.map(([t, d, v], k) => (
                <Reveal key={t} delay={k * 60}>
                  <article className="wcard">
                    <span className="num mono">0{k + 1}</span>
                    <h3>{t}</h3>
                    <p>{d}</p>
                    {v === "bars" && <div className="cmp" aria-hidden><span><i style={{ width: "6%" }} />2 min</span><span><i className="long" style={{ width: "100%" }} />1 hr</span></div>}
                    {v === "dots" && <div className="lvl" aria-hidden><i /><i /><i /></div>}
                    {(v === "bars" || v === "dots") && <span className="tag-il mono">Illustrative</span>}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="sec wrap" aria-labelledby="h-trust">
          <Reveal><p className="eyebrow">Trust</p><h2 id="h-trust">You stay in <span className="gtext">control</span>.</h2></Reveal>
          <div className="trust-g">
            {trust.map(([t, d], k) => (
              <Reveal key={t} delay={k * 70}><article className="glass tcard"><span className="num mono">0{k + 1}</span><h3>{t}</h3><p>{d}</p></article></Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="sec narrow wrap" aria-labelledby="h-faq">
          <Reveal><p className="eyebrow">FAQ</p><h2 id="h-faq">Questions, answered.</h2></Reveal>
          <Faq />
        </section>

        <section id="join" className="sec joinsec" aria-labelledby="h-join">
          <div className="aurora soft" aria-hidden><i /><i /><i /></div>
          <div className="wrap join-grid">
            <Reveal>
              <div className="join-head">
                <p className="eyebrow">Waitlist</p>
                <h2 id="h-join">Give your school its <span className="gtext">evenings back</span>.</h2>
                <p className="lead">Join the waitlist and be first to bring Gyanvistara to your staff. Free to join, no credit card.</p>
                <ol className="next">
                  {next.map(([t, d], k) => <li key={t}><span className="mono">{k + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}
                </ol>
                <p className="ask">Questions first? <a href="mailto:harshit.gyanvistara@gmail.com">Email us</a>.</p>
              </div>
            </Reveal>
            <Reveal delay={100}><WaitlistForm /></Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

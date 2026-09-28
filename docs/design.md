# Gyanvistara Design System v2 ("Aurora Classroom")

Concept: a dark-first, luminous "night sky of knowledge" (Gyan = knowledge, Vistara = expanse). Deep indigo canvas, aurora gradient light, glass cards, one saffron warm accent nodding to India. Light sections (Why us, FAQ) invert to warm paper for rhythm. Plain CSS + tiny client components. No emoji icons: use inline SVG (lucide-style, 1.75 stroke).

## 1. Tokens (paste into globals.css :root)

```css
:root{
  /* surface */
  --bg:#070A1A;          /* night */
  --bg-2:#0D1230;        /* raised */
  --paper:#FBF8F3;       /* warm light sections */
  --paper-2:#F1ECE3;
  /* text */
  --tx:#EEF1FF;          /* on dark, 16:1 */
  --tx-2:#A9B2D6;        /* on dark, 8:1 */
  --ink:#12143A;         /* on paper, 15:1 */
  --ink-2:#4A4F78;       /* on paper, 7:1 */
  /* brand */
  --violet:#7C5CFF; --indigo:#4F6BFF; --cyan:#22D3EE; --mint:#34F0B1;
  --saffron:#FF9F1C; --rose:#FF5C8A;
  --grad-brand:linear-gradient(120deg,#7C5CFF 0%,#4F6BFF 40%,#22D3EE 100%);
  --grad-warm:linear-gradient(120deg,#FF9F1C,#FF5C8A);
  --grad-text:linear-gradient(100deg,#B9A8FF 0%,#7DD3FC 45%,#5EF2C4 100%);
  --grad-border:linear-gradient(140deg,rgba(124,92,255,.7),rgba(34,211,238,.15) 40%,rgba(255,255,255,.06) 60%,rgba(255,159,28,.5));
  /* glass */
  --glass:rgba(255,255,255,.05); --glass-hi:rgba(255,255,255,.09);
  --stroke:rgba(255,255,255,.12);
  --blur:blur(18px) saturate(140%);
  /* shadow / glow */
  --glow-v:0 0 0 1px rgba(124,92,255,.35),0 20px 60px -20px rgba(124,92,255,.6);
  --shadow-l:0 24px 60px -28px rgba(18,20,58,.35);
  /* radius */
  --r-s:12px; --r-m:20px; --r-l:28px; --r-pill:999px;
  /* spacing (8pt) */
  --s1:4px;--s2:8px;--s3:12px;--s4:16px;--s5:24px;--s6:32px;--s7:48px;--s8:72px;--s9:120px;
  --wrap:1180px; --gut:clamp(16px,4vw,32px);
  /* motion */
  --ease:cubic-bezier(.22,1,.36,1); --t-fast:.18s; --t:.5s; --t-slow:.9s;
  /* type scale (fluid) */
  --fs-hero:clamp(2.75rem,7.2vw,6rem);
  --fs-h2:clamp(2rem,4.6vw,3.5rem);
  --fs-h3:clamp(1.15rem,1.6vw,1.375rem);
  --fs-lead:clamp(1.05rem,1.6vw,1.25rem);
  --fs-body:1rem; --fs-sm:.875rem; --fs-xs:.75rem;
}
```

## 2. Fonts (next/font/google, in layout.tsx)
- Display: **Bricolage Grotesque** (variable, weights 500-800), `--font-display`. Headings, letter-spacing -.035em, line-height 1.02-1.1.
- Body/UI: **Plus Jakarta Sans** (400-700), `--font-body`.
- Mono accents (chips, step numbers): **JetBrains Mono** 500, `--font-mono`.
- Optional Devanagari flourish in hero chip ("ज्ञान"): **Noto Sans Devanagari** 600, subset devanagari.
Apply `variable` classes on `<html>`; `body{font-family:var(--font-body);background:var(--bg);color:var(--tx)}`; `h1,h2,h3{font-family:var(--font-display)}`.

## 3. Global backgrounds & utilities

```css
/* aurora: fixed blobs behind hero (place one <div class="aurora"><i/><i/><i/></div>) */
.aurora{position:absolute;inset:0;overflow:hidden;z-index:-1;pointer-events:none}
.aurora i{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55;mix-blend-mode:screen;animation:drift 22s var(--ease) infinite alternate}
.aurora i:nth-child(1){width:60vw;height:60vw;left:-15%;top:-25%;background:#7C5CFF}
.aurora i:nth-child(2){width:50vw;height:50vw;right:-10%;top:-10%;background:#22D3EE;animation-delay:-7s;opacity:.35}
.aurora i:nth-child(3){width:40vw;height:40vw;left:35%;top:25%;background:#FF5C8A;animation-delay:-13s;opacity:.25}
@keyframes drift{to{transform:translate3d(8vw,6vh,0) scale(1.15)}}
/* film grain + grid overlay */
.grid-bg{background-image:linear-gradient(var(--stroke) 1px,transparent 1px),linear-gradient(90deg,var(--stroke) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse at 50% 0,#000 20%,transparent 70%);opacity:.35}
.grain::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.gtext{background:var(--grad-text);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% 100%;animation:shine 8s linear infinite}
@keyframes shine{to{background-position:200% 0}}
.wrap{max-width:var(--wrap);margin-inline:auto;padding-inline:var(--gut)}
.sec{padding-block:clamp(72px,10vw,140px);position:relative}
.eyebrow{font:500 var(--fs-xs)/1 var(--font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--cyan)}
/* glass card with gradient border */
.glass{position:relative;background:var(--glass);backdrop-filter:var(--blur);border-radius:var(--r-l);padding:var(--s6);isolation:isolate}
.glass::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;background:var(--grad-border);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
/* cursor spotlight (JS sets --mx/--my on pointermove) */
.glass::after{content:"";position:absolute;inset:0;border-radius:inherit;z-index:-1;opacity:0;transition:opacity var(--t);background:radial-gradient(400px circle at var(--mx,50%) var(--my,50%),rgba(124,92,255,.22),transparent 60%)}
.glass:hover::after{opacity:1}
.glass:hover{transform:translateY(-4px);box-shadow:var(--glow-v)}
.glass{transition:transform var(--t) var(--ease),box-shadow var(--t)}
```

## 4. Buttons, nav, focus
- `.btn` primary: `background:var(--grad-brand);color:#fff` (text #fff on #4F6BFF = 4.6:1; use font-weight 700), pill, padding 14px 28px, shadow `0 10px 40px -10px rgba(124,92,255,.8)`, `::before` shimmer sweep on hover (translateX -100% -> 100%, .8s). Hover: translateY(-2px) scale(1.02). Active: scale(.98).
- `.btn.ghost`: glass bg, 1px `--stroke`, hover border `--cyan`.
- `.btn.warm` (final CTA only): `--grad-warm`, text `#1a0d00`.
- Nav: sticky, `top:12px`, floating pill (max-width 960, centered), glass + blur, brand logo left, links center (Features, Workflow, Why us, FAQ), CTA right. Scroll > 40px: add `.scrolled` (stronger bg `rgba(7,10,26,.75)`). Mobile <720: links collapse, keep logo + CTA only.
- Focus (all interactive): `:focus-visible{outline:2px solid var(--cyan);outline-offset:3px;border-radius:8px}`. On paper sections use `--violet`.
- Skip link "Skip to content" first in body.

## 5. Sections

### 5.1 Hero (dark, `.aurora` + `.grid-bg` + `.grain`)
- Layout: 2 columns >=1000px (copy 6 / mockup 6), stacked below. min-height 100svh, padding-top 140px.
- Chip: glass pill "ज्ञान · AI teaching assistant for Indian schools" with pulsing mint dot.
- H1 (`--fs-hero`, display 700): "Teach more." newline `<span class="gtext">Prepare less.</span>`. Word-by-word rise-in on load (stagger 70ms, translateY 40px + blur 8px -> 0).
- Sub: `--fs-lead`, `--tx-2`, max 52ch. CTAs: `.btn` "Join the waitlist" + `.btn.ghost` "See how it works" (play icon).
- Trust row: small mono text "CBSE · ICSE · State boards · English + Hindi" with 3 glass chips.
- Product mockup (replace Demo.tsx visuals; keep typing logic): a browser-window `.glass` card (radius 28, 3 traffic dots, title "Lesson plan · Class 7B · Photosynthesis"), left mini-sidebar of icons, main pane where AI output streams: heading, objective bullets typing in, a progress shimmer bar "Drafting curriculum-aligned plan…" that resolves to a green "Draft ready in 12s" pill. Loop every ~9s. Perspective tilt: `transform:perspective(1400px) rotateY(-8deg) rotateX(4deg)`, straightens on hover; slow float `translateY(±10px) 6s ease-in-out infinite`. Two floating satellite glass chips overlapping edges ("Worksheet · 3 levels" saffron dot, "Paper · 80 marks ✓" mint), each floating with different delays. Glow ring behind: `radial-gradient(closest-side,rgba(124,92,255,.5),transparent)` blur 40.
- Scroll cue: tiny mouse icon bottom center, fades on scroll.

### 5.2 Stats strip
Glass band directly under hero, 4 counters in a row (2x2 on mobile): "6 content tools", "< 15s to a first draft", "3 levels per worksheet", "1 workspace for staff and admins". Numbers in display 700, `--grad-text`, count-up on view (IntersectionObserver, 1.2s easeOut). Add "Illustrative" mono tag for non-factual values (< 15s, 2 min).

### 5.3 Tools bento grid (id=features)
Header: eyebrow "TOOLS", H2 "Everything a teacher prepares, <gtext>done in minutes</gtext>."
Grid: `display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:minmax(200px,auto);gap:16px`.
- Lesson plans: span 3 cols x 2 rows (large, with mini outline illustration: 3 skeleton lines animating in).
- Question papers: span 3 x 1 (mini paper with marks chips 2/3/5).
- Worksheets: span 2 x 1 (three stacked level pills Support/Core/Stretch).
- Activities: span 2 x 1. Summaries: span 2 x 1.
- Writing assistant: span 3 x 1 (circular letter snippet with cursor blink).
- Calendar & tasks: span 3 x 1 (mini agenda with checkboxes that tick on hover).
- Admin staff roster: span 6 x 1 wide banner, avatar stack + "Cover suggested" chip.
Each card: `.glass`, icon tile 44px with gradient bg tinted per tool (violet, cyan, mint, saffron, rose), h3, 1-line copy, "editable" note. Tablet <=900: 2 cols, all span 1 except lesson plans span 2. Mobile: 1 col.
Reveal: fade-up staggered 60ms.

### 5.4 Workflow timeline (id=workflow) — 5 steps from brief
Section on `--bg-2` with subtle aurora. Steps: 1 Pick your class, 2 Tell us the goal, 3 AI drafts it, 4 Refine and personalise, 5 Teach and track.
- Desktop: vertical center line (2px, `--stroke`) with a `.progress` overlay filled by `--grad-brand`, height driven by scroll progress of the section (`--p` CSS var set by a client component using rAF + getBoundingClientRect; `height:calc(var(--p)*100%)`). Steps alternate left/right (grid 1fr 80px 1fr); each has a numbered node (48px circle, mono "01") that lights up (glow ring + gradient fill) when progress passes it (`.active`).
- Each step: glass card with title, copy, and a mini visual chip row (e.g. step 1: CBSE / Class 7 / Science / Ch.6 chips; step 3: shimmering skeleton lines; step 5: Print / Calendar / tick).
- Mobile: line on left, all cards right of it.
- Reduced motion: show all nodes active, no scroll linking.

### 5.5 Why you need us (paper section, light contrast)
Background `--paper`, text `--ink`; top edge with 80px curved wave divider (SVG) from dark. H2 "Why you need <gtext with darker gradient #5B3FE0->#0E9FBF>us</gtext>". Small "Illustrative figures, not measured results" mono note.
6 cards, 3x2 grid (2x3 tablet, 1 col mobile): white bg, 1px `#E6DFD2` border, radius 24, big mono number "01" in outline text, h3, copy, and where applicable an "Illustrative" tag (points 1 and 4) in saffron-tinted chip (bg #FFF1DC, text #7A4300). Hover: lift 6px, border becomes gradient, shadow `--shadow-l`, number fills with gradient. Points 1 and 4 get a tiny visual (2 min vs 1 hr bar comparison; 3 level dots).

### 5.6 Waitlist form (id=join, dark, strong glow)
Centered, max 640px `.glass` card with animated conic-gradient border (`@property --a` rotate 6s). Left/top copy: "Give your school its evenings back." Fields per brief (Name, Email, School, Role select, Class strength select, Note textarea with 0/500 counter, honeypot hidden off-screen `aria-hidden`, tabindex -1).
- Inputs: bg `rgba(255,255,255,.06)`, 1px `--stroke`, radius 14, padding 14px 16px, 16px font (prevents iOS zoom); floating labels or persistent labels above (prefer persistent for a11y). Focus: border `--cyan`, ring `0 0 0 4px rgba(34,211,238,.2)`.
- Error: border `--rose`, message below in `#FF8FAE` (7:1 on bg) with icon, `role="alert"`, input `aria-invalid` + `aria-describedby`.
- Submit: full-width `.btn.warm`, spinner + "Saving your spot…" while disabled.
- Success: form cross-fades to check-draw SVG animation + "You're on the list!..." with confetti of 16 CSS particles (skipped under reduced motion); `aria-live="polite"`. Error banner: rose glass strip with retry.

### 5.7 FAQ
Dark, max 780px. Accordion via `<details>` with `grid-template-rows:0fr->1fr` height animation. Summary: display font 600 1.125rem, plus icon rotates 45deg on open, row hover lifts bg to `--glass`. Divider `--stroke`. Suggested Qs: Which boards? Is my data safe? Can I edit output? Does it work in Hindi? Pricing? When does it open?

### 5.8 Footer
Big gradient-clipped wordmark "Gyanvistara" (display, `clamp(3rem,14vw,11rem)`, opacity .9, fading to transparent at bottom via mask) behind columns: Product (Features, Workflow, Why us), Company (Contact via mailto), Legal (Privacy, Terms placeholders). Bottom row: "© year Gyanvistara. Made for teachers in India." Top border 1px gradient line.

Also include a closing CTA band above the footer? Keep it: the waitlist form is the CTA; do not duplicate.

## 6. Motion system
- `Reveal` (existing): keep; new easing `--ease`, distance 28px, blur 6px -> 0, duration .8s, stagger via `--d` var. Add `.reveal.in` only once.
- Parallax: aurora blobs translate at 0.15x scroll (rAF, transform only) in one small `Parallax` client component; disabled under reduced motion.
- Hover: cards lift + spotlight; buttons shimmer; nav links get gradient underline scaling from center; icon tiles rotate 6deg.
- Marquee (optional under hero): "Trusted format for CBSE · ICSE · ..." infinite scroll 40s, pause on hover.
- Only animate `transform`, `opacity`, `filter`. Keep blurred blobs <=3 and `will-change:transform` on them.

## 7. Client components (small)
- `Reveal` (exists), `Demo` (restyle hero mockup), `Faq` (exists), `CountUp` (IO + rAF), `Timeline` (scroll progress + active nodes), `Spotlight` (one delegated pointermove listener on `.glass` setting --mx/--my), `NavScroll` (adds .scrolled), `WaitlistForm` (validation per brief). Everything else stays server components.

## 8. Responsive
- Breakpoints: 1000 (hero 1 col, bento 2-col), 720 (nav collapses, stats 2x2, timeline single-sided), 480 (1 col everything, H1 2.5rem, paddings 16px).
- Hero mockup on mobile: remove tilt, scale to 100% width, hide satellite chips beyond first.
- Disable backdrop-filter heavy blur on <720 (use blur(10px)) and reduce aurora blur to 60px for perf.
- Tap targets >=44px. No horizontal scroll: `overflow-x:clip` on body.

## 9. Accessibility
- Contrast: body text on dark >=8:1; gradient text only for large text (>=24px) and always over `--bg`; `--cyan` eyebrow (small) on #070A1A = 12:1. Paper section text uses `--ink`/`--ink-2` only. Never rely on gradient/color alone for errors (icon + text).
- `prefers-reduced-motion: reduce`: kill aurora drift, float, shine, parallax, count-up (show final), timeline linking (all active), confetti; reveal shows instantly; keep opacity-only fades <=.2s.
- Focus visible everywhere, logical tab order, skip link, form labels tied via htmlFor, honeypot hidden from AT, errors `role="alert"`, FAQ via native details, timeline and mockup decorative content `aria-hidden` with equivalent text provided in the step copy.
- Semantic landmarks: nav, header/main, section with aria-labelledby, footer. `color-scheme: dark`. Decorative SVG `aria-hidden`.
- Add `@media (forced-colors:active)` fallback: borders `CanvasText`, gradient text becomes `CanvasText`.

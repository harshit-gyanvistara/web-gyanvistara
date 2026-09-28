import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

const ROLES = ["Teacher", "Principal", "Admin/Coordinator", "Other"];
const SIZES = ["<20", "20-30", "31-40", "40+"];
const FILE = path.join(process.cwd(), "data", "waitlist.json");
let queue: Promise<unknown> = Promise.resolve();

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
    if (!b || typeof b !== "object") throw new Error();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  // honeypot: pretend success
  if (str(b.website)) return NextResponse.json({ ok: true });

  const name = str(b.name), email = str(b.email), school = str(b.school);
  const role = str(b.role), classSize = str(b.classSize), note = str(b.note);
  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) errors.name = "Please enter your full name.";
  if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "That email doesn't look right.";
  if (school.length < 2 || school.length > 120) errors.school = "Tell us which school you're from.";
  if (!ROLES.includes(role)) errors.role = "Choose your role.";
  if (!SIZES.includes(classSize)) errors.classSize = "Choose your class strength.";
  if (note.length > 500) errors.note = "Please keep your note under 500 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const entry = { name, email, school, role, classSize, note, createdAt: new Date().toISOString() };
  try {
    const job = queue.then(async () => {
      await fs.mkdir(path.dirname(FILE), { recursive: true });
      let list: unknown[] = [];
      try { list = JSON.parse(await fs.readFile(FILE, "utf8")); if (!Array.isArray(list)) list = []; } catch {}
      list.push(entry);
      await fs.writeFile(FILE, JSON.stringify(list, null, 2));
    });
    queue = job.catch(() => {});
    await job;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not save." }, { status: 500 });
  }
}

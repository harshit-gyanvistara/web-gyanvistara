"use client";
import { useEffect, useState } from "react";

export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const join = document.getElementById("join");
    let past = false, inJoin = false;
    const upd = () => setShow(past && !inJoin);
    const onScroll = () => { past = window.scrollY > 700; upd(); };
    const io = join ? new IntersectionObserver(([e]) => { inJoin = e.isIntersecting; upd(); }) : null;
    if (join) io?.observe(join);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  return (
    <div className={`sticky-cta${show ? " on" : ""}`} aria-hidden={!show}>
      <a href="#join" className="btn" tabIndex={show ? 0 : -1}>Join the waitlist</a>
    </div>
  );
}

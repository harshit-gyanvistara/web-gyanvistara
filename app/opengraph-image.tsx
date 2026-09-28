import { ImageResponse } from "next/og";

export const alt = "Gyanvistara — Teach more. Prepare less.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#070A1A 0%,#1a1250 60%,#0b3a52 100%)", color: "#EEF1FF" }}>
        <div style={{ fontSize: 34, color: "#7DD3FC", letterSpacing: 4, textTransform: "uppercase" }}>Gyanvistara</div>
        <div style={{ fontSize: 118, fontWeight: 800, lineHeight: 1.02, marginTop: 24, display: "flex", flexDirection: "column" }}>
          <span>Teach more.</span>
          <span style={{ color: "#5EF2C4" }}>Prepare less.</span>
        </div>
        <div style={{ fontSize: 34, color: "#A9B2D6", marginTop: 36 }}>The AI teaching assistant for Indian schools</div>
      </div>
    ),
    size,
  );
}

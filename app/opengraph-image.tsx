import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Budget Pro Painting & Remodeling LLC — Altoona, IA";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #081748 0%, #1A37A8 55%, #2449C7 100%)",
          position: "relative",
          padding: 72,
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Red paint swipe — iconic from the logo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: "100%",
            background: "linear-gradient(180deg, #E30613 0%, #B80510 100%)",
            transform: "skewX(-8deg) translateX(70px)",
            display: "flex",
          }}
        />
        {/* Soft radial glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,75,87,0.25) 0%, rgba(255,75,87,0) 70%)",
            display: "flex",
          }}
        />

        {/* BP monogram plate */}
        <div
          style={{
            width: 220,
            height: 260,
            marginRight: 56,
            background: "rgba(255,255,255,0.08)",
            border: "3px solid #fff",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 128, fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.05em" }}>
            BP
          </span>
          <span style={{ width: 130, height: 8, background: "#E30613", marginTop: 14, borderRadius: 2, display: "flex" }} />
        </div>

        {/* Wordmark stack */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              letterSpacing: 5,
              fontWeight: 700,
              color: "#FF4B57",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <div style={{ width: 36, height: 2, background: "#E30613", display: "flex" }} />
            Altoona · Iowa · Owner-Operated
          </div>

          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: -3,
              color: "#fff",
              display: "flex",
            }}
          >
            BUDGET PRO
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -1,
              color: "rgba(255,255,255,0.92)",
              display: "flex",
              marginTop: 6,
            }}
          >
            Painting · Staining · Epoxy
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 24,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            (515) 505-6429 &nbsp;·&nbsp; budgetpropainting.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

import Link from "next/link";
import { Home, ArrowRight, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 24px 96px",
        background: "#F2EDE3",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div
          style={{
            fontSize: "clamp(120px, 18vw, 220px)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            background: "linear-gradient(135deg, #1A37A8 0%, #E30613 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 20,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          This page went missing.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#3A4158",
            marginBottom: 36,
            lineHeight: 1.6,
          }}
        >
          Looks like this page took a vacation. Let&apos;s get you back on track — head home
          or give us a call.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} /> Back Home
          </Link>
          <a href="tel:+15155056429" className="btn btn-outline-dark btn-lg">
            <Phone size={18} /> (515) 505-6429
          </a>
        </div>
      </div>
    </main>
  );
}

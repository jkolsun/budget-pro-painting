"use client";

import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";

export default function StickyCTABar() {
  return (
    <>
      <div
        className="sticky-cta"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          display: "none",
          padding: 10,
          background: "#FAF7F1",
          borderTop: "1px solid #D6D0C0",
          boxShadow: "0 -8px 24px rgba(15, 23, 42, 0.08)",
          gap: 8,
        }}
      >
        <a
          href="tel:+15155056429"
          style={{
            flex: 1,
            padding: "14px",
            background: "#1A37A8",
            color: "#FFFFFF",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Phone size={16} />
          Call Peter
        </a>
        <Link
          href="/quote"
          style={{
            flex: 1,
            padding: "14px",
            background: "#E30613",
            color: "#0A0F1E",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Sparkles size={16} />
          Free Quote
        </Link>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .sticky-cta { display: flex !important; }
        }
      `}</style>
    </>
  );
}

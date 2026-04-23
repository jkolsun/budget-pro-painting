"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif",
          background: "#F2EDE3",
          color: "#0A0F1E",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#1A37A8",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Oops!
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 14,
            }}
          >
            Something went wrong.
          </h1>
          <p style={{ fontSize: 16, color: "#3A4158", marginBottom: 32 }}>
            We ran into an unexpected issue. Please try again, or give us a call
            directly at (515) 505-6429.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={reset}
              style={{
                padding: "14px 28px",
                background: "#1A37A8",
                color: "#FFFFFF",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                padding: "14px 28px",
                background: "#FAF7F1",
                color: "#0A0F1E",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                border: "2px solid #0A0F1E",
                textDecoration: "none",
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

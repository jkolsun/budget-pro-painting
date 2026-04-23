import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(135deg, #2449C7 0%, #1A37A8 55%, #081748 100%)",
          borderRadius: 28,
          border: "6px solid #E30613",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 86,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          BP
        </span>
        <span
          style={{
            width: 90,
            height: 11,
            background: "#E30613",
            marginTop: 10,
            borderRadius: 2,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

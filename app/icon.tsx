import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "BP" monogram on brand-blue background with red paint-swipe underscore
export default function Icon() {
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
          borderRadius: 10,
          border: "2px solid #E30613",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 30,
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
            width: 30,
            height: 4,
            background: "#E30613",
            marginTop: 4,
            borderRadius: 1,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

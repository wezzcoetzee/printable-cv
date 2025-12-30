import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";

export const alt = "Wesley Coetzee - Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#1a1a1a",
              marginBottom: "20px",
            }}
          >
            {RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#666",
              marginBottom: "40px",
            }}
          >
            {RESUME_DATA.about}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#999",
              display: "flex",
              alignItems: "center",
            }}
          >
            {RESUME_DATA.location}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

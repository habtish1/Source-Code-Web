import { ImageResponse } from "next/og";

export const alt = "Source Code IT Solutions PLC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1120 0%, #15336f 55%, #1554d1 100%)",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#3366ff,#f7931e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Source Code</div>
            <div style={{ fontSize: 14, opacity: 0.7, letterSpacing: 4 }}>IT SOLUTIONS PLC</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Software that runs real businesses in Ethiopia.
          </div>
          <div style={{ fontSize: 26, opacity: 0.8, maxWidth: 900 }}>
            Ride-hailing · Fintech · Logistics · Gaming · Web, mobile, bots, ERP and the backends behind them.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, opacity: 0.75 }}>
          <span>sourcecodeet.com</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>
    ),
    size
  );
}

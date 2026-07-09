import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { getLogoDataUri } from "@/lib/logo-data-uri";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#111111",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={220} height={99} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 44,
            fontWeight: 700,
            color: "white",
            display: "flex",
            maxWidth: 900,
          }}
        >
          Recovering Resources. Creating Value.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            color: "#9aa1ab",
            display: "flex",
            maxWidth: 820,
          }}
        >
          {siteConfig.fullName} · {siteConfig.parentCompany}
        </div>
      </div>
    ),
    { ...size }
  );
}

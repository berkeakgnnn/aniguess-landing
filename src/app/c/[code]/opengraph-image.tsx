import { ImageResponse } from "next/og";
import { decodeChallengeCode } from "../../../lib/challengeLink";
import { fetchChallengeCharacter } from "../../../lib/anilist";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AniMyst challenge — can you guess this anime?";

// OG image shown in WhatsApp/IG/Twitter link previews.
// Satori (the ImageResponse engine) does not reliably support CSS blur, so the
// character is obscured with heavy dark overlays + a large "?" — guaranteeing
// the answer is never revealed in the preview.
export default async function Image({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const payload = decodeChallengeCode(code);
  const character = payload ? await fetchChallengeCharacter(payload.characterId) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d0820 0%, #1a0a35 100%)",
          position: "relative",
        }}
      >
        {character && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={character.imageLarge}
            alt=""
            width={630}
            height={630}
            style={{
              position: "absolute",
              right: 60,
              top: 0,
              height: 630,
              width: 480,
              objectFit: "cover",
              opacity: 0.18,
            }}
          />
        )}
        {/* Dark scrim to further obscure the character */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 50%, rgba(124,58,237,0.25), transparent 60%), linear-gradient(90deg, #0d0820 45%, transparent)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "0 80px",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, color: "#a78bfa", fontWeight: 900, letterSpacing: 6 }}>
            ✦ ANIMYST
          </div>
          <div style={{ display: "flex", fontSize: 96, color: "#ffffff", fontWeight: 900, lineHeight: 1 }}>
            Can you
          </div>
          <div style={{ display: "flex", fontSize: 96, color: "#e879f9", fontWeight: 900, lineHeight: 1 }}>
            guess this?
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#94a3b8", fontWeight: 700 }}>
            A friend challenged you · animyst.vercel.app
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 260,
            top: 250,
            fontSize: 200,
            fontWeight: 900,
            color: "rgba(255,255,255,0.85)",
            zIndex: 5,
          }}
        >
          ?
        </div>
      </div>
    ),
    { ...size },
  );
}

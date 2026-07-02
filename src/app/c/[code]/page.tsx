import type { Metadata } from "next";
import Link from "next/link";
import { decodeChallengeCode } from "../../../lib/challengeLink";
import { fetchChallengeCharacter, buildChoices } from "../../../lib/anilist";
import { ChallengeGuess } from "./ChallengeGuess";

const PAGE_BG =
  "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(124,58,237,0.18) 0%, transparent 70%), linear-gradient(180deg, #0d0820 0%, #130e28 100%)";

interface PageProps {
  params: Promise<{ code: string }>;
}

// The OG image (opengraph-image.tsx) is generated per-code; keep metadata generic here.
export const metadata: Metadata = {
  title: "AniMyst — Bunu bilebilir misin?",
  description: "Blur'lu anime karakterini tahmin et. Bir arkadaşın sana meydan okudu.",
};

function InvalidChallenge() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ background: PAGE_BG }}
    >
      <p className="text-6xl font-black" style={{ color: "#7c3aed" }}>
        ?
      </p>
      <h1 className="text-2xl font-black" style={{ color: "#f1f5f9" }}>
        Bu challenge geçersiz
      </h1>
      <p className="max-w-sm text-sm" style={{ color: "#94a3b8" }}>
        Link bozuk ya da süresi dolmuş olabilir. Kendi günlük challenge&apos;ını oynamak için uygulamayı indir.
      </p>
      <Link
        href="/"
        className="rounded-2xl px-7 py-4 text-base font-black text-white"
        style={{ background: "linear-gradient(135deg, #7c3aed, #e879f9)" }}
      >
        AniMyst&apos;i indir
      </Link>
    </main>
  );
}

export default async function ChallengePage({ params }: PageProps) {
  const { code } = await params;
  const payload = decodeChallengeCode(code);
  if (!payload) return <InvalidChallenge />;

  const character = await fetchChallengeCharacter(payload.characterId);
  if (!character) return <InvalidChallenge />;

  const choices = buildChoices(character.animeTitle, payload.characterId + payload.dayIndex);

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12"
      style={{ background: PAGE_BG }}
    >
      <ChallengeGuess
        imageLarge={character.imageLarge}
        animeTitle={character.animeTitle}
        choices={choices}
        variant={payload.type}
        dayIndex={payload.dayIndex}
      />
    </main>
  );
}

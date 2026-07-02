"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Not published yet — point to a placeholder until the App Store id exists.
const APP_STORE_URL = "https://apps.apple.com/app/animyst";
const APP_DEEP_LINK = "animyst://";

interface Props {
  imageLarge: string;
  animeTitle: string; // correct answer
  choices: string[];
  variant: "challenge" | "result";
  dayIndex: number;
  elapsedHint?: number | null;
}

const MAX_WRONG = 3;
// Blur (px) by remaining wrong attempts: heavy → light → revealed
const BLUR_BY_WRONG = [24, 16, 9, 4];

export function ChallengeGuess({ imageLarge, animeTitle, choices, variant, dayIndex }: Props) {
  const [wrong, setWrong] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);
  const done = solved || wrong.length >= MAX_WRONG;

  const blur = useMemo(() => {
    if (done) return 0;
    return BLUR_BY_WRONG[Math.min(wrong.length, BLUR_BY_WRONG.length - 1)];
  }, [wrong.length, done]);

  function pick(choice: string) {
    if (done) return;
    if (choice.toLowerCase() === animeTitle.toLowerCase()) {
      setSolved(true);
    } else if (!wrong.includes(choice)) {
      setWrong((w) => [...w, choice]);
    }
  }

  return (
    <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#a78bfa" }}>
          AniMyst Daily #{dayIndex + 1}
        </p>
        <h1 className="text-center text-2xl font-black" style={{ color: "#f1f5f9" }}>
          {variant === "result" ? "Bunu geçebilir misin?" : "Bunu bilebilir misin?"}
        </h1>
      </div>

      {/* Character window */}
      <div
        className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl border-2"
        style={{
          borderColor: "#7c3aed",
          boxShadow: "0 0 40px rgba(124,58,237,0.4)",
          background: "#000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageLarge}
          alt="Gizli karakter"
          className="h-full w-full object-cover transition-all duration-700"
          style={{ filter: `blur(${blur}px)`, transform: "scale(1.1)" }}
        />
        {/* Holo tint */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent, rgba(124,58,237,0.28), rgba(232,121,249,0.2), transparent)",
          }}
        />
        {!done && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span
              className="font-black"
              style={{ fontSize: "5rem", color: "#ffffffcc", textShadow: "0 0 24px #7c3aed" }}
            >
              ?
            </span>
          </div>
        )}
      </div>

      {/* Result banner */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: solved ? "#22c55e" : "#ef4444" }}>
              {solved ? "Doğru!" : "Cevap"}
            </p>
            <p className="text-center text-xl font-black" style={{ color: "#f1f5f9" }}>
              {animeTitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choices */}
      {!done && (
        <div className="grid w-full grid-cols-1 gap-3">
          {choices.map((c) => {
            const isWrong = wrong.includes(c);
            return (
              <button
                key={c}
                onClick={() => pick(c)}
                disabled={isWrong}
                className="rounded-2xl border-2 px-5 py-4 text-left text-base font-bold transition-all"
                style={{
                  borderColor: isWrong ? "#ef444455" : "#7c3aed55",
                  background: isWrong ? "rgba(239,68,68,0.08)" : "rgba(124,58,237,0.08)",
                  color: isWrong ? "#64748b" : "#f1f5f9",
                  opacity: isWrong ? 0.5 : 1,
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      {/* Download CTA — always available, prominent after solving */}
      <a
        href={APP_STORE_URL}
        onClick={() => {
          // Try to open the app if installed; harmless if not.
          window.location.href = APP_DEEP_LINK;
        }}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-black text-white transition-transform hover:scale-[1.02]"
        style={{ background: "linear-gradient(135deg, #7c3aed, #e879f9)", boxShadow: "0 8px 24px rgba(124,58,237,0.4)" }}
      >
        {done ? "İndir ve tam oyna" : "Tüm oyunu indir"}
      </a>
      <p className="text-xs" style={{ color: "#475569" }}>
        iOS · Ücretsiz · 30 anime serisi
      </p>
    </div>
  );
}

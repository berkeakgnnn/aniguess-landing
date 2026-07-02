// src/lib/challengeLink.ts — MUST stay in sync with the app's lib/challengeLink.ts.
// Decodes the stateless viral challenge payload embedded in /c/<code> URLs.

export const CHALLENGE_BASE_URL = "https://animyst.vercel.app";

export type ChallengeType = "challenge" | "result";

export interface ChallengePayload {
  characterId: number;
  dayIndex: number;
  type: ChallengeType;
  v: 1;
}

const DELIM = "~";
const TYPE_TO_CODE: Record<ChallengeType, string> = { challenge: "c", result: "r" };
const CODE_TO_TYPE: Record<string, ChallengeType> = { c: "challenge", r: "result" };
const XOR_KEY = [0x41, 0x6e, 0x69, 0x4d, 0x79, 0x73, 0x74]; // "AniMyst"

function xor(input: string): string {
  let out = "";
  for (let i = 0; i < input.length; i++) {
    out += String.fromCharCode(input.charCodeAt(i) ^ XOR_KEY[i % XOR_KEY.length]);
  }
  return out;
}

function toHex(input: string): string {
  let out = "";
  for (let i = 0; i < input.length; i++) {
    out += input.charCodeAt(i).toString(16).padStart(2, "0");
  }
  return out;
}

function fromHex(hex: string): string | null {
  if (hex.length % 2 !== 0 || !/^[0-9a-f]*$/i.test(hex)) return null;
  let out = "";
  for (let i = 0; i < hex.length; i += 2) {
    out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
  }
  return out;
}

export function encodeChallengeCode(payload: ChallengePayload): string {
  const parts = [
    String(payload.v),
    String(Math.trunc(payload.characterId)),
    String(Math.trunc(payload.dayIndex)),
    TYPE_TO_CODE[payload.type],
  ];
  return toHex(xor(parts.join(DELIM)));
}

export function decodeChallengeCode(code: string): ChallengePayload | null {
  const raw = fromHex(code);
  if (raw === null) return null;
  const parts = xor(raw).split(DELIM);
  if (parts.length !== 4) return null;

  const v = Number(parts[0]);
  const characterId = Number(parts[1]);
  const dayIndex = Number(parts[2]);
  const type = CODE_TO_TYPE[parts[3]];

  if (v !== 1) return null;
  if (!Number.isInteger(characterId) || !Number.isInteger(dayIndex)) return null;
  if (dayIndex < 0 || characterId <= 0) return null;
  if (type === undefined) return null;

  return { v: 1, characterId, dayIndex, type };
}

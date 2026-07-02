// src/lib/anilist.ts — minimal AniList fetch for the challenge funnel.
// Given a character id (from the challenge link), returns the blurred-guess
// data: image + the anime title that is the correct answer.

export interface ChallengeCharacter {
  id: number;
  imageLarge: string;
  /** Correct anime title (english ?? romaji) — the answer. */
  animeTitle: string;
}

const ANILIST_URL = "https://graphql.anilist.co";

const QUERY = `
query ($id: Int) {
  Character(id: $id) {
    id
    image { large }
    media(sort: POPULARITY_DESC, perPage: 1) {
      nodes { title { english romaji } }
    }
  }
}`;

export async function fetchChallengeCharacter(id: number): Promise<ChallengeCharacter | null> {
  try {
    const res = await fetch(ANILIST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { id } }),
      // Cache aggressively — a given character id never changes.
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const c = json?.data?.Character;
    if (!c) return null;
    const media = c.media?.nodes?.[0]?.title;
    const title: string | undefined = media?.english ?? media?.romaji;
    const image: string | undefined = c.image?.large;
    if (!title || !image) return null;
    return { id: c.id, imageLarge: image, animeTitle: title };
  } catch {
    return null;
  }
}

/** Popular anime pool for generating plausible wrong choices on the landing. */
export const DISTRACTOR_TITLES: string[] = [
  "Naruto",
  "One Piece",
  "Bleach",
  "Attack on Titan",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "My Hero Academia",
  "Death Note",
  "Fullmetal Alchemist",
  "Hunter x Hunter",
  "Tokyo Ghoul",
  "Chainsaw Man",
  "Spy x Family",
  "One Punch Man",
  "Dragon Ball",
  "Sword Art Online",
  "Fairy Tail",
  "Black Clover",
  "Mob Psycho 100",
  "Steins;Gate",
];

/** Deterministic shuffle (seeded) so server/client render identical choices. */
export function buildChoices(correct: string, seed: number): string[] {
  const pool = DISTRACTOR_TITLES.filter((t) => t.toLowerCase() !== correct.toLowerCase());
  // Seeded Fisher-Yates
  let s = seed >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const distractors = pool.slice(0, 3);
  const choices = [correct, ...distractors];
  // Shuffle final 4 (seeded again)
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}

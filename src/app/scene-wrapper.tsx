"use client";

import dynamic from "next/dynamic";

const CrystalScene = dynamic(
  () => import("./scene-crystal").then((m) => m.CrystalScene),
  { ssr: false }
);

export function CrystalSceneWrapper() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
      <CrystalScene />
    </div>
  );
}

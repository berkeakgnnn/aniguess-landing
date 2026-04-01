"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Crystal() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Inner glow core */}
      <mesh scale={0.9}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
      </mesh>
      {/* Outer wireframe */}
      <mesh scale={2.2}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const groupRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  // Small sphere "stars" around the crystal
  const items = Array.from({ length: 40 }, (_, i) => {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 3 + Math.random() * 3;
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      s: 0.015 + Math.random() * 0.02,
    };
  });

  return (
    <group ref={groupRef}>
      {items.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 6, 6]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#fbbf24" : "#a78bfa"} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

export function CrystalScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#a78bfa" />
      <directionalLight position={[-3, -2, -5]} intensity={0.4} color="#fbbf24" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#7c3aed" distance={8} />
      <Crystal />
      <Particles />
    </Canvas>
  );
}

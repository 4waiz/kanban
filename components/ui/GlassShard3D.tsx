"use client";

// Crystalline glass shard — faceted violet/pink translucent.
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  Lightformer,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface GlassShard3DProps {
  className?: string;
  size?: number;
  variant?: "spiky" | "crystal";
  speed?: number;
}

function Shard({ variant = "spiky" }: { variant?: "spiky" | "crystal"; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Keep the mesh dead-centered; OrbitControls handles the rotation.
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.position.set(0, 0, 0);
  });

  // Low subdivisions = visible crystalline facets.
  // Smaller radius keeps shard fully inside the halo regardless of rotation.
  const geom =
    variant === "spiky" ? (
      <icosahedronGeometry args={[0.95, 1]} />
    ) : (
      <icosahedronGeometry args={[0.95, 1]} />
    );

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {geom}
      {/*
        Real glass — light passes THROUGH the geometry and is tinted on the way out.
        attenuationColor is the color light becomes after travelling through, so a
        warm pink there + a violet color tint above gives the dual-tone shard.
      */}
      <MeshTransmissionMaterial
        backside
        samples={10}
        resolution={512}
        transmission={1}
        roughness={0.08}
        thickness={1.6}
        ior={1.55}
        chromaticAberration={0.18}
        anisotropy={0.4}
        distortion={0.25}
        distortionScale={0.4}
        temporalDistortion={0.05}
        attenuationDistance={0.7}
        attenuationColor="#ff7fc0"
        color="#a78bfa"
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

// A small set of tech words that drift out from the shard at unhurried pace.
// Few enough to never feel crowded; 6 evenly-spaced angles around the circle.
const TECH_WORDS = ["AI", "ML", "Computer Vision", "ROS", "Edge AI", "LLM"];

function TechWords({ radius }: { radius: number }) {
  // ~10s per word cycle, staggered ~1.6s between each = at most ~2 words
  // visible at once. Slow and breathing, not busy.
  const cycle = 10;
  const stagger = cycle / TECH_WORDS.length;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-visible"
    >
      {TECH_WORDS.map((word, i) => {
        const angle = (360 / TECH_WORDS.length) * i;
        return (
          <span
            key={word}
            className="orb-word font-display text-sm font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)] md:text-base"
            style={
              {
                "--angle": `${angle}deg`,
                "--distance": `${radius}px`,
                "--delay": `${(i * stagger).toFixed(2)}s`,
                "--duration": `${cycle}s`,
              } as React.CSSProperties
            }
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default function GlassShard3D({
  className,
  size = 520,
  variant = "spiky",
  speed = 1,
}: GlassShard3DProps) {
  // Words travel from center to ~70% of the radius so they fade just past the halo edge.
  const emitRadius = size * 0.7;

  return (
    <div
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
    >
      {/* Halo: violet inner glow, pink outer rim — sits behind the canvas */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #2a154a 0%, #150828 45%, #050208 100%)",
          boxShadow:
            "inset 0 0 140px rgba(123,91,255,0.35), 0 0 200px rgba(255,143,200,0.25)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 32 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0, cursor: "grab" }}
      >
        <ambientLight intensity={0.6} color="#f5e8ff" />

        {/* Key light from above-right — warm pink */}
        <pointLight position={[3, 4, 3]} intensity={4} color="#ffb0d8" />

        {/* Fill from left — violet */}
        <pointLight position={[-3, 1, 2]} intensity={3} color="#b88aff" />

        {/* Rim from behind — separates shard from backdrop */}
        <pointLight position={[0, -1, -3]} intensity={3.5} color="#ffffff" />

        <Suspense fallback={null}>
          <Shard variant={variant} speed={speed} />

          {/* Environment provides the colors visible THROUGH the glass when refracting */}
          <Environment resolution={256}>
            <Lightformer
              form="rect"
              intensity={5}
              position={[3, 2, 3]}
              scale={[3, 2, 1]}
              color="#ff8fc8"
            />
            <Lightformer
              form="rect"
              intensity={5}
              position={[-3, 1, 2]}
              scale={[3, 2, 1]}
              color="#a78bfa"
            />
            <Lightformer
              form="circle"
              intensity={3}
              position={[0, 4, 1]}
              scale={[2, 2, 1]}
              color="#ffe0f0"
            />
          </Environment>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={speed * 1.3}
            rotateSpeed={0.7}
            minPolarAngle={Math.PI * 0.25}
            maxPolarAngle={Math.PI * 0.75}
          />
        </Suspense>
      </Canvas>

      {/* Tech words radiate outward from the orb center. Above the canvas, below interactions. */}
      <TechWords radius={emitRadius} />
    </div>
  );
}

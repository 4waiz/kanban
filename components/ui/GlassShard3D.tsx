"use client";

// TODO: tune material/lighting once we have the real Neue Machina build and final brand renders.
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface GlassShard3DProps {
  className?: string;
  size?: number;
  variant?: "spiky" | "crystal";
  speed?: number;
}

function Shard({ variant = "spiky", speed = 1 }: { variant?: "spiky" | "crystal"; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, dt) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += dt * 0.15 * speed;
    meshRef.current.rotation.x += dt * 0.05 * speed;
  });

  // Two visual variants — both use the same transmission material, different geometry.
  const geom =
    variant === "spiky" ? (
      <icosahedronGeometry args={[1.1, 1]} />
    ) : (
      <dodecahedronGeometry args={[1.2, 0]} />
    );

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} castShadow>
        {geom}
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={512}
          transmission={1}
          roughness={0.05}
          thickness={1.2}
          ior={1.45}
          chromaticAberration={0.08}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.4}
          temporalDistortion={0.1}
          attenuationDistance={0.5}
          attenuationColor="#f0c4e0"
          color="#c4b5fd"
        />
      </mesh>
    </Float>
  );
}

export default function GlassShard3D({
  className,
  size = 520,
  variant = "spiky",
  speed = 1,
}: GlassShard3DProps) {
  return (
    <div
      className={cn("pointer-events-none relative", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* dark sphere backdrop, gives the shard something to refract against */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1a0d2a 0%, #0a0612 55%, #050208 100%)",
          boxShadow:
            "inset 0 0 120px rgba(123,91,255,0.18), 0 0 140px rgba(196,87,160,0.22)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[3, 3, 3]} intensity={1.6} color="#ffd0e8" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#a78bfa" />
        <Suspense fallback={null}>
          <Shard variant={variant} speed={speed} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

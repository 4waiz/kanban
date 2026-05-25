"use client";

// TODO: tune material/lighting once we have the real Neue Machina build and final brand renders.
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";
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

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.04;
  });

  // High-subdivision = smooth blob; low subdivision = faceted crystal
  const geom =
    variant === "spiky" ? (
      <icosahedronGeometry args={[1.15, 4]} />
    ) : (
      <icosahedronGeometry args={[1.15, 3]} />
    );

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {geom}
      {/*
        Iridescent metal — the "T.RICKS" / melted chrome look.
        Iridescence shifts hue across the surface, metalness gives it reflectivity,
        the colorful Lightformers in <Environment> are what we see reflected.
      */}
      <meshPhysicalMaterial
        color="#1a1530"
        metalness={1}
        roughness={0.25}
        iridescence={1}
        iridescenceIOR={1.8}
        iridescenceThicknessRange={[200, 1200]}
        clearcoat={1}
        clearcoatRoughness={0.15}
        envMapIntensity={1.8}
      />
    </mesh>
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
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
    >
      {/* halo sits centered behind the canvas */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1a0d2a 0%, #0a0612 55%, #050208 100%)",
          boxShadow:
            "inset 0 0 120px rgba(123,91,255,0.28), 0 0 180px rgba(196,87,160,0.3)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0, cursor: "grab" }}
      >
        <ambientLight intensity={0.4} />

        <Suspense fallback={null}>
          <Shard variant={variant} speed={speed} />

          {/* Colorful environment — these panels are what the iridescent surface reflects */}
          <Environment resolution={256}>
            {/* warm pink key */}
            <Lightformer
              form="rect"
              intensity={6}
              position={[2.5, 2, 3]}
              scale={[3, 2, 1]}
              color="#ff8fc8"
            />
            {/* violet fill */}
            <Lightformer
              form="rect"
              intensity={5}
              position={[-3, 1, 2]}
              scale={[3, 2, 1]}
              color="#7b5bff"
            />
            {/* cool blue accent — gives the iridescent shift */}
            <Lightformer
              form="rect"
              intensity={4}
              position={[0, -2.5, 3]}
              scale={[3, 2, 1]}
              color="#5b9eff"
            />
            {/* soft top rim */}
            <Lightformer
              form="circle"
              intensity={3}
              position={[0, 3, 1]}
              scale={[2, 2, 1]}
              color="#ffd5f0"
            />
            {/* back-light to outline the silhouette */}
            <Lightformer
              form="rect"
              intensity={5}
              position={[0, 0, -3]}
              scale={[4, 4, 1]}
              color="#c4b5fd"
            />
          </Environment>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={speed * 1.5}
            rotateSpeed={0.7}
            minPolarAngle={Math.PI * 0.25}
            maxPolarAngle={Math.PI * 0.75}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

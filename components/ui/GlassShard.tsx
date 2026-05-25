// TODO: replace with real three.js / r3f glass shard. This is a CSS placeholder.
import { cn } from "@/lib/utils";

interface GlassShardProps {
  className?: string;
  size?: number;
}

export default function GlassShard({ className, size = 520 }: GlassShardProps) {
  return (
    <div
      className={cn("pointer-events-none relative", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* outer dark sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1a0d2a 0%, #0a0612 55%, #050208 100%)",
          boxShadow:
            "inset 0 0 120px rgba(123,91,255,0.15), 0 0 120px rgba(123,91,255,0.18)",
        }}
      />
      {/* violet inner glow */}
      <div
        className="absolute inset-[12%] rounded-full opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 40% 55%, rgba(196,87,160,0.55) 0%, rgba(123,91,255,0.35) 35%, rgba(10,6,18,0) 70%)",
        }}
      />
      {/* crystalline shard cluster — layered conic + clip-path slices */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="h-[55%] w-[55%] rotate-[18deg]"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(255,180,220,0.85), rgba(123,91,255,0.65), rgba(20,8,32,0.95), rgba(196,87,160,0.7), rgba(255,180,220,0.85))",
            clipPath:
              "polygon(50% 0%, 62% 22%, 88% 30%, 70% 52%, 95% 78%, 62% 70%, 50% 100%, 38% 72%, 8% 80%, 28% 54%, 6% 28%, 38% 22%)",
            filter:
              "drop-shadow(0 18px 30px rgba(0,0,0,0.6)) drop-shadow(0 0 24px rgba(196,87,160,0.35))",
          }}
        />
      </div>
      {/* specular highlight */}
      <div
        className="absolute left-[28%] top-[24%] h-[18%] w-[28%] rounded-full opacity-70 blur-md"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.85), rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  );
}

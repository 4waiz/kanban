import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Team — Kanban Studios",
  description:
    "Founders Awaiz Ahmed and Huda Mueen. Defense-grade engineering credibility, published AI research, eight-plus competition wins, deployed projects across consumer, industrial, and sustainability domains.",
};

const FOUNDERS = [
  {
    name: "Awaiz Ahmed",
    role: "Co-founder, Software & Systems Lead",
    bio: [
      "Software engineer at EDGE — the UAE's defense and intelligent systems group. Background spans Industry 5.0, AI/ML, ROS robotics, full-stack web, and document validation systems.",
      "Multi-time hackathon winner across smart health, robotics, real estate compliance, and game development. Undergraduate researcher in explainable AI for software requirement validation and swarm intelligence.",
      "BSc Software Engineering, Al Ain University. BSc Software Development, 42 Abu Dhabi.",
    ],
    tags: ["Systems engineering", "Robotics", "AI/ML", "Industry 5.0"],
  },
  {
    name: "Huda Mueen",
    role: "Co-founder, AI & Computer Vision Lead",
    bio: [
      "Data science and AI engineer at University of Stirling RAK. IEEE-published researcher in verifiable carbon accounting and edge-AI computer vision.",
      "Founder of EcoLens AI (Hult Prize winner) and Ghalia (B2B scent intelligence). Founder-in-Residence at ChallengeChain.",
      "Specializes in YOLO-based instance segmentation, real-time stream processing, computer vision pipelines, and B2B SaaS architecture.",
    ],
    tags: ["Computer vision", "Edge AI", "Research", "B2B SaaS"],
  },
];

const HIRING = [
  { role: "Senior Full-Stack Engineer", area: "Systems", state: "Hiring Q2" },
  { role: "AI/ML Engineer", area: "Systems", state: "Hiring Q2" },
  { role: "Computer Vision Engineer", area: "Labs", state: "Hiring Q3" },
  { role: "UI/UX Designer", area: "Systems", state: "Hiring Q3" },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="07 / Founders"
        title="The team"
        intro="Defense-grade engineering credibility, published AI research, eight-plus competition wins, and deployed projects across consumer, industrial, and sustainability domains — an unusual depth for any UAE-based firm under twenty-five."
      />

      {/* founders */}
      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-6 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <GlassCard key={f.name} className="flex flex-col gap-6 p-10">
              <div>
                <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text">
                  {f.name}
                </h2>
                <MonoLabel className="mt-3 text-kanban-violet-soft">{f.role}</MonoLabel>
              </div>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-kanban-text/70">
                {f.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-6">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-kanban-text/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* hiring */}
      <section className="border-t border-white/5 px-8 py-24">
        <div className="mx-auto max-w-360">
          <div className="mb-10 flex flex-col gap-4">
            <MonoLabel>Hiring</MonoLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text md:text-5xl">
              Open roles.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              The company is small by design — quality, not scale, is the moat. We hire when an
              engagement demands it. Cold notes welcome at{" "}
              <a
                href="mailto:careers@kanbanstudios.ae"
                className="text-kanban-text underline-offset-4 hover:underline"
              >
                careers@kanbanstudios.ae
              </a>
              .
            </p>
          </div>
          <ul className="flex flex-col">
            {HIRING.map((h) => (
              <li
                key={h.role}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-t border-white/5 py-6"
              >
                <span className="font-display text-xl font-medium text-kanban-text md:text-2xl">
                  {h.role}
                </span>
                <MonoLabel className="text-kanban-text/45">{h.area}</MonoLabel>
                <span className="rounded-full border border-kanban-violet/30 bg-kanban-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-kanban-violet-soft">
                  {h.state}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}

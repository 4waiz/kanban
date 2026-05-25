import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About — Kanban Studios",
  description:
    "A UAE-based engineering firm building mission-critical AI software for regulated and high-stakes environments.",
};

const FORCES = [
  {
    title: "Regulatory pressure",
    body: "UAE Net Zero 2050, Dubai Sustainable Tourism mandates, federal corporate tax, AML/UBO compliance, and emerging AI governance rules are pushing every serious organization toward audit-grade software.",
  },
  {
    title: "AI maturity gap",
    body: "Most organizations have run AI pilots; almost none have deployed AI safely into production with governance, explainability, and human oversight. The gap between 'we tried ChatGPT' and 'we run AI in regulated workflows' is the gap we fill.",
  },
  {
    title: "Talent dislocation",
    body: "The UAE has invested heavily in AI talent — MBZUAI, 42 Abu Dhabi, EDGE training, Samsung Innovation Campus — but most of that talent flows into corporate jobs, not independent firms capable of serving the market.",
  },
];

const ARCHETYPES = [
  "Free zones and government technology programs",
  "Security firms, defense suppliers, and critical-facility operators",
  "Healthcare providers and clinical groups",
  "Real estate developers and proptech firms",
  "Industrial and Industry 5.0 operators",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="06 / The firm"
        title="About"
        intro="A UAE-based software engineering firm that designs, builds, and operates mission-critical, AI-native software for regulated and high-stakes environments. We are not an agency. We are not a generalist dev shop. We are not a chatbot studio."
      />

      {/* the problem */}
      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <MonoLabel className="text-kanban-text/45">The problem</MonoLabel>
          <div className="flex flex-col gap-6 text-base leading-relaxed text-kanban-text/75">
            <p>
              Across the UAE and the wider GCC, three kinds of organizations face the same gap. Large
              enterprises pay global consultancies hundreds of thousands of dirhams and wait 12–24
              months for software that often arrives generic, over-engineered, and disconnected from
              local context.
            </p>
            <p>
              Mid-sized regulated companies need serious AI-enabled systems but cannot afford the
              consultancies — and cannot trust the average Dubai dev shop with sensitive data or
              audit-grade requirements.
            </p>
            <p>
              Government programs, accelerators, and high-growth startups want to build with AI
              properly — with explainability, traceability, governance, and human-in-the-loop control
              — but the available builders either skip those layers entirely or wrap them in
              enterprise pricing.
            </p>
            <p className="text-kanban-text/90">
              There is a missing layer in the market: a UAE-native engineering firm that combines
              AI/ML depth, regulated-industry credibility, and the speed of a small team. Kanban
              Studios is built to fill that layer.
            </p>
          </div>
        </div>
      </section>

      {/* two arms */}
      <section className="border-y border-white/5 px-8 py-24">
        <div className="mx-auto max-w-360">
          <div className="mb-12 flex flex-col gap-4">
            <MonoLabel>Structure</MonoLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text md:text-5xl">
              Two arms under one brand.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal index={0}>
              <GlassCard interactive className="flex h-full flex-col gap-5 p-10">
                <MonoLabel className="text-kanban-violet-soft">Kanban Systems</MonoLabel>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-kanban-text">
                  The client-work engine.
                </h3>
                <p className="text-base leading-relaxed text-kanban-text/65">
                  Custom builds, retainers, and accelerator deployments. This is where the revenue
                  comes from.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal index={1}>
              <GlassCard interactive className="flex h-full flex-col gap-5 p-10">
                <MonoLabel className="text-kanban-violet-soft">Kanban Labs</MonoLabel>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-kanban-text">
                  The R&amp;D arm.
                </h3>
                <p className="text-base leading-relaxed text-kanban-text/65">
                  Experimental prototypes, research collaborations with universities, hackathon
                  builds, and open-source contributions. Where credibility, talent, and future
                  product seeds come from.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* why now */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-360">
          <div className="mb-12 flex flex-col gap-4">
            <MonoLabel>Why now</MonoLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text md:text-5xl">
              Three forces make this the moment.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FORCES.map((f, i) => (
              <Reveal key={f.title} index={i}>
                <GlassCard interactive className="flex h-full flex-col gap-4 p-8">
                  <MonoLabel className="text-kanban-text/40">0{i + 1}</MonoLabel>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-kanban-text">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-kanban-text/65">{f.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* who we serve */}
      <section className="border-t border-white/5 px-8 py-24">
        <div className="mx-auto max-w-360">
          <div className="mb-12 flex flex-col gap-4">
            <MonoLabel>Target clients</MonoLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-kanban-text md:text-5xl">
              Five archetypes.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-kanban-text/60">
              We explicitly do not pursue consumer apps, generic web design, low-margin marketing
              automation, or chatbot-only projects.
            </p>
          </div>
          <ul className="flex flex-col gap-0">
            {ARCHETYPES.map((a, i) => (
              <li
                key={a}
                className="grid grid-cols-[60px_1fr] items-center gap-6 border-t border-white/5 py-7"
              >
                <MonoLabel className="text-kanban-text/35">0{i + 1}</MonoLabel>
                <span className="font-display text-2xl font-medium tracking-tight text-kanban-text md:text-3xl">
                  {a}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-text/70 transition-colors hover:text-kanban-text"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

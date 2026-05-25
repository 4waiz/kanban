import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import MonoLabel from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "Contact — Kanban Studios",
  description:
    "Tell us about your engagement. We respond within two working days.",
};

const CHANNELS = [
  {
    label: "Engagements",
    value: "hello@kanbanstudios.ae",
    href: "mailto:hello@kanbanstudios.ae",
    note: "For new projects, pilots, and pricing.",
  },
  {
    label: "Press & partnerships",
    value: "press@kanbanstudios.ae",
    href: "mailto:press@kanbanstudios.ae",
    note: "Media, interviews, joint announcements.",
  },
  {
    label: "Careers",
    value: "careers@kanbanstudios.ae",
    href: "mailto:careers@kanbanstudios.ae",
    note: "Engineers, designers, and domain specialists.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="08 / Initiate"
        title="Contact"
        intro="Tell us about the workflow, the data, the regulator, and the failure modes. We respond within two working days."
      />

      <section className="px-8 py-12">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* form */}
          <GlassCard className="flex flex-col gap-6 p-10">
            <form
              className="flex flex-col gap-5"
              action="mailto:hello@kanbanstudios.ae"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/45">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-kanban-text outline-none transition-colors focus:border-kanban-violet/50"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/45">
                    Organization
                  </span>
                  <input
                    name="org"
                    className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-kanban-text outline-none transition-colors focus:border-kanban-violet/50"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/45">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-kanban-text outline-none transition-colors focus:border-kanban-violet/50"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/45">
                  Engagement type
                </span>
                <select
                  name="type"
                  className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-kanban-text outline-none transition-colors focus:border-kanban-violet/50"
                  defaultValue="build"
                >
                  <option value="pilot">Pilot — 2–3 months</option>
                  <option value="build">Build — 3–6 months</option>
                  <option value="operate">Operate — retainer</option>
                  <option value="accelerator">Accelerator license</option>
                  <option value="research">Research / Lab collaboration</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kanban-text/45">
                  Project context
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-kanban-text outline-none transition-colors focus:border-kanban-violet/50"
                  placeholder="Workflow, sensitivity, regulator, target outcome…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-kanban-text px-8 font-mono text-[11px] uppercase tracking-[0.22em] text-kanban-bg transition-colors hover:bg-white"
              >
                Send brief
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-kanban-text/35">
                Submissions are reviewed by a founder, not a sales pipeline.
              </p>
            </form>
          </GlassCard>

          {/* channels */}
          <div className="flex flex-col gap-6">
            {CHANNELS.map((c) => (
              <GlassCard key={c.label} interactive className="flex flex-col gap-3 p-7">
                <MonoLabel className="text-kanban-text/45">{c.label}</MonoLabel>
                <a
                  href={c.href}
                  className="font-display text-xl font-semibold tracking-tight text-kanban-text hover:text-kanban-violet-soft"
                >
                  {c.value}
                </a>
                <p className="text-sm text-kanban-text/55">{c.note}</p>
              </GlassCard>
            ))}
            <GlassCard className="flex flex-col gap-3 p-7">
              <MonoLabel className="text-kanban-text/45">Location</MonoLabel>
              <p className="font-display text-xl font-semibold tracking-tight text-kanban-text">
                Abu Dhabi · Dubai
              </p>
              <p className="text-sm text-kanban-text/55">
                We meet at your site for engagements involving sensitive data.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}

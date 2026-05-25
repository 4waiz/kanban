import { ReactNode } from "react";
import MonoLabel from "@/components/ui/MonoLabel";

interface Section {
  id: string;
  heading: string;
  body: ReactNode;
}

interface LegalDocProps {
  effective: string;
  sections: Section[];
}

export default function LegalDoc({ effective, sections }: LegalDocProps) {
  return (
    <section className="px-8 py-12">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 md:grid-cols-[1fr_3fr] md:gap-16">
        {/* TOC */}
        <aside className="md:sticky md:top-32 md:self-start">
          <MonoLabel className="text-kanban-text/45">Effective {effective}</MonoLabel>
          <nav className="mt-6 flex flex-col gap-3 border-l border-white/10 pl-4">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-kanban-text/55 transition-colors hover:text-kanban-text"
              >
                <span className="text-kanban-text/30">{String(i + 1).padStart(2, "0")} ·</span>{" "}
                {s.heading}
              </a>
            ))}
          </nav>
        </aside>

        {/* body */}
        <article className="flex flex-col gap-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="flex flex-col gap-4 scroll-mt-32">
              <MonoLabel className="text-kanban-text/40">
                {String(i + 1).padStart(2, "0")}
              </MonoLabel>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-kanban-text md:text-3xl">
                {s.heading}
              </h2>
              <div className="prose prose-invert flex flex-col gap-4 text-base leading-relaxed text-kanban-text/70">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

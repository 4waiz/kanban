import Link from "next/link";
import Image from "next/image";
import MonoLabel from "@/components/ui/MonoLabel";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "AI Surveillance & Detection", href: "/services#surveillance" },
      { label: "Document Intelligence", href: "/services#documents" },
      { label: "Autonomous & Robotics", href: "/services#robotics" },
      { label: "Audit-Grade Workflows", href: "/services#workflows" },
      { label: "Computer Vision for Ops", href: "/services#vision" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Approach", href: "/approach" },
      { label: "Lab", href: "/lab" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact#careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/privacy#security" },
      { label: "Data Processing", href: "/privacy#dpa" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 px-6 pt-24 pb-10 md:px-12">
      <div className="mx-auto max-w-360">
        {/* big logo + tagline */}
        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-20">
          <div>
            <Link href="/" className="flex items-center" aria-label="Kanban Studios — home">
              <Image
                src="/logo.svg"
                alt="Kanban Studios"
                width={320}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-kanban-text/55">
              Mission-critical AI software for regulated and high-stakes environments. Designed in the UAE.
              Engineered to outlive.
            </p>
            <div className="mt-8 flex flex-col gap-2">
              <MonoLabel className="text-kanban-text/40">Abu Dhabi · Dubai</MonoLabel>
              <a
                href="mailto:hello@kanbanstudios.ae"
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-kanban-text/70 hover:text-kanban-text"
              >
                hello@kanbanstudios.ae
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <MonoLabel className="text-kanban-text/45">{col.heading}</MonoLabel>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-kanban-text/70 transition-colors hover:text-kanban-text"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* legal bar */}
        <div className="mt-20 flex flex-col gap-3 border-t border-white/5 pt-6 text-[11px] md:flex-row md:items-center md:justify-between">
          <span className="font-mono uppercase tracking-[0.18em] text-kanban-text/35">
            © {new Date().getFullYear()} Kanban Studios — Built to not fail.
          </span>
          <div className="flex gap-6 font-mono uppercase tracking-[0.18em] text-kanban-text/35">
            <Link href="/privacy" className="hover:text-kanban-text/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-kanban-text/70">
              Terms
            </Link>
            <a
              href="https://www.linkedin.com/company/kanban-studios"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kanban-text/70"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LegalDoc from "@/components/ui/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service — Kanban Studios",
  description: "Terms governing use of the Kanban Studios website and the supply of engineering services.",
};

const SECTIONS = [
  {
    id: "acceptance",
    heading: "Acceptance",
    body: (
      <p>
        These terms govern your use of kanbanstudios.ae and any free preview content we provide. The
        supply of paid engineering services is governed by the separate engagement contract signed
        between Kanban Studios and the client. Where the engagement contract conflicts with these
        terms, the engagement contract prevails.
      </p>
    ),
  },
  {
    id: "use",
    heading: "Use of the site",
    body: (
      <>
        <p>
          You may view, share, and quote the site for non-commercial purposes with attribution. You
          may not:
        </p>
        <ul className="list-disc pl-6">
          <li>Scrape the site at a rate that affects availability for other visitors.</li>
          <li>Republish substantial portions of the site without written permission.</li>
          <li>Use the site or our brand to imply endorsement or affiliation that does not exist.</li>
          <li>Probe the site for vulnerabilities outside our coordinated disclosure process.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property",
    body: (
      <>
        <p>
          All marketing content, brand assets, and case-study material on this site are the property
          of Kanban Studios or our clients. Project case studies are published with client
          permission.
        </p>
        <p>
          Code and deliverables produced under an engagement are governed by the IP clauses of the
          engagement contract. By default, custom builds are owned by the client on full payment;
          productized accelerators remain Kanban property and are licensed to the client.
        </p>
      </>
    ),
  },
  {
    id: "engagements",
    heading: "Engagement scope and changes",
    body: (
      <>
        <p>
          Every engagement begins with a signed scope of work specifying deliverables, timeline,
          milestones, and price. Material changes require a written change order signed by both
          parties.
        </p>
        <p>
          We do not begin work without a signed scope and the agreed deposit. We do not commit to
          deadlines we have not estimated ourselves.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Payment terms",
    body: (
      <>
        <p>
          Engagements are invoiced in AED unless specified otherwise. Standard schedule is 40% on
          contract signature, 30% at midpoint milestone, 30% on delivery acceptance. Retainers are
          invoiced monthly in advance.
        </p>
        <p>
          Late payment beyond 30 days suspends work and accrues interest at the maximum rate
          permitted under UAE law.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    heading: "Warranty",
    body: (
      <>
        <p>
          We warrant that engagement deliverables will materially conform to the agreed
          specification for 90 days after acceptance. Defects reported within that window are fixed
          at no additional cost. After 90 days, fixes and feature work proceed under a retainer or
          change order.
        </p>
        <p>
          The site is provided &ldquo;as is&rdquo; with no warranty. We do not warrant uninterrupted
          availability or fitness for any particular purpose.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by UAE law, our aggregate liability under any engagement is
        capped at the fees paid by the client to Kanban Studios in the 12 months preceding the
        claim. We are not liable for indirect, consequential, or punitive damages.
      </p>
    ),
  },
  {
    id: "termination",
    heading: "Termination",
    body: (
      <p>
        Either party may terminate an engagement on 30 days written notice. On termination, the
        client pays for work completed and accepted to date. Source code, documentation, and any
        client data held by Kanban are returned within 14 days.
      </p>
    ),
  },
  {
    id: "law",
    heading: "Governing law",
    body: (
      <p>
        These terms and any engagement contract are governed by the laws of the United Arab
        Emirates. Disputes are submitted to the exclusive jurisdiction of the Abu Dhabi courts,
        unless the engagement contract specifies DIFC or ADGM arbitration.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        Legal queries:{" "}
        <a href="mailto:legal@kanbanstudios.ae" className="underline-offset-4 hover:underline">
          legal@kanbanstudios.ae
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        intro="Terms governing use of the Kanban Studios website and the supply of engineering services. Plain English. The engagement contract is the source of truth for paid work."
      />
      <LegalDoc effective="01 January 2026" sections={SECTIONS} />
    </>
  );
}

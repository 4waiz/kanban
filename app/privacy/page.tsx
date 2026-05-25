import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LegalDoc from "@/components/ui/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy — Kanban Studios",
  description: "How Kanban Studios handles personal data, client data, and audit trails.",
};

const SECTIONS = [
  {
    id: "intro",
    heading: "Who we are",
    body: (
      <>
        <p>
          Kanban Studios (&ldquo;Kanban&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a software
          engineering firm registered in the United Arab Emirates. This policy explains how we
          collect, process, and protect personal data on{" "}
          <a href="https://kanbanstudios.ae" className="underline-offset-4 hover:underline">
            kanbanstudios.ae
          </a>{" "}
          and across engagements with our clients.
        </p>
        <p>
          We work in regulated, high-stakes environments. Our default posture is data minimization,
          encryption in transit and at rest, and audit-grade logging on every system we touch.
        </p>
      </>
    ),
  },
  {
    id: "data",
    heading: "What we collect",
    body: (
      <>
        <p>On the marketing site, we collect:</p>
        <ul className="list-disc pl-6">
          <li>Information you submit via the contact form (name, organization, email, project brief).</li>
          <li>Standard server logs (IP, user agent, timestamp) for security and abuse prevention.</li>
          <li>Anonymous, aggregate analytics — page views, referrers, device class. No third-party advertising trackers.</li>
        </ul>
        <p>
          During engagements, we process whatever data the contract specifies. That data is governed
          by the executed Data Processing Agreement and is never used outside the engagement scope.
        </p>
      </>
    ),
  },
  {
    id: "lawful-basis",
    heading: "Lawful basis",
    body: (
      <>
        <p>
          We process personal data under one of: (a) contract — to deliver agreed work; (b)
          legitimate interest — to operate and secure our business; (c) legal obligation — where UAE
          law requires retention or disclosure; or (d) consent — for marketing communications, which
          you can withdraw at any time.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Retention",
    body: (
      <>
        <p>
          Contact-form submissions are retained for 24 months unless they convert into an active
          engagement, in which case the engagement contract governs retention. Server logs are
          rotated every 90 days. Engagement data is held only as long as the contract requires and
          then securely destroyed or returned.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <>
        <p>
          All engagement systems are designed for security and auditability before features. TLS in
          transit, AES-256 at rest, hardware-backed key storage where the workload allows, separation
          of duties for production access, and cryptographic audit trails on sensitive decisions.
        </p>
        <p>
          We do not store client production data on the marketing site infrastructure. Engagement
          environments are isolated and provisioned per contract.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who we share with",
    body: (
      <>
        <p>
          We do not sell personal data. We share data only with: (a) infrastructure subprocessors
          listed in the relevant DPA, vetted for security and locality; (b) UAE authorities where
          legally compelled; or (c) parties you explicitly authorize.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    heading: "Your rights",
    body: (
      <>
        <p>
          You can request access, correction, deletion, portability, or restriction of processing
          for any personal data we hold about you. Direct requests to{" "}
          <a href="mailto:privacy@kanbanstudios.ae" className="underline-offset-4 hover:underline">
            privacy@kanbanstudios.ae
          </a>
          . We respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "dpa",
    heading: "Data Processing Agreement",
    body: (
      <>
        <p>
          For engagement clients, our standard DPA is provided on contract signing and aligns with
          UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection and, where applicable,
          GDPR. Custom DPAs are negotiated for engagements involving regulated data — defense,
          healthcare, financial, or government.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We will post material changes here with a new effective date. Continued use of the site
        after changes are posted means you accept the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        intro="How Kanban Studios handles personal data, client data, and audit trails. Written in plain English, not legalese."
      />
      <LegalDoc effective="01 January 2026" sections={SECTIONS} />
    </>
  );
}

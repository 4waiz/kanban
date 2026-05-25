# Kanban Studios — Project Context

## What we're building
The marketing website for Kanban Studios — a UAE-based AI software engineering firm building mission-critical systems for regulated industries (defense, government, healthcare, finance, real estate, industrial operations).

## Brand voice
Confident, weighty, technical, slightly playful. Tagline: "Built to not fail."
Avoid: "innovative", "cutting-edge", "next-gen", "synergy".
Prefer: "Mission-critical", "Regulated", "Sensitive", "Engineered properly".

## Visual direction
- Dark mode base: near-black (#0A0612 to #110820)
- Accent: violet (#7B5BFF) and soft violet (#A78BFA, #C4B5FD)
- Text: off-white (#F4F1FA)
- Heavy glassmorphism — frosted cards, backdrop blur, thin white-alpha borders, soft inner glow
- Big oversized display typography (180–280px hero, 80–120px section headings)
- Mono labels for technical micro-copy
- Subtle film grain texture across the page
- 3D glass-shard objects floating in hero (will add later with three.js)

## Typography
- Display headings: Space Grotesk (placeholder for Neue Machina)
- Body: Inter
- Mono labels: JetBrains Mono, uppercase, slightly tracked

## Tech stack
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Framer Motion for animations
- react-three-fiber for 3D (only when needed)
- lucide-react for icons

## Conventions
- One section per file in /components/sections/
- Reusable bits in /components/ui/ (GlassCard, MonoLabel, PillButton, MarqueeRow)
- Use cn() helper from /lib/utils.ts (clsx + tailwind-merge)
- Always import sections into app/page.tsx in order
- Add a TODO comment at the top of any component with anything imperfect

## Reference inspiration
- superlist.com — bold display, pixel-font accents
- tricks-glassmorphism.webflow.io — 3D objects, glassmorphic cards
- palantir.com — serious B2B structure

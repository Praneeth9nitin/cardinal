# Cardinal — AI Precision Outbound (Prototype)

> I read Cardinal's problem statement and built a working prototype in 3 days to understand the product deeply.
> This is not a clone — it's a demonstration of how I think about product and AI engineering.

**Live Demo → [cardinal-prototype.vercel.app](https://cardinal-prototype.vercel.app/)**

---

## What This Is

Cardinal is a YC-backed AI platform for precision outbound sales. Instead of "spray and pray" cold emails, Cardinal detects buying signals from across the internet and generates hyper-personalized outreach automatically — replacing workflows that normally require 10+ tools and a full-time GTM engineer.

This prototype replicates the core user experience:
- A signal-based prospect feed
- AI-generated personalized outreach sequences
- A visual workflow builder showing the automation chain

---

## Features

**Prospects Feed**
- 8 realistic prospects with hot / warm / cold buying signals
- Visual signal indicators with recency timestamps
- Priority badges for prospects with active hot signals

**Prospect Detail + AI Outreach**
- Full signal breakdown per prospect
- One-click AI generation using LLM API
- 3-step personalized sequence: Email (Day 1) → LinkedIn (Day 3) → Email (Day 7)
- Each message references the prospect's actual signals — not generic templates

**Workflow Builder**
- Visual automation canvas built with ReactFlow
- Shows the Trigger → Filter → Enrich → Action chain
- Represents how Cardinal replaces manual GTM work with automated workflows

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI | Groq API (gpt-oss-20b) |
| Workflow Canvas | ReactFlow |
| Deployment | Vercel |

---

## What's Real vs Mocked

| Feature | Status |
|---|---|
| Prospect data | Mocked — realistic but hardcoded |
| Buying signals | Mocked — based on real signal patterns |
| AI outreach generation | ✅ Real — live LLM API call |
| Workflow execution | Visual only — no backend logic |
| CRM integrations | Not built |
| Web crawling / signal detection | Not built — Cardinal's actual moat |

The data layer is mocked intentionally. The goal was to demonstrate product understanding and AI integration — not replicate Cardinal's proprietary infrastructure.

---

## Running Locally

```bash
git clone https://github.com/Praneeth9nitin/cardinal
cd cardinal
npm install
```

Create a `.env.local` file:
```
GROQ_API_KEY=your_groq_api_key
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Why I Built This

I'm a final year IT student actively looking to join an early stage AI startup as a generalist engineer.

When I read Cardinal's problem statement, I didn't send a resume. I built the product instead.

This prototype took 3 days. It helped me understand precision outbound, buying signals, GTM automation, and how AI fits into a sales workflow — better than any article could have.

If you're building something interesting and want someone who learns by shipping, let's talk.

**Nitin Kumar**
[LinkedIn](https://www.linkedin.com/in/praneethnitin/) · [X / Twitter](https://x.com/praneeth__gupta)

---

## Acknowledgement

Built as a study of [Cardinal](https://trycardinal.ai/) — a YC-backed AI platform for precision outbound. All product concepts belong to the Cardinal team. This prototype was built purely to demonstrate product understanding and engineering initiative.
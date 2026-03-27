import { Signal } from "@/lib/data/prospect";
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


export async function POST(req: NextRequest) {
    const { prospect } = await req.json()
    try {
        const signalList = prospect.signals
            .map((s: Signal) => `- ${s.text} (${s.time})`)
            .join("\n")

        const prompt = `
        You are an expert SDR writing hyper-personalized outbound sequences.

        Prospect:
        Name: ${prospect.name}
        Role: ${prospect.role}
        Company: ${prospect.company}
        Industry: ${prospect.industry}

        Signals detected:
        ${signalList}

        Write a 3-step outreach sequence:

        Step 1 - Email (Day 1): Reference the strongest signal directly. 3-4 lines max.
        Step 2 - LinkedIn (Day 3): Softer follow up, mention something about their industry. 2-3 lines.
        Step 3 - Email (Day 7): Final nudge, add a simple CTA. 3 lines max.

        Rules:
        - Sound human, not like a robot
        - Never say "I came across your profile"
        - Each message must feel written specifically for this person
        - Reference the actual signals, don't be generic
        `

        const msg = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        })
        return NextResponse.json({ result: msg.choices[0].message.content })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to generate outreach" }, { status: 500 })
    }
}
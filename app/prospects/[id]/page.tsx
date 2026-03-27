"use client"
import { Prospect, prospects } from "@/lib/data/prospect"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function ProspectPage() {
    async function generateOutReach(prospect: Prospect) {
        setResult("loading")
        const res = await fetch("/api/outreach", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prospect })
        })
        const data = await res.json()
        setResult(data.result)
    }
    const params = useParams<{ id: string }>()
    const id = params.id
    const prospect = prospects.find(p => p.id === id)
    const [result, setResult] = useState("")

    if (!prospect) return <div className="text-white p-8">Not found</div>

    const dotColor: Record<string, string> = {
        hot: "bg-red-500",
        warm: "bg-yellow-400",
        cold: "bg-zinc-500",
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-white px-6 py-8 max-w-3xl mx-auto">

            <div className="mb-6">
                <h1 className="text-2xl font-bold">{prospect.name}</h1>
                <p className="text-zinc-400">{prospect.role} · {prospect.company} · {prospect.industry}</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6">
                <p className="text-sm text-zinc-500 mb-3 uppercase tracking-wide">Signals</p>
                <div className="flex flex-col gap-2">
                    {prospect.signals.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            <span className={`w-2 h-2 rounded-full ${dotColor[s.type]}`} />
                            <span>{s.text}</span>
                            <span className="ml-auto text-zinc-600">{s.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => generateOutReach(prospect)}
                className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-zinc-200 transition mb-6"
            >
                Generate Outreach
            </button>

            <div className="bg-zinc-900 border flex flex-col gap-2 border-zinc-800 rounded-xl p-4 min-h-32 text-sm text-zinc-500">
                {result === "loading" ? "Generating..." : result.trim().split("**").map((line, i) => (
                    <div key={i} className={`mb-4 border border-zinc-800 p-2 rounded-lg ${i % 2 === 1 ? "bg-zinc-800 font-extrabold" : ""}`}>{line}</div>
                ))}
            </div>

        </main>
    )
}
import { prospects } from "@/lib/data/prospect"
import Link from "next/link"

const dotColor = { hot: "bg-red-500", warm: "bg-yellow-400", cold: "bg-zinc-500" }

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Cardinal</h1>
          <p className="text-zinc-400 text-sm mt-1">8 prospects · 3 hot signals today</p>
        </div>
        <Link href="/workflow" className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg">
          + New Workflow
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {prospects.map((p) => (
          <Link key={p.id} href={`/prospects/${p.id}`}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{p.name} <span className="text-zinc-400 font-normal text-sm">· {p.role} · {p.company}</span></span>
                {p.signals.some(s => s.type === "hot") && (
                  <span className="text-xs text-red-400 border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded-full">hot</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                {p.signals.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className={`w-2 h-2 rounded-full ${dotColor[s.type]}`} />
                    {s.text} <span className="ml-auto text-zinc-600">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
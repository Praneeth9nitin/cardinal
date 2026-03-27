"use client"
import ReactFlow, { Node, Edge, Background, Controls } from "reactflow"
import "reactflow/dist/style.css"

const nodes: Node[] = [
    {
        id: "1",
        position: { x: 250, y: 0 },
        data: {
            label: (
                <div className="text-left">
                    <p className="text-xs text-red-400 uppercase tracking-wide mb-1">Trigger</p>
                    <p className="font-semibold text-white text-sm">Visited Pricing Page</p>
                    <p className="text-zinc-400 text-xs mt-1">More than 2 times this week</p>
                </div>
            )
        },
        style: { background: "#18181b", border: "1px solid #ef4444", borderRadius: 12, padding: 16, width: 220 }
    },
    {
        id: "2",
        position: { x: 250, y: 140 },
        data: {
            label: (
                <div className="text-left">
                    <p className="text-xs text-yellow-400 uppercase tracking-wide mb-1">Filter</p>
                    <p className="font-semibold text-white text-sm">Qualify Prospect</p>
                    <p className="text-zinc-400 text-xs mt-1">Role is VP, Director or Founder</p>
                </div>
            )
        },
        style: { background: "#18181b", border: "1px solid #eab308", borderRadius: 12, padding: 16, width: 220 }
    },
    {
        id: "3",
        position: { x: 250, y: 280 },
        data: {
            label: (
                <div className="text-left">
                    <p className="text-xs text-blue-400 uppercase tracking-wide mb-1">Enrich</p>
                    <p className="font-semibold text-white text-sm">Find LinkedIn Activity</p>
                    <p className="text-zinc-400 text-xs mt-1">Fetch recent posts & signals</p>
                </div>
            )
        },
        style: { background: "#18181b", border: "1px solid #3b82f6", borderRadius: 12, padding: 16, width: 220 }
    },
    {
        id: "4",
        position: { x: 250, y: 420 },
        data: {
            label: (
                <div className="text-left">
                    <p className="text-xs text-green-400 uppercase tracking-wide mb-1">Action</p>
                    <p className="font-semibold text-white text-sm">Generate Outreach</p>
                    <p className="text-zinc-400 text-xs mt-1">AI writes personalized sequence</p>
                </div>
            )
        },
        style: { background: "#18181b", border: "1px solid #22c55e", borderRadius: 12, padding: 16, width: 220 }
    },
]

const edges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", style: { stroke: "#52525b" } },
    { id: "e2-3", source: "2", target: "3", style: { stroke: "#52525b" } },
    { id: "e3-4", source: "3", target: "4", style: { stroke: "#52525b" } },
]

export default function WorkflowPage() {
    return (
        <div className="h-screen bg-zinc-950 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                <div>
                    <h1 className="text-white font-semibold">Pricing Page Workflow</h1>
                    <p className="text-zinc-500 text-sm">Trigger → Filter → Enrich → Act</p>
                </div>
                <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg">
                    + Add Step
                </button>
            </div>

            {/* Canvas */}
            <div className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    proOptions={{ hideAttribution: true }}
                >
                    <Background color="#27272a" gap={24} />
                    <Controls />
                </ReactFlow>
            </div>

        </div>
    )
}
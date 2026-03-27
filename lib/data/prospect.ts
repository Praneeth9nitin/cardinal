export type Signal = {
    type: "hot" | "warm" | "cold"
    text: string
    time: string
}

export type Prospect = {
    id: string
    name: string
    role: string
    company: string
    industry: string
    signals: Signal[]
}

export const prospects: Prospect[] = [
    {
        id: "1",
        name: "Sarah Chen",
        role: "Head of Sales",
        company: "Rippling",
        industry: "HR Tech",
        signals: [
            { type: "hot", text: "Visited pricing page 3 times this week", time: "2h ago" },
            { type: "warm", text: "Posted about scaling outbound on LinkedIn", time: "1d ago" },
            { type: "cold", text: "Company just raised Series B", time: "3d ago" },
        ],
    },
    {
        id: "2",
        name: "Marcus Hill",
        role: "VP of Sales",
        company: "Notion",
        industry: "Productivity",
        signals: [
            { type: "hot", text: "Signed up for free trial", time: "30m ago" },
            { type: "warm", text: "Hired 3 new AEs this month", time: "2d ago" },
        ],
    },
    {
        id: "3",
        name: "Priya Nair",
        role: "Founder & CEO",
        company: "Draftwise",
        industry: "Legal Tech",
        signals: [
            { type: "warm", text: "Engaged with your LinkedIn post", time: "4h ago" },
            { type: "cold", text: "Attended SaaStr conference", time: "1w ago" },
        ],
    },
    {
        id: "4",
        name: "Jake Torres",
        role: "Sales Director",
        company: "Merge",
        industry: "Dev Tools",
        signals: [
            { type: "hot", text: "Clicked pricing link in cold email", time: "1h ago" },
            { type: "hot", text: "Visited case studies page", time: "1h ago" },
            { type: "warm", text: "Posted: 'looking for outbound solutions'", time: "3d ago" },
        ],
    },
    {
        id: "5",
        name: "Anika Patel",
        role: "GTM Lead",
        company: "Mintlify",
        industry: "Dev Tools",
        signals: [
            { type: "warm", text: "Company headcount grew 40% this quarter", time: "5d ago" },
        ],
    },
    {
        id: "6",
        name: "Tom Brennan",
        role: "CRO",
        company: "Runway",
        industry: "Fintech",
        signals: [
            { type: "cold", text: "Mentioned pain with manual prospecting on podcast", time: "1w ago" },
            { type: "warm", text: "New job — started role 2 months ago", time: "2mo ago" },
        ],
    },
    {
        id: "7",
        name: "Linda Wu",
        role: "VP Revenue",
        company: "Greptile",
        industry: "AI Dev Tools",
        signals: [
            { type: "hot", text: "Requested a demo", time: "10m ago" },
        ],
    },
    {
        id: "8",
        name: "Daniel Osei",
        role: "Head of Growth",
        company: "Cabal",
        industry: "Sales Tech",
        signals: [
            { type: "warm", text: "Retweeted content about AI in sales", time: "2d ago" },
            { type: "cold", text: "Blog post: 'why outbound is broken'", time: "2w ago" },
        ],
    },
]
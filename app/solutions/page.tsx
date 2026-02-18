import type { Metadata } from "next";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Overview of Starlink-based connectivity solutions for business, maritime, remote sites, and emergency communications."
};

export default function SolutionsPage() {
  const items = [
    ["Business & Enterprise", "Primary or backup internet for offices, branches, and critical operations."],
    ["Maritime / Marine", "Onshore and offshore connectivity plans for vessels and marine fleets."],
    ["Remote Sites", "Mining, energy and construction site deployments with ruggedized recommendations."],
    ["Emergency / Backup", "Rapid-response internet kits for continuity and disaster readiness."],
    ["RV / Mobile Teams", "Reliable internet for mobile command centers and field operations."]
  ];

  return <div className="container py-16"><SectionTitle title="Solutions built for demanding environments" description="From enterprise offices to open sea and remote terrain, we design reliable connectivity packages based on Starlink hardware and plans." />
    <div className="grid gap-6 md:grid-cols-2">{items.map(([title,desc])=><Card key={title}><CardTitle>{title}</CardTitle><CardDescription className="mt-2">{desc}</CardDescription></Card>)}</div>
  </div>;
}

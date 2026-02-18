import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Industries", description: "Industry-focused connectivity offerings for maritime, enterprise, remote and emergency environments." };

export default function IndustriesPage() {
  const industries = ["Maritime", "Business", "Remote Sites", "Emergency"];
  return <div className="container py-16"><h1 className="text-4xl font-bold">Industries</h1><SectionTitle title="Sector-focused connectivity strategy" />
    <div className="grid gap-6 md:grid-cols-2">{industries.map((industry)=><Card key={industry}><CardTitle>{industry}</CardTitle><CardDescription className="mt-2">Deployment model, recommended kits, and support workflow tailored to {industry.toLowerCase()} needs.</CardDescription></Card>)}</div>
  </div>;
}

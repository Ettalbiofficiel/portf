import type { Metadata } from "next";
import Link from "next/link";
import { plans } from "@/lib/site-data";
import { SectionTitle } from "@/components/section-title";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Starlink Plans",
  description: "Compare Starlink data plans and request a quote for your business, maritime, or remote operations."
};

export default function PlansPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">Starlink Plans</h1>
      <SectionTitle title="Choose the right data package" description="Flexible plans built for operations of every scale." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan}>
            <CardTitle>{plan} Plan</CardTitle>
            <CardDescription className="mt-2">Best for distributed teams and high-priority connectivity needs.</CardDescription>
            <p className="mt-3 text-sm text-muted-foreground">Includes support onboarding and deployment guidance.</p>
            <Link href={`/contact?plan=${encodeURIComponent(plan.toLowerCase())}`} className={`${buttonVariants()} mt-5 w-full`}>
              Select Plan
            </Link>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-muted-foreground">Need a custom plan? <Link href="/contact" className="text-primary">Request a quote.</Link></p>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Learn about StarlinkGlobal and our mission to deliver resilient satellite connectivity." };

export default function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">About StarlinkGlobal</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
        <p>StarlinkGlobal helps organizations deploy Starlink-based internet solutions in complex environments where speed, uptime, and reach matter most.</p>
        <p>We combine hardware procurement, plan advisory, installation guidance, and ongoing support so teams can stay connected without disruption.</p>
        <p>From coastal fleets to remote industrial camps, our mission is to make high-performance satellite internet practical and dependable.</p>
      </div>
    </div>
  );
}

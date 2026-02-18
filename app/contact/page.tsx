import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description: "Request a quote for Starlink-based internet kits and plans with expert deployment support."
};

export default function ContactPage({ searchParams }: { searchParams: { plan?: string; kit?: string } }) {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">Contact / Get a Quote</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">Tell us your environment, timeline, and goals. We will recommend the best Starlink hardware and plan package for your operations.</p>
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <ContactForm initialPlan={searchParams.plan} initialKit={searchParams.kit} />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Integration-ready: replace the submit handler with your email provider or CRM webhook endpoint.</p>
    </div>
  );
}

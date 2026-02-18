import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Home",
  description: "Satellite internet solutions for business, maritime, remote sites, and emergency backup communications."
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-grid py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold md:text-6xl">Satellite Internet, Anywhere.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Starlink solutions for business, maritime, and remote operations — with expert support and fast deployment.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>Get a Quote</Link>
            <Link href="/plans" className={buttonVariants({ variant: "outline", size: "lg" })}>Explore Plans</Link>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid gap-3 md:grid-cols-5">
          {["Fast Setup", "Global Coverage", "Business Support", "Maritime Ready", "Emergency Kits"].map((badge) => (
            <div key={badge} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
              <BadgeCheck className="mr-2 inline h-4 w-4 text-primary" />{badge}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle eyebrow="Solutions" title="Connectivity tailored to your mission" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Business & Enterprise", "Maritime / Marine", "Remote Sites", "Backup / Emergency"].map((item, idx) => (
            <FadeIn key={item} delay={idx * 0.08}><Card><CardTitle>{item}</CardTitle><CardDescription className="mt-2">Reliable Starlink-based internet packages with deployment and SLA support.</CardDescription></Card></FadeIn>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle eyebrow="Devices" title="Featured Starlink hardware" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Mini Kit", "/images/device-mini.svg"],
            ["High Performance", "/images/device-hp.svg"],
            ["Enterprise", "/images/device-enterprise.svg"]
          ].map(([name, src]) => (
            <Card key={name} className="overflow-hidden p-0"><Image src={src} alt={name} width={600} height={380} className="h-48 w-full object-cover" /><div className="p-6"><CardTitle>{name}</CardTitle></div></Card>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle eyebrow="How it works" title="Get connected in 3 simple steps" />
        <div className="grid gap-6 md:grid-cols-3">
          {["Choose plan", "Checkout/Quote", "Activate & Go"].map((step, i) => <Card key={step}><CardTitle>{i + 1}. {step}</CardTitle></Card>)}
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle eyebrow="Testimonials" title="Trusted by operations teams" />
        <div className="grid gap-6 md:grid-cols-3">
          {["Our vessels stay connected even offshore.", "Installation was fast and support was excellent.", "Perfect backup internet for emergency response."].map((quote) => <Card key={quote}><CardDescription>“{quote}”</CardDescription></Card>)}
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <Accordion>
          <AccordionItem title="Do you provide hardware and data plans?">Yes. We supply Starlink hardware and plans with advisory, installation and support.</AccordionItem>
          <AccordionItem title="Can you deploy for remote sites?">Yes, including mining, energy, construction camps and temporary project bases.</AccordionItem>
          <AccordionItem title="Do you offer maritime support?">We support marine use cases with durable kit recommendations and onboarding guidance.</AccordionItem>
        </Accordion>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl border border-primary/30 bg-secondary p-8 text-center">
          <h2 className="text-2xl font-bold">Need resilient connectivity now?</h2>
          <p className="mt-2 text-muted-foreground">Talk to our team for kit selection, deployment planning, and custom pricing.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <span><Phone className="mr-2 inline h-4 w-4 text-primary"/> +1 (555) 012-3344</span>
            <span><Mail className="mr-2 inline h-4 w-4 text-primary"/> sales@starlinkglobal.ai</span>
            <span><MessageCircle className="mr-2 inline h-4 w-4 text-primary"/> WhatsApp: +1 (555) 012-3344</span>
          </div>
          <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-6`}>Get a Quote <ArrowRight className="ml-2 h-4 w-4"/></Link>
        </div>
      </section>
    </div>
  );
}

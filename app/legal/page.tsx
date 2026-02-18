import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy & Terms", description: "Privacy policy and terms for StarlinkGlobal website and quote request services." };

export default function LegalPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">Privacy Policy & Terms</h1>
      <div className="mt-6 space-y-8 text-muted-foreground">
        <section><h2 className="text-xl font-semibold text-foreground">Privacy Policy</h2><p className="mt-2">We collect contact details submitted via forms to respond to inquiries and provide quotes. We do not sell personal data. Contact us to request data updates or deletion.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Terms of Use</h2><p className="mt-2">Website content is informational and may change without notice. Quotes are non-binding until confirmed in writing. Service availability depends on region, hardware, and network conditions.</p></section>
      </div>
    </div>
  );
}

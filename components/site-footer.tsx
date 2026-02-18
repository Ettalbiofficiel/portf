import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col justify-between gap-6 text-sm text-muted-foreground md:flex-row">
        <div>
          <p className="font-semibold text-foreground">StarlinkGlobal</p>
          <p>Starlink-based connectivity solutions for mission-critical operations.</p>
        </div>
        <div className="space-x-4">
          <Link href="/legal">Privacy & Terms</Link>
          <Link href="/contact">Get a Quote</Link>
        </div>
      </div>
    </footer>
  );
}

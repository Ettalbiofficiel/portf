import Link from "next/link";
import { Satellite } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Satellite className="h-5 w-5 text-primary" />
          StarlinkGlobal
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={buttonVariants()}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

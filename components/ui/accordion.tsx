"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

export function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-lg border border-border bg-card">
      <button className="flex w-full items-center justify-between px-4 py-3 text-left" onClick={() => setOpen(!open)}>
        <span className="font-medium">{title}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open ? <div className="px-4 pb-4 text-sm text-muted-foreground">{children}</div> : null}
    </div>
  );
}

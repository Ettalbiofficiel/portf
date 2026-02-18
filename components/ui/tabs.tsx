"use client";
import { cn } from "@/lib/utils";

export function TabList({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={cn("w-full rounded-lg border px-4 py-3 text-left", value === item ? "border-primary bg-secondary" : "border-border bg-card")}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

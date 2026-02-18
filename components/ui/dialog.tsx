"use client";
import * as React from "react";
import { X } from "lucide-react";

export function Dialog({ trigger, title, description }: { trigger: React.ReactNode; title: string; description: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-xl border border-border bg-card p-6">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

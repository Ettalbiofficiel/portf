"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { TabList } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";

const deviceData = {
  Mini: { Throughput: "Portable performance", Power: "Low", Use: "Field teams, mobile work", Mounting: "Tripod / compact" },
  Standard: { Throughput: "High", Power: "Medium", Use: "SMB and office backup", Mounting: "Fixed" },
  "Standard Actuated": { Throughput: "High", Power: "Medium", Use: "Auto-align operations", Mounting: "Motorized" },
  "High Performance": { Throughput: "Very high", Power: "Higher", Use: "Critical operations", Mounting: "Fixed robust" },
  "Flat High Performance": { Throughput: "Very high", Power: "Higher", Use: "In-motion maritime/vehicle", Mounting: "Low profile" },
  Enterprise: { Throughput: "Enterprise class", Power: "Custom", Use: "Large distributed sites", Mounting: "Custom deployment" }
} as const;

export function DeviceComparison() {
  const devices = Object.keys(deviceData);
  const [selected, setSelected] = useState(devices[0]);
  const specs = useMemo(() => deviceData[selected as keyof typeof deviceData], [selected]);

  return (
    <>
      <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
        <TabList items={devices} value={selected} onChange={setSelected} />
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold">{selected}</h2>
          <table className="mt-6 w-full text-left text-sm">
            <tbody>
              {Object.entries(specs).map(([key, value]) => (
                <tr key={key} className="border-t border-border">
                  <th className="py-3 pr-4 font-medium text-muted-foreground">{key}</th>
                  <td className="py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link href="/contact?kit=high-performance" className={`${buttonVariants({ size: "lg" })} mt-10`}>
        Get Your Kit Today
      </Link>
    </>
  );
}

import type { Metadata } from "next";
import { DeviceComparison } from "@/components/device-comparison";

export const metadata: Metadata = {
  title: "Devices",
  description: "Compare Starlink kits including Mini, Standard, High Performance and Enterprise options."
};

export default function DevicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold">Devices</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">Compare Starlink kit options to match your environment and performance goals.</p>
      <DeviceComparison />
    </div>
  );
}

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/site-data";

const formSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  industry: z.string().min(2),
  useCase: z.string().min(2),
  preferredKit: z.string().min(2),
  preferredPlan: z.string().min(2),
  message: z.string().min(10)
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm({ initialPlan, initialKit }: { initialPlan?: string; initialKit?: string }) {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { preferredPlan: initialPlan || "", preferredKit: initialKit || "" }
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Quote request payload", data);
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
  };

  if (done) return <div className="rounded-lg border border-primary/30 bg-secondary p-6">Thank you! Your quote request has been sent. Our team will contact you shortly.</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
      <div><label className="mb-1 block text-sm">Full name</label><Input {...register("fullName")} />{errors.fullName && <p className="text-xs text-red-400">Required</p>}</div>
      <div><label className="mb-1 block text-sm">Company</label><Input {...register("company")} />{errors.company && <p className="text-xs text-red-400">Required</p>}</div>
      <div><label className="mb-1 block text-sm">Email</label><Input type="email" {...register("email")} />{errors.email && <p className="text-xs text-red-400">Valid email required</p>}</div>
      <div><label className="mb-1 block text-sm">Phone</label><Input {...register("phone")} />{errors.phone && <p className="text-xs text-red-400">Required</p>}</div>
      <div><label className="mb-1 block text-sm">Industry</label><Input {...register("industry")} /></div>
      <div><label className="mb-1 block text-sm">Use case</label><Input {...register("useCase")} /></div>
      <div>
        <label className="mb-1 block text-sm">Preferred kit</label>
        <Select {...register("preferredKit")}>
          <option value="">Select kit</option>
          <option>Mini</option><option>Standard</option><option>Standard Actuated</option><option>High Performance</option><option>Flat High Performance</option><option>Enterprise</option>
        </Select>
      </div>
      <div>
        <label className="mb-1 block text-sm">Preferred plan</label>
        <Select {...register("preferredPlan")}>
          <option value="">Select plan</option>
          {plans.map((plan)=><option key={plan} value={plan.toLowerCase()}>{plan}</option>)}
        </Select>
      </div>
      <div className="md:col-span-2"><label className="mb-1 block text-sm">Message</label><Textarea {...register("message")} />{errors.message && <p className="text-xs text-red-400">Please add details</p>}</div>
      <div className="md:col-span-2"><Button size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit Request"}</Button></div>
    </form>
  );
}

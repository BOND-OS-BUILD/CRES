"use client";

import { motion } from "framer-motion";
import { Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { ContactFormData, InquiryType } from "@/types";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const initialForm: ContactFormData = {
  inquiryType: "supplier",
  companyName: "",
  contactPerson: "",
  phone: "",
  email: "",
  city: "",
  monthlyUco: "",
  message: "",
};

const copyByType: Record<
  InquiryType,
  { heading: string; subtext: string; volumeLabel: string; volumePlaceholder: string; messagePlaceholder: string }
> = {
  supplier: {
    heading: "Become a Supplier Partner",
    subtext:
      "Tell us about your kitchen or facility and our collection team will reach out to set up a scheduled pickup.",
    volumeLabel: "Estimated Monthly UCO Available",
    volumePlaceholder: "e.g. 200 litres",
    messagePlaceholder: "Tell us about your kitchen operations...",
  },
  buyer: {
    heading: "Partner as a Buyer",
    subtext:
      "Tell us about your feedstock requirements and our team will get in touch to discuss a supply arrangement.",
    volumeLabel: "Estimated Monthly Requirement",
    volumePlaceholder: "e.g. 1000 litres",
    messagePlaceholder: "Tell us about your feedstock or offtake requirements...",
  },
};

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  return (
    <Suspense fallback={<ContactForm />}>
      <ContactFormWithParams />
    </Suspense>
  );
}

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return <ContactForm initialType={type === "buyer" ? "buyer" : "supplier"} />;
}

function ContactForm({ initialType = "supplier" }: { initialType?: InquiryType }) {
  const [form, setForm] = useState<ContactFormData>({ ...initialForm, inquiryType: initialType });
  const [status, setStatus] = useState<Status>("idle");

  const copy = copyByType[form.inquiryType];

  const update = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const setInquiryType = (inquiryType: InquiryType) => {
    setForm((prev) => ({ ...prev, inquiryType }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ ...initialForm, inquiryType: form.inquiryType });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-primary py-28 lg:py-36">
      <div className="section-container grid gap-16 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-3"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {copy.heading}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">{copy.subtext}</p>

          <div className="mt-8 inline-flex rounded-lg border border-white/15 p-1">
            {(["supplier", "buyer"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setInquiryType(type)}
                className={cn(
                  "rounded-md px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  form.inquiryType === type
                    ? "bg-accent text-white"
                    : "text-white/50 hover:text-white/80"
                )}
              >
                {type === "supplier" ? "I'm a Supplier" : "I'm a Buyer"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">Company Name *</Label>
              <Input
                required
                value={form.companyName}
                onChange={update("companyName")}
                placeholder="Green Fork Kitchens Pvt. Ltd."
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">Contact Person *</Label>
              <Input
                required
                value={form.contactPerson}
                onChange={update("contactPerson")}
                placeholder="Full name"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">Phone *</Label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">Email *</Label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">City</Label>
              <Input
                value={form.city}
                onChange={update("city")}
                placeholder="City"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white/50">{copy.volumeLabel}</Label>
              <Input
                value={form.monthlyUco}
                onChange={update("monthlyUco")}
                placeholder={copy.volumePlaceholder}
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-white/50">Message</Label>
              <Textarea
                value={form.message}
                onChange={update("message")}
                placeholder={copy.messagePlaceholder}
                className="border-white/15 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Submitting
                  </>
                ) : (
                  <>
                    <Send size={18} /> Submit
                  </>
                )}
              </Button>
              {status === "success" && (
                <p className="mt-4 text-sm font-medium text-accent">
                  Thank you. Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-2"
        >
          <div className="flex h-full flex-col gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-9">
            <ContactRow icon={Mail} label="Email" value={siteConfig.email} />
            <ContactRow icon={Phone} label="Phone" value={siteConfig.phone} />
            <ContactRow icon={MapPin} label="Location" value={siteConfig.location} />
            <ContactRow icon={Clock} label="Business Hours" value={siteConfig.hours} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-white/8 pb-6 last:border-0 last:pb-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon size={19} strokeWidth={1.7} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{label}</p>
        <p className="mt-1 text-base font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

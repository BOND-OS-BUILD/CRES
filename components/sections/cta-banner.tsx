"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-28 lg:py-32">
      <Image
        src="/images/partnership.jpg"
        alt="Industrial partnership"
        fill
        sizes="100vw"
        className="object-cover grayscale opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-container relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Partnership
          </span>
          <h2 className="max-w-lg text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build the Circular Economy Together
          </h2>
          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-white/60">
            Whether you run a kitchen that generates UCO or represent an
            industrial buyer, CRES builds the network that connects you.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-5">
          <Button variant="primary" size="lg" asChild>
            <Link href="/#contact">Become a Supplier</Link>
          </Button>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            Partner with CRES instead
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

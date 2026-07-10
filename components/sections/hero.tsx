"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center bg-primary pt-20 lg:h-screen lg:pt-0"
    >
      <div className="grid w-full lg:h-full lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:col-span-7 lg:px-16 lg:py-0 xl:col-span-6">
          <div className="absolute inset-0 grid-texture opacity-[0.07]" />

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 py-1.5 pl-3 pr-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            A Salgotra Industries Company
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative text-balance font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            Recovering
            <br />
            Resources.
            <br />
            <span className="text-accent">Creating Value.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="relative mt-7 max-w-lg text-balance text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Building efficient circular resource networks by collecting and
            supplying Used Cooking Oil (UCO) for biodiesel production, while
            laying the foundation for a sustainable circular economy across
            India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
            className="relative mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/#contact">Become a Supplier</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#solutions">Partner With CRES</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative mt-14 hidden items-center gap-2 text-white/40 lg:flex"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em]">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        <div className="relative h-[45vh] w-full sm:h-[55vh] lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Industrial resource recovery facility"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/10 to-transparent lg:from-primary lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(15,139,109,0.22),_transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}

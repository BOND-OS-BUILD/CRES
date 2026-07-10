"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { solutionFeatures } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Solutions() {
  return (
    <section id="solutions" className="bg-light-gray py-28 lg:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex flex-col gap-6 border-b border-primary/10 pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Current Solution
            </span>
            <h2 className="max-w-lg text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              What We Do
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-dark-gray lg:text-right">
            One flagship service today, built to scale into the buyer network
            behind every future vertical.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="overflow-hidden rounded-xl border border-primary/10 bg-white"
        >
          <div className="grid lg:grid-cols-5">
            <div className="relative flex flex-col justify-center overflow-hidden bg-primary p-10 lg:col-span-2 lg:p-14">
              <Image
                src="/images/uco-drums.jpg"
                alt="Stacked used cooking oil collection drums"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/45" />
              <div className="relative">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Flagship Service
                </span>
                <h3 className="mt-4 text-balance font-heading text-3xl font-bold text-white">
                  Used Cooking Oil Collection
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/65">
                  We partner with restaurants, hotels, cloud kitchens, food
                  manufacturers, and institutional kitchens to responsibly
                  collect used cooking oil and supply it to biodiesel
                  manufacturers.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-px bg-primary/8 sm:grid-cols-2 lg:col-span-3">
              {solutionFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3.5 bg-white px-8 py-6 transition-colors hover:bg-light-gray"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                  <span className="text-sm font-semibold text-primary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

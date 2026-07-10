"use client";

import { motion } from "framer-motion";

import { PhotoPanel } from "@/components/visuals/photo-panel";

const points = [
  "Prevents illegal reuse of used cooking oil in the food supply chain",
  "Supports certified biodiesel production with quality-checked feedstock",
  "Reduces industrial and municipal waste burden",
  "Strengthens sustainable, auditable supply chains",
  "Contributes measurable progress toward a circular economy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-light-gray py-28 lg:py-36">
      <div className="section-container grid gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-2 lg:order-1"
        >
          <PhotoPanel
            src="/images/storage-tanks.jpg"
            alt="Industrial storage and aggregation tanks"
            label="Storage & Aggregation Facility"
            className="aspect-[4/5] w-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-1 flex flex-col justify-center lg:order-2"
        >
          <span className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Sustainability
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Creating Value Through Circular Resources
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-dark-gray">
            Responsible UCO collection is engineering-driven sustainability,
            not marketing. Every litre we recover is tracked, tested and
            routed back into an industrial supply chain.
          </p>

          <ul className="mt-9 flex flex-col gap-4 border-l border-primary/10">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-4 pl-5">
                <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                <span className="text-base leading-relaxed text-primary/80">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

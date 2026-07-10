"use client";

import { motion } from "framer-motion";

import { industries } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Industries() {
  return (
    <section id="industries" className="bg-light-gray py-28 lg:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-xl"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Industries We Serve
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Trusted Across the Food & Industrial Chain
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="grid grid-cols-2 gap-x-8 border-t border-primary/10 sm:grid-cols-3 lg:grid-cols-4"
        >
          {industries.map((industry, i) => (
            <div
              key={industry}
              className="flex items-baseline gap-3 border-b border-primary/10 py-6"
            >
              <span className="font-mono text-xs font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-primary">{industry}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

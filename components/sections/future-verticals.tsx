"use client";

import { motion } from "framer-motion";

import { futureVerticals } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function FutureVerticals() {
  return (
    <section className="bg-primary py-28 lg:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-xl"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Future Verticals
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building Tomorrow&apos;s Circular Economy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            UCO is where we started, not where we stop. Each of these is a
            resource stream we are building the collection network for next.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-wrap gap-3"
        >
          {futureVerticals.map((vertical) => (
            <div
              key={vertical.title}
              className="flex items-center gap-3 rounded-full border border-white/12 py-3 pl-5 pr-4 text-white/55 transition-colors hover:border-white/25 hover:text-white/80"
            >
              <span className="text-sm font-medium">{vertical.title}</span>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-accent/80">
                Soon
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

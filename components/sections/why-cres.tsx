"use client";

import { motion } from "framer-motion";

import { whyCres } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function WhyCres() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why CRES
            </span>
            <h2 className="max-w-lg text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Engineered for Operational Trust
            </h2>
          </div>
        </motion.div>

        <div className="border-t border-primary/10">
          {whyCres.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group grid gap-2 border-b border-primary/10 py-9 transition-colors hover:bg-light-gray sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2"
            >
              <span className="font-mono text-4xl font-bold text-primary/10 sm:col-span-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-bold text-primary sm:col-span-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-dark-gray sm:col-span-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

import { PhotoPanel } from "@/components/visuals/photo-panel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 hidden select-none font-heading text-[13rem] font-extrabold leading-none text-primary/[0.035] lg:block"
      >
        CRES
      </span>

      <div className="section-container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <PhotoPanel
              src="/images/kitchen-uco.jpg"
              alt="Commercial kitchen preparing food"
              label="Commercial Kitchen Partner"
              className="aspect-[4/5] w-full lg:mt-20"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <span className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Who We Are
            </span>
            <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Building the Future of Resource Recovery
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-dark-gray">
              CRES is a Circular Economy company focused on transforming waste
              into valuable industrial resources through intelligent
              collection, aggregation, and supply chain management.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-dark-gray">
              We currently specialize in Used Cooking Oil (UCO) collection for
              biodiesel production and are building the foundation for future
              resource recovery businesses across India.
            </p>

            <div className="mt-10 grid gap-8 border-t border-primary/10 pt-9 sm:grid-cols-2">
              <div>
                <span className="font-mono text-sm font-bold tracking-wide text-accent">
                  01 / Mission
                </span>
                <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                  To build efficient and transparent resource recovery
                  networks that transform waste into valuable industrial
                  resources.
                </p>
              </div>
              <div>
                <span className="font-mono text-sm font-bold tracking-wide text-accent">
                  02 / Vision
                </span>
                <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                  To become India&apos;s most trusted Circular Economy
                  company.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

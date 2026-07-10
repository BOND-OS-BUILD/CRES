"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker, Factory, UtensilsCrossed, Warehouse } from "lucide-react";
import Image from "next/image";

import { processSteps } from "@/lib/site-config";

const icons = [UtensilsCrossed, null, Warehouse, Factory, Beaker];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Process() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How It Works
          </span>
          <h2 className="text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            From Kitchen to Renewable Fuel
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
          <div className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] bg-primary/10 lg:block" />

          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex flex-1 flex-col items-start gap-5 lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/10 bg-white text-accent shadow-[0_2px_20px_rgba(17,17,17,0.06)]">
                  {Icon ? (
                    <Icon size={26} strokeWidth={1.6} />
                  ) : (
                    <Image
                      src="/images/logistics-truck.jpg"
                      alt="CRES collection tanker truck"
                      fill
                      sizes="64px"
                      className="object-cover grayscale"
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-dark-gray">
                    {step.description}
                  </p>
                </div>

                {i < processSteps.length - 1 && (
                  <ArrowRight
                    className="mt-1 hidden shrink-0 text-primary/20 lg:absolute lg:right-[-2.1rem] lg:top-4 lg:mt-0 lg:block"
                    size={22}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white pb-28 pt-40 lg:pt-48">
        <div className="section-container max-w-3xl">
          <span className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Legal
          </span>
          <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-dark-gray">Last updated: {updated}</p>

          <div className="mt-12 flex flex-col gap-9">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

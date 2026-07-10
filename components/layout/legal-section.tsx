import type { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold tracking-tight text-primary">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-dark-gray">
        {children}
      </div>
    </section>
  );
}

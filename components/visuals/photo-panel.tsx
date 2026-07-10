"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface PhotoPanelProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
}

export function PhotoPanel({
  src,
  alt,
  label,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: PhotoPanelProps) {
  return (
    <div className={cn("relative isolate overflow-hidden rounded-xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover grayscale contrast-110 transition-all duration-700 hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {label && (
        <span className="absolute bottom-6 left-6 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}

import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtext?: boolean;
}

export function Logo({ variant = "dark", className, showSubtext = false }: LogoProps) {
  const subColor = variant === "dark" ? "text-dark-gray" : "text-white/60";
  const src =
    variant === "dark"
      ? "/images/logo-wordmark-transparent.png"
      : "/images/logo-wordmark-white.png";

  return (
    <div className={cn("flex w-fit flex-col leading-none", className)}>
      <div className="relative h-8 w-[71px] shrink-0 sm:h-9 sm:w-[80px]">
        <Image src={src} alt="CRES" fill priority sizes="80px" className="object-contain" />
      </div>
      {showSubtext && (
        <span
          className={cn(
            "mt-2 text-[10px] font-medium tracking-[0.18em] uppercase",
            subColor
          )}
        >
          A Salgotra Industries Company
        </span>
      )}
    </div>
  );
}

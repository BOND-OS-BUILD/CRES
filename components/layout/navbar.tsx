"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isDarkHeroPage = pathname === "/";

  const [scrolled, setScrolled] = useState(!isDarkHeroPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isDarkHeroPage) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDarkHeroPage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-primary/8 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(17,17,17,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <Link href="/#home" aria-label="CRES home">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                solid ? "text-primary/70 hover:text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant={solid ? "primary" : "outline"} size="sm" asChild>
            <Link href="/#contact">Become a Supplier</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className={cn(
            "flex h-10 w-10 items-center justify-center lg:hidden",
            solid ? "text-primary" : "text-white"
          )}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-primary/8 py-4 text-base font-medium text-primary/85"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-6 w-full" asChild>
                <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                  Become a Supplier
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

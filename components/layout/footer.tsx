import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="section-container grid gap-14 py-20 lg:grid-cols-4 lg:gap-8 lg:py-24">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-lg font-medium leading-snug text-white/60">
            Recovering Resources.
            <br />
            Creating Value.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Quick Links
          </h4>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Legal
          </h4>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="section-container flex flex-col gap-2 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.parentCompany}</p>
          <p>{siteConfig.name} is a business division of {siteConfig.parentCompany}</p>
        </div>
      </div>
    </footer>
  );
}

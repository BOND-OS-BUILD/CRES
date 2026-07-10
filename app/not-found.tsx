import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary px-6 py-32 text-center">
        <div className="absolute inset-0 grid-texture opacity-[0.06]" />
        <span className="relative font-mono text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Error 404
        </span>
        <h1 className="relative mt-5 font-heading text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
          Page Not Found
        </h1>
        <p className="relative mt-5 max-w-md text-balance text-base leading-relaxed text-white/60">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="relative mt-9">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

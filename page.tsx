import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Solutions } from "@/components/sections/solutions";
import { FutureVerticals } from "@/components/sections/future-verticals";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { WhyCres } from "@/components/sections/why-cres";
import { Sustainability } from "@/components/sections/sustainability";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <FutureVerticals />
        <Process />
        <Industries />
        <WhyCres />
        <Sustainability />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

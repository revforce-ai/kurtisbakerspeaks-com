import { Nav } from "@/app/components/Nav";
import { Hero } from "@/app/components/Hero";
import { Problem } from "@/app/components/Problem";
import { Framework } from "@/app/components/Framework";
import { Audience } from "@/app/components/Audience";
import { About } from "@/app/components/About";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Framework />
        <Audience />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

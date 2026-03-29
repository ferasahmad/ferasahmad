import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Analytics />
      <div className="lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory lg:overscroll-contain lg:scroll-smooth">
        <section className="lg:snap-start lg:snap-always">
          <Hero />
        </section>
        <section className="lg:snap-start lg:snap-always">
          <About />
        </section>
        <section className="lg:snap-start lg:snap-always">
          <Experience />
        </section>
        <section className="lg:snap-start lg:snap-always">
          <Contact />
        </section>
      </div>
    </>
  );
}

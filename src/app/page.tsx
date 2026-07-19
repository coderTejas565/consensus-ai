import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import {
  Hero,
  AIModelStrip,
  HowItWorks,
  Features,
  Comparison,
  CTA,
} from "@/components/landing";

export default function HomePage() {
  return (
      <>
  <section className="section-light section-transition">
    <Navbar />
    <Hero />
    <AIModelStrip />
  </section>


  <section className="section-warm section-transition">
    <HowItWorks />
  </section>


  <section className="section-light section-transition">
    <Features />
  </section>


  <section className="section-warm section-transition">
    <Comparison />
  </section>


  <section className="section-light section-transition">
    <CTA />
  </section>


  <section className="section-warm section-transition">
    <Footer />
  </section>

</>
  );
}
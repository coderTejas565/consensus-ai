"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";

import { HeroDemo } from "./hero-demo";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-6 md:pt-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl space-y-7"
        >
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background/60 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-xl">
            Multiple AI perspectives
          </div>

          <h1 className="text-balance font-heading text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-[84px]">
            Stop choosing between AI.{" "}
            <span className="text-primary">Get one trusted answer.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-foreground/60 md:text-xl">
            Consensus AI asks multiple AI experts, compares their
            perspectives, and combines them into one refined answer you can
            trust.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/consensus"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Try Consensus AI
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="https://github.com/your-org/consensus-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/50 bg-background/60 px-6 py-3.5 font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <SiGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
          </div>
        </motion.div>

        {/* Demo */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <HeroDemo />
        </motion.div>
      </div>
    </section>
  );
}
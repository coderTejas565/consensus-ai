"use client";

import { BrainCircuit, GitMerge } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EXPERTS = [
  { label: "OpenAI", answer: "Favor modular services with clear boundaries." },
  { label: "Claude", answer: "Separate providers, logic, and evaluation layers." },
  { label: "Gemini", answer: "Keep the architecture flexible and swappable." },
];

export function HeroDemo() {
  const reduceMotion = useReducedMotion();

  const cardMotion = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.5, ease: "easeOut" as const },
        };

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Question */}
      <motion.div
        {...cardMotion(0)}
        className="
  rounded-3xl
  border
  border-border/50
  bg-card/70
  px-8
  py-6
  text-center
  text-lg
  font-semibold
  tracking-tight
  text-foreground
  shadow-lg
  shadow-black/5
  backdrop-blur-xl
"
      >
        What&apos;s the best architecture for an AI app?
      </motion.div>

      {/* Connector: question → experts */}
      <svg className="mx-auto block h-12 w-px overflow-visible" aria-hidden="true">
        <motion.line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="32"
          className="stroke-border"
          strokeWidth="1.5"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        />
      </svg>

      {/* Expert cards */}
      <div className="grid grid-cols-3 gap-3">
        {EXPERTS.map((expert, i) => (
          <motion.div
            key={expert.label}
            {...cardMotion(0.6 + i * 0.15)}
            className="
  rounded-3xl
  border
  border-border/50
  bg-card/70
  p-5
  shadow-md
  shadow-black/5
  backdrop-blur-xl
"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <BrainCircuit className="h-4 w-4" aria-hidden="true" />
            </div>
            <p
              className="
  font-heading
  text-sm
  font-semibold
  tracking-tight
"
            >
              {expert.label}
            </p>
            <p
              className="
  mt-2
  text-xs
  leading-relaxed
  text-muted-foreground
"
            >
              {expert.answer}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Connector: experts → consensus (fan-in) */}
      <svg
        viewBox="0 0 300 56"
        preserveAspectRatio="none"
        className="mx-auto block h-14 w-full"
        aria-hidden="true"
      >
        {[50, 150, 250].map((x, i) => (
          <motion.path
            key={x}
            d={`M ${x} 0 L 150 56`}
            className="stroke-border"
            strokeWidth="1.5"
            fill="none"
            initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.15 + i * 0.1, duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Consensus answer */}
      <motion.div
        {...cardMotion(1.5)}
        className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/70 shadow-xl shadow-black/5 backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />

        <div className="relative flex items-center gap-3 border-b border-border/40 px-7 py-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <GitMerge className="h-4 w-4" aria-hidden="true" />
          </div>
          <p className="font-heading text-xl font-semibold tracking-tight">Consensus answer</p>
        </div>

        <div className="relative px-5 py-4">
          <p className="text-base leading-relaxed text-foreground/80">
            A reliable AI system separates model providers, business logic, and evaluation layers
            while keeping the architecture flexible.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

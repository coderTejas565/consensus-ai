"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      className="
        px-4
        py-18
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          bg-[#034F46]
          p-10
          text-center
          shadow-2xl
          shadow-black/10
          md:p-20
        "
      >
        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        {/* Moving glass reflection */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            w-40
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            blur-xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-3xl
          "
        >
          <h2
            className="
              font-heading
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#FFFFEB]
              md:text-6xl
            "
          >
            Ready to compare AI instead of choosing one?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-[#FFFFEB]/70
              md:text-xl
            "
          >
            Ask one question, explore multiple AI perspectives, and get one refined answer.
          </p>

          <div
            className="
              mt-10
              flex
              justify-center
            "
          >
            <Link
              href="/consensus"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-[#FFFFEB]
                px-8
                py-4
                font-semibold
                text-[#034F46]
                shadow-xl
                shadow-black/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Try Consensus AI
              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { MessageSquare, Brain, GitMerge } from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    title: "Ask",
    description: "Submit one question and let Consensus AI understand what you need.",
  },
  {
    icon: Brain,
    title: "Experts Think",
    description:
      "Multiple AI models analyze your question independently and provide their perspectives.",
  },
  {
    icon: GitMerge,
    title: "Consensus",
    description: "An evaluation layer combines the responses into one refined and reliable answer.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="
        px-4
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <h2
            className="
              font-heading
              text-4xl
              font-bold
              tracking-tight
            "
          >
            How Consensus AI works
          </h2>

          <p
            className="
              mt-4
              text-lg
              leading-relaxed
              text-foreground/60
            "
          >
            One question goes through multiple AI perspectives before becoming a single trusted
            answer.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}

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
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}

                whileHover={{
                  y: -6,
                }}

                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-border/50
                  bg-[#FFFFEB]
                  p-8
                  shadow-lg
                  shadow-black/5
                  transition-shadow
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-sm
                    font-semibold
                    text-[#034F46]/30
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#034F46]
                    text-[#FFFFEB]
                    shadow-lg
                    shadow-black/10
                  "
                >
                  <Icon
                    className="
                      h-6
                      w-6
                    "
                  />
                </motion.div>

                {/* Content */}
                <div
                  className="
                    mt-8
                    space-y-3
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-2xl
                      font-bold
                      text-[#034F46]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-base
                      leading-relaxed
                      text-[#034F46]/70
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

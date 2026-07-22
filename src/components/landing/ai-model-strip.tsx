"use client";

import { motion } from "framer-motion";

export function AIModelStrip() {
  const models = ["OpenAI", "Claude", "Gemini", "Future Models"];

  return (
    <section
      className="
        px-4
        py-4
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
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
            ease: "easeOut",
          }}
          className="
            relative
            flex
            flex-col
            items-center
            gap-8
            overflow-hidden
            rounded-3xl
            border
            border-border/50
            bg-card/40
            p-8
            shadow-lg
            shadow-black/5
            backdrop-blur-xl
            md:flex-row
            md:justify-between
          "
        >
          {/* Glass reflection */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-20
              bg-gradient-to-b
              from-white/10
              to-transparent
            "
          />

          {/* Label */}
          <div
            className="
              relative
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-primary
                shadow-lg
                shadow-primary/40
              "
            />

            <p
              className="
                text-sm
                font-medium
                text-muted-foreground
              "
            >
              Powered by multiple AI models
            </p>
          </div>

          {/* Models */}
          <div
            className="
              relative
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {models.map((model, index) => (
              <motion.div
                key={model}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  rounded-full
                  border
                  border-border/50
                  bg-background/70
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-foreground
                  shadow-sm
                  backdrop-blur
                  transition
                  hover:shadow-md
                "
              >
                {model}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

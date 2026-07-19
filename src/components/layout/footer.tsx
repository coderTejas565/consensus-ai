"use client";

import Link from "next/link";
import { GitMerge } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";


export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-18">

      <motion.div
        initial={{
          opacity:0,
          y:30,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:0.7,
          ease:"easeOut",
        }}
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          border
          border-border/50
          bg-card/60
          p-8
          shadow-xl
          shadow-black/5
          backdrop-blur-xl
          md:p-10
        "
      >

        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >


          {/* Brand */}

          <div className="space-y-5">

            <Link
              href="/"
              className="
                group
                flex
                items-center
                gap-4
              "
            >

              <motion.div
                whileHover={{
                  rotate:8,
                  y:-2,
                }}
                transition={{
                  duration:0.3,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary
                  text-primary-foreground
                  shadow-lg
                  shadow-primary/20
                "
              >

                <GitMerge
                  className="
                    h-5
                    w-5
                  "
                />

              </motion.div>



              <div>

                <h2
                  className="
                    font-heading
                    text-xl
                    font-bold
                    tracking-tight
                  "
                >
                  Consensus AI
                </h2>


                <p
                  className="
                    text-sm
                    text-muted-foreground
                  "
                >
                  Multiple AI perspectives
                </p>

              </div>


            </Link>



            <p
              className="
                max-w-sm
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              One question. Multiple AI experts.
              One refined answer.
            </p>

          </div>




          {/* Right */}

          <div
            className="
              flex
              flex-col
              gap-7
              sm:flex-row
              sm:items-center
            "
          >


            {/* Stack */}

            <div className="space-y-3">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-muted-foreground
                "
              >
                Built With
              </p>


              <div className="
                flex
                flex-wrap
                gap-2
              ">

                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "AI SDK",
                ].map((item)=>(
                  <motion.span
                    key={item}
                    whileHover={{
                      y:-2,
                    }}
                    className="
                      rounded-full
                      border
                      border-border/50
                      bg-background/60
                      px-4
                      py-1.5
                      text-xs
                      font-medium
                      backdrop-blur
                    "
                  >
                    {item}
                  </motion.span>
                ))}

              </div>

            </div>





            {/* Github */}

            <motion.div
              whileHover={{
                y:-3,
              }}
            >

              <Link
                href="https://github.com/coderTejas565/consensus-ai.git"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-border/50
                  bg-background/60
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition
                  hover:shadow-lg
                "
              >

                <SiGithub className="h-4 w-4" />

                GitHub

              </Link>

            </motion.div>


          </div>

        </div>





        {/* Bottom */}

        <div
          className="
            mt-10
            border-t
            border-border/50
            pt-6
            text-sm
            text-muted-foreground
          "
        >
          © {new Date().getFullYear()} Consensus AI.
          Built with curiosity and AI.
        </div>


      </motion.div>

    </footer>
  );
}
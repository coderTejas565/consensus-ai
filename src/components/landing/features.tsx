"use client";

import {
  Users,
  Eye,
  Layers,
  Zap,
  Sparkles,
  Plug,
} from "lucide-react";

import { motion } from "framer-motion";


const features = [
  {
    icon: Users,
    title: "Multiple AI Experts",
    description:
      "Query multiple AI models simultaneously to explore different perspectives.",
  },
  {
    icon: Eye,
    title: "Transparent Reasoning",
    description:
      "See individual expert responses before they are combined into a final answer.",
  },
  {
    icon: Layers,
    title: "Consensus Engine",
    description:
      "An evaluation layer analyzes responses and creates one refined answer.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Parallel execution allows multiple AI opinions without unnecessary delays.",
  },
  {
    icon: Sparkles,
    title: "Minimal Interface",
    description:
      "A focused experience designed around asking questions and getting clarity.",
  },
  {
    icon: Plug,
    title: "Future Ready",
    description:
      "Easily extend the system with new models and AI providers.",
  },
];


export function Features() {
  return (
    <section
      className="
        px-4
        py-18
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
            opacity:0,
            y:20
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.6
          }}
          className="max-w-2xl"
        >

          <h2
            className="
              font-heading
              text-5xl
              font-bold
              tracking-tight
              text-[#034F46]
            "
          >
            Built for better AI decisions
          </h2>


          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-[#034F46]/60
            "
          >
            Combine multiple perspectives, compare reasoning,
            and move from uncertainty to confidence.
          </p>

        </motion.div>



        {/* Cards */}
        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {features.map((feature,index)=>{

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true,
                  margin:"-100px"
                }}

                transition={{
                  delay:index*0.08,
                  duration:0.5,
                  ease:"easeOut"
                }}

                whileHover={{
                  y:-6
                }}

                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#034F46]/10
                  bg-[#FFFFEB]
                  p-8
                  shadow-lg
                  shadow-black/5
                  transition
                  duration-300
                  hover:shadow-xl
                "
              >


                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-[#034F46]/5
                    via-transparent
                    to-transparent
                  "
                />



                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate:5,
                    scale:1.05
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#034F46]
                    text-[#FFFFEB]
                    shadow-lg
                    shadow-[#034F46]/20
                  "
                >

                  <Icon className="h-5 w-5"/>

                </motion.div>




                {/* Content */}

                <div
                  className="
                    relative
                    mt-7
                    space-y-3
                  "
                >

                  <h3
                    className="
                      font-heading
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-[#034F46]
                    "
                  >
                    {feature.title}
                  </h3>


                  <p
                    className="
                      text-base
                      leading-relaxed
                      text-[#034F46]/65
                    "
                  >
                    {feature.description}
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
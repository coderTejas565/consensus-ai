"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const withoutConsensus = [
  "GPT says one thing",
  "Claude says another",
  "Gemini gives a different view",
  "Hard to know which answer to trust",
];

const withConsensus = [
  "Multiple AI perspectives",
  "Compare different reasoning paths",
  "One refined final answer",
  "Higher confidence in decisions",
];


export function Comparison() {
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
            y:20,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:0.6,
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
              md:text-5xl
            "
          >
            Stop choosing between AI answers
          </h2>


          <p
            className="
              mt-4
              text-lg
              leading-relaxed
              text-foreground/60
            "
          >
            Compare multiple perspectives and get
            a clearer answer from one place.
          </p>

        </motion.div>



        {/* Cards */}
        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >


          {/* Without */}
          <ComparisonCard
            title="Without Consensus"
            description="Multiple answers. No clear direction."
            items={withoutConsensus}
            type="negative"
          />


          {/* With */}
          <ComparisonCard
            title="With Consensus"
            description="Multiple experts. One refined answer."
            items={withConsensus}
            type="positive"
          />

        </div>

      </div>
    </section>
  );
}



function ComparisonCard({
  title,
  description,
  items,
  type,
}: {
  title:string;
  description:string;
  items:string[];
  type:"positive"|"negative";
}) {

  const positive = type === "positive";


  return (
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
        duration:0.6,
      }}
      whileHover={{
        y:-4,
      }}
      className={`
        rounded-3xl
        p-10
        transition
        duration-300
        ${
          positive
          ?
          `
          bg-[#034F46]
          text-[#FFFFEB]
          shadow-xl
          shadow-black/10
          `
          :
          `
          border
          border-border/50
          bg-[#FFFFEB]
          text-[#034F46]
          shadow-lg
          shadow-black/5
          `
        }
      `}
    >

      <h3
        className="
          font-heading
          text-3xl
          font-bold
        "
      >
        {title}
      </h3>


      <p
        className={`
          mt-3
          ${
            positive
            ?
            "text-[#FFFFEB]/70"
            :
            "text-[#034F46]/70"
          }
        `}
      >
        {description}
      </p>



      <div className="mt-8 space-y-5">

        {items.map((item,index)=>(
          <motion.div
            key={item}
            initial={{
              opacity:0,
              x:-10,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              delay:index * 0.08,
            }}
            className="
              flex
              items-start
              gap-3
            "
          >

            <div
              className={`
                mt-0.5
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                ${
                  positive
                  ?
                  "bg-[#FFFFEB]/10"
                  :
                  "bg-[#034F46]/10"
                }
              `}
            >

              {positive ? (
                <Check className="h-3.5 w-3.5"/>
              ) : (
                <X className="h-3.5 w-3.5 text-[#034F46]"/>
              )}

            </div>


            <p
              className={`
                text-base
                leading-relaxed
                ${
                  positive
                  ?
                  "text-[#FFFFEB]/90"
                  :
                  "text-[#034F46]/80"
                }
              `}
            >
              {item}
            </p>

          </motion.div>
        ))}

      </div>

    </motion.div>
  );
}
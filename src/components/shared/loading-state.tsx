import {
  Brain,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";


const steps = [
  "Analyzing expert perspectives",
  "Comparing reasoning patterns",
  "Synthesizing final answer",
];


export function LoadingState() {

  return (

    <div
      className="
        space-y-6
        rounded-3xl
        border
        bg-card
        p-6
        shadow-sm
      "
    >

      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-primary
            text-primary-foreground
          "
        >

          <Brain
            className="
              h-5
              w-5
            "
          />

        </div>


        <div>

          <p
            className="
              font-semibold
            "
          >
            Building consensus
          </p>


          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            Multiple AI perspectives are being analyzed
          </p>

        </div>


      </div>



      {/* Processing steps */}

      <div
        className="
          space-y-3
        "
      >

        {
          steps.map(
            (step, index) => (

              <div
                key={step}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                  "
                >

                  {
                    index === 2 ? (

                      <Sparkles
                        className="
                          h-4
                          w-4
                          text-primary
                        "
                      />

                    ) : (

                      <CheckCircle2
                        className="
                          h-4
                          w-4
                          text-muted-foreground
                        "
                      />

                    )
                  }

                </div>


                <span
                  className="
                    text-sm
                  "
                >
                  {step}
                </span>


              </div>

            )
          )
        }


      </div>




      {/* Answer preview */}

      <div
        className="
          space-y-3
          rounded-xl
          bg-secondary/30
          p-4
        "
      >

        <Skeleton
          className="
            h-4
            w-full
          "
        />

        <Skeleton
          className="
            h-4
            w-full
          "
        />

        <Skeleton
          className="
            h-4
            w-3/4
          "
        />


      </div>




      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          text-muted-foreground
        "
      >

        <Sparkles
          className="
            h-3.5
            w-3.5
          "
        />

        Creating the final consensus response

      </div>


    </div>

  );
}
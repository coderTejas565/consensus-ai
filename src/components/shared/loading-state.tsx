import { BrainCircuit, LoaderCircle, GitMerge } from "lucide-react";

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
        space-y-8
        rounded-3xl
        border
        bg-card
        p-6
        shadow-sm
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
            text-primary
          "
        >
          <BrainCircuit className="h-6 w-6 animate-pulse" />
        </div>

        <div>
          <h3
            className="
              font-heading
              text-lg
              font-semibold
              tracking-tight
            "
          >
            Building consensus
          </h3>

          <p
            className="
              mt-1
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            Multiple AI experts are reasoning independently before producing one refined answer.
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-background
                "
              >
                <LoaderCircle
                  className="
                    h-4
                    w-4
                    animate-spin
                    text-primary
                  "
                />
              </div>

              {index !== steps.length - 1 && (
                <div
                  className="
                    mt-2
                    h-6
                    w-px
                    bg-border
                  "
                />
              )}
            </div>

            <div className="pt-1">
              <p
                className="
                  text-sm
                  font-medium
                  tracking-tight
                "
              >
                {step}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-muted-foreground
                "
              >
                In progress...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Answer Preview */}

      <div
        className="
          space-y-3
          rounded-2xl
          border
          bg-background
          p-5
        "
      >
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Footer */}

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          leading-5
          text-muted-foreground
        "
      >
        <GitMerge className="h-3.5 w-3.5 text-primary" />

        <span className="font-medium">Crafting your consensus answer...</span>
      </div>
    </div>
  );
}

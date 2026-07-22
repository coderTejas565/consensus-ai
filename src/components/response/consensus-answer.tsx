import { GitMerge } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConsensusAnswerProps {
  answer: string;
}

export function ConsensusAnswer({ answer }: ConsensusAnswerProps) {
  return (
    <Card
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border/50
        bg-card/70
        shadow-xl
        shadow-black/5
        backdrop-blur-xl
      "
    >
      <CardHeader
        className="
          relative
          overflow-hidden
          px-7
          py-7
        "
      >
        {/* subtle divider */}

        <div
          className="
            absolute
            bottom-0
            left-7
            right-7
            h-px
            bg-border
          "
        />

        {/* subtle gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-primary/[0.05]
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        <div className="relative flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              text-primary
              ring-1
              ring-primary/15
            "
          >
            <GitMerge className="h-5 w-5" />
          </div>

          <div>
            <CardTitle
              className="
                font-heading
                text-2xl
                font-semibold
                tracking-tight
              "
            >
              Consensus Answer
            </CardTitle>

            <p
              className="
                mt-1
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              One refined answer synthesized from multiple AI perspectives.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent
        className="
          px-7
          py-8
        "
      >
        <div
          className="
            prose
            prose-neutral
            dark:prose-invert
            max-w-none
            text-lg
            leading-9
            tracking-tight
          "
        >
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      </CardContent>
    </Card>
  );
}

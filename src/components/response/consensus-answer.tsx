import { GitMerge } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MarkdownRenderer } from "@/components/shared/markdown-renderer";


interface ConsensusAnswerProps {
  answer: string;
}


export function ConsensusAnswer({
  answer,
}: ConsensusAnswerProps) {

  return (
    <Card
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border/50
        bg-card/80
        shadow-xl
        shadow-black/5
        backdrop-blur-xl
      "
    >

      <CardHeader
        className="
          relative
          px-7
          py-7
        "
      >

        <div
          className="
            absolute
            inset-x-7
            bottom-0
            h-px
            bg-border
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-primary/[0.06]
            via-transparent
            pointer-events-none
          "
        />


        <div
          className="
            relative
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
              rounded-2xl
              bg-primary/10
              text-primary
              ring-1
              ring-primary/20
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

        <MarkdownRenderer
          content={answer}
        />

      </CardContent>


    </Card>
  );
}
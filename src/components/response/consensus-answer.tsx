import { Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface ConsensusAnswerProps {
  answer: string;
}


export function ConsensusAnswer({
  answer,
}: ConsensusAnswerProps) {

  return (
    <Card
      className="
        border-primary/20
        bg-card
        shadow-sm
      "
    >

      <CardHeader
        className="
          border-b
          bg-secondary/30
        "
      >

        <div className="flex items-center gap-2">

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-primary
              text-primary-foreground
            "
          >
            <Sparkles className="h-4 w-4" />
          </div>


          <div>

            <CardTitle className="text-lg">
              Consensus Answer
            </CardTitle>


            <p className="text-sm text-muted-foreground">
              Synthesized from multiple AI perspectives
            </p>

          </div>

        </div>

      </CardHeader>


      <CardContent
        className="
          pt-6
        "
      >

        <p
          className="
            whitespace-pre-wrap
            text-base
            leading-8
            text-foreground
          "
        >
          {answer}
        </p>

      </CardContent>

    </Card>
  );
}
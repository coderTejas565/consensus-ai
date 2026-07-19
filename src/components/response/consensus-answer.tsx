import { Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


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
        border-primary/20
        bg-card
        shadow-sm
      "
    >

      <CardHeader
        className="
          border-b
          bg-secondary/20
          px-6
          py-5
        "
      >

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-primary
                text-primary-foreground
              "
            >

              <Sparkles
                className="
                  h-5
                  w-5
                "
              />

            </div>


            <div>

              <CardTitle
                className="
                  text-xl
                  font-semibold
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
                Synthesized from multiple AI perspectives
              </p>

            </div>

          </div>


          <Badge
            variant="secondary"
            className="
              hidden
              sm:flex
            "
          >
            Final synthesis
          </Badge>


        </div>

      </CardHeader>



      <CardContent
        className="
          px-6
          py-7
        "
      >

        <p
          className="
            whitespace-pre-wrap
            text-[15px]
            leading-8
            tracking-wide
          "
        >
          {answer}
        </p>


      </CardContent>


    </Card>
  );
}
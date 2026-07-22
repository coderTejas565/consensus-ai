"use client";

import { useState } from "react";
import {
  BrainCircuit,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import type { ExpertResponse } from "@/types/ai";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MarkdownRenderer } from "@/components/shared/markdown-renderer";


interface ExpertResponsesProps {
  responses: ExpertResponse[];
}


function formatRole(role: string) {
  return role
    .replace("expert", "Expert ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}



export function ExpertResponses({
  responses,
}: ExpertResponsesProps) {

  const [open, setOpen] = useState(false);


  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="space-y-5"
    >


      {/* Trigger */}

      <CollapsibleTrigger
        className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-3xl
          border
          border-border/50
          bg-card/60
          px-7
          py-6
          text-left
          shadow-md
          shadow-black/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-primary/30
          hover:bg-card/80
        "
      >

        <div className="flex items-center gap-4">

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
            <BrainCircuit className="h-5 w-5" />
          </div>


          <div>

            <h3
              className="
                font-heading
                text-xl
                font-semibold
                tracking-tight
              "
            >
              Expert Perspectives
            </h3>


            <p
              className="
                mt-1
                text-sm
                text-muted-foreground
              "
            >
              Explore individual AI reasoning before synthesis.
            </p>


          </div>

        </div>



        <div
          className="
            rounded-xl
            border
            border-border/50
            bg-background/60
            p-2
            transition
          "
        >

          {
            open
            ? (
              <ChevronUp
                className="
                  h-5
                  w-5
                  text-muted-foreground
                "
              />
            )
            : (
              <ChevronDown
                className="
                  h-5
                  w-5
                  text-muted-foreground
                "
              />
            )
          }

        </div>


      </CollapsibleTrigger>




      <CollapsibleContent
        className="
          space-y-5
        "
      >

        {
          responses.map(
            (response,index)=>(
              
              <Card
                key={response.role}
                className="
                  rounded-3xl
                  border
                  border-border/50
                  bg-card/50
                  shadow-sm
                  backdrop-blur-xl
                  transition
                  hover:border-primary/20
                "
              >


                <CardHeader
                  className="
                    flex-row
                    items-center
                    justify-between
                    border-b
                    border-border/40
                    px-7
                    py-5
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-xl
                        bg-primary/10
                        text-sm
                        font-semibold
                        text-primary
                      "
                    >
                      {index + 1}
                    </div>


                    <CardTitle
                      className="
                        font-heading
                        text-lg
                        font-semibold
                        tracking-tight
                      "
                    >
                      {formatRole(response.role)}
                    </CardTitle>

                  </div>


                  <span
                    className="
                      rounded-full
                      border
                      border-border/50
                      bg-background/60
                      px-3
                      py-1
                      text-xs
                      text-muted-foreground
                    "
                  >
                    AI Perspective
                  </span>


                </CardHeader>



                <CardContent
                  className="
                    px-7
                    py-6
                  "
                >

                  <div
                    className="
                      text-sm
                      leading-8
                      text-muted-foreground
                    "
                  >

                    <MarkdownRenderer
                      content={response.answer}
                    />

                  </div>


                </CardContent>


              </Card>

            )
          )
        }


      </CollapsibleContent>


    </Collapsible>
  );
}
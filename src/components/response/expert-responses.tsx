"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Brain,
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

import { Badge } from "@/components/ui/badge";


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


      <CollapsibleTrigger
        className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          bg-card
          px-6
          py-5
          text-left
          transition
          hover:bg-secondary/30
        "
      >

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
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-secondary
            "
          >

            <Brain
              className="
                h-5
                w-5
                text-primary
              "
            />

          </div>


          <div>

            <p
              className="
                font-medium
              "
            >
              Expert Perspectives
            </p>


            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              Compare individual AI reasoning paths
            </p>


          </div>


        </div>



        {
          open ? (

            <ChevronUp
              className="
                h-5
                w-5
                text-muted-foreground
              "
            />

          ) : (

            <ChevronDown
              className="
                h-5
                w-5
                text-muted-foreground
              "
            />

          )
        }


      </CollapsibleTrigger>



      <CollapsibleContent
        className="
          space-y-4
        "
      >

        {
          responses.map(
            (response, index) => (

              <Card
                key={response.role}
                className="
                  border
                  bg-card/70
                  shadow-none
                "
              >

                <CardHeader
                  className="
                    flex-row
                    items-center
                    justify-between
                    space-y-0
                    pb-3
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
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-secondary
                        text-xs
                        font-medium
                      "
                    >
                      {index + 1}
                    </div>


                    <CardTitle
                      className="
                        text-sm
                        font-medium
                      "
                    >
                      {formatRole(response.role)}
                    </CardTitle>


                  </div>



                  <Badge
                    variant="secondary"
                    className="
                      text-xs
                    "
                  >
                    Perspective
                  </Badge>


                </CardHeader>



                <CardContent>

                  <p
                    className="
                      whitespace-pre-wrap
                      text-sm
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {response.answer}
                  </p>


                </CardContent>


              </Card>

            )
          )
        }


      </CollapsibleContent>


    </Collapsible>

  );
}
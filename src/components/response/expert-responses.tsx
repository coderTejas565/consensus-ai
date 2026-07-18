"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Brain } from "lucide-react";

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
          rounded-xl
          border
          bg-card
          px-5
          py-4
          text-sm
          font-medium
          transition
          hover:bg-secondary/40
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
              rounded-full
              bg-secondary
            "
          >
            <Brain className="h-4 w-4 text-primary" />
          </div>


          <div className="text-left">

            <p>
              Expert Perspectives
            </p>

            <p className="text-xs text-muted-foreground">
              View individual AI responses
            </p>

          </div>

        </div>


        {open
          ? (
            <ChevronUp className="h-4 w-4" />
          )
          : (
            <ChevronDown className="h-4 w-4" />
          )}

      </CollapsibleTrigger>



      <CollapsibleContent
        className="
          space-y-4
        "
      >

        {responses.map((response) => (

          <Card
            key={response.role}
            className="
              border-dashed
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

              <CardTitle
                className="
                  text-sm
                  font-medium
                "
              >
                {formatRole(response.role)}
              </CardTitle>


              <Badge
                variant="secondary"
              >
                AI Model
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

        ))}

      </CollapsibleContent>

    </Collapsible>
  );
}
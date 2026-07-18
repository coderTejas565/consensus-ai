"use client";

import { useState } from "react";

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

import { Button } from "@/components/ui/button";


interface ExpertResponsesProps {
  responses: ExpertResponse[];
}


export function ExpertResponses({
  responses,
}: ExpertResponsesProps) {

  const [open, setOpen] = useState(false);


  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="space-y-4"
    >

      <CollapsibleTrigger className="rounded-md border px-4 py-2 text-sm">
  {open
    ? "▲ Hide Expert Responses"
    : "▼ View Expert Responses"}
</CollapsibleTrigger>


      <CollapsibleContent className="space-y-4">

        {responses.map((response) => (

          <Card
            key={response.role}
          >

            <CardHeader>
              <div className="flex items-center justify-between">

                <CardTitle className="text-base">
                  {response.role}
                </CardTitle>

                <Badge>
                  Expert
                </Badge>

              </div>
            </CardHeader>


            <CardContent>

              <p className="whitespace-pre-wrap text-sm leading-7">
                {response.answer}
              </p>

            </CardContent>

          </Card>

        ))}

      </CollapsibleContent>

    </Collapsible>
  );
}
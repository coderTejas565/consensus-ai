"use client";

import { useState } from "react";
import { BrainCircuit, ChevronDown, ChevronUp } from "lucide-react";

import type { ExpertResponse } from "@/types/ai";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExpertResponsesProps {
  responses: ExpertResponse[];
}

function formatRole(role: string) {
  return role
    .replace("expert", "Expert ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

export function ExpertResponses({ responses }: ExpertResponsesProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="space-y-5">
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
          bg-card/70
          px-7
          py-6
          text-left
          shadow-lg
          shadow-black/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-primary/20
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
              ring-primary/15
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
              See how each AI independently approached your question.
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
            transition-transform
            duration-200
          "
        >
          {open ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-5">
        {responses.map((response) => (
          <Card
            key={response.role}
            className="
              rounded-3xl
              border
              border-border/50
              bg-card/70
              shadow-sm
              backdrop-blur-xl
            "
          >
            <CardHeader
              className="
                border-b
                border-border/40
                px-7
                py-5
              "
            >
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
            </CardHeader>

            <CardContent
              className="
                px-7
                py-6
              "
            >
              <div
                className="
                  prose
                  prose-neutral
                  dark:prose-invert
                  max-w-none
                  text-[15px]
                  leading-8
                  text-muted-foreground
                "
              >
                <p className="whitespace-pre-wrap">{response.answer}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

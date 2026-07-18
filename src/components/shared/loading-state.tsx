import { Brain, Sparkles } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";


export function LoadingState() {
  return (
    <div
      className="
        space-y-5
        rounded-2xl
        border
        bg-card
        p-6
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-primary
            text-primary-foreground
          "
        >
          <Brain className="h-5 w-5" />
        </div>


        <div>

          <p className="font-medium">
            Analyzing perspectives
          </p>

          <p className="text-sm text-muted-foreground">
            Comparing multiple AI responses and creating consensus
          </p>

        </div>

      </div>



      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>


        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-48" />
        </div>


        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-56" />
        </div>

      </div>


      <div className="space-y-2 pt-2">

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-3/4" />

      </div>


      <div className="flex items-center gap-2 text-xs text-muted-foreground">

        <Sparkles className="h-3.5 w-3.5" />

        Synthesizing final answer

      </div>


    </div>
  );
}
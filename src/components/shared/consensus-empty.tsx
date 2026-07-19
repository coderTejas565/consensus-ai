import { GitMerge } from "lucide-react";


export function ConsensusEmpty() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        space-y-4
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary
          text-primary-foreground
          shadow-lg
          shadow-primary/20
        "
      >
        <GitMerge className="h-7 w-7" />
      </div>

      <h1
        className="
          font-heading
          text-3xl
          font-semibold
          tracking-tight
          md:text-4xl
        "
      >
        Ask anything
      </h1>

      <p
        className="
          max-w-lg
          text-base
          leading-7
          text-muted-foreground
        "
      >
        Compare multiple AI perspectives and receive one refined,
        well-reasoned answer.
      </p>
    </div>
  );
}
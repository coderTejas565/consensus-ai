"use client";

import { useAnswer } from "@/hooks/use-answer";

import { PromptInput } from "@/components/prompt/prompt-input";
import { ConsensusAnswer } from "@/components/response/consensus-answer";
import { ExpertResponses } from "@/components/response/expert-responses";
import { LoadingState } from "@/components/shared/loading-state";


export default function Home() {

  const {
    ask,
    data,
    loading,
    error,
  } = useAnswer();


  return (
    <main className="min-h-screen">

      <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20">


        {/* Hero */}

        <div className="mx-auto max-w-3xl text-center space-y-5">

          <h1 className="text-5xl font-semibold tracking-tight">
            Consensus AI
          </h1>


          <p className="text-lg text-muted-foreground leading-relaxed">
            Ask one question.
            Multiple AI perspectives analyze it.
            One refined answer is generated.
          </p>

        </div>



        {/* Prompt */}

        <div className="mx-auto w-full max-w-3xl">

          <PromptInput
            onSubmit={ask}
            loading={loading}
          />

        </div>



        {/* Loading */}

        {loading && (
          <div className="mx-auto w-full max-w-3xl">
            <LoadingState />
          </div>
        )}



        {/* Error */}

        {error && (
          <p className="text-center text-sm text-destructive">
            {error}
          </p>
        )}



        {/* Results */}

        {data && (
          <section className="space-y-8">


            <ConsensusAnswer
              answer={data.finalAnswer}
            />


            <ExpertResponses
              responses={data.expertResponses}
            />


          </section>
        )}


      </section>

    </main>
  );
}
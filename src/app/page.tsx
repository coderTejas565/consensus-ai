"use client";

import { useAnswer } from "@/hooks/use-answer";

import { PromptInput } from "@/components/prompt/prompt-input";
import { ConsensusAnswer } from "@/components/response/consensus-answer";
import { ExpertResponses } from "@/components/response/expert-response";
import { LoadingState } from "@/components/shared/loading-state";


export default function Home() {

  const {
    ask,
    data,
    loading,
    error,
  } = useAnswer();


  return (
    <main className="min-h-screen bg-background">

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-20">


        {/* Hero */}

        <div className="space-y-4 text-center">

          <h1 className="text-4xl font-bold tracking-tight">
            Consensus AI
          </h1>


          <p className="max-w-xl text-muted-foreground">
            Ask a question. 
            Multiple AI experts analyze it.
            One final answer is synthesized.
          </p>

        </div>



        {/* Input */}

        <div className="w-full">

          <PromptInput
            onSubmit={ask}
            loading={loading}
          />

        </div>



        {loading && (
          <div className="w-full">
            <LoadingState />
          </div>
        )}



        {error && (
          <p className="text-sm text-destructive">
            {error}
          </p>
        )}



        {data && (
          <div className="w-full space-y-6">

            <ConsensusAnswer
              answer={data.finalAnswer}
            />


            <ExpertResponses
              responses={data.expertResponses}
            />

          </div>
        )}


      </section>

    </main>
  );
}
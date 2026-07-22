"use client";

import { useAnswer } from "@/hooks/use-answer";

import { Navbar } from "@/components/layout/navbar";
import { ConsensusEmpty } from "@/components/shared/consensus-empty";
import { PromptInput } from "@/components/prompt/prompt-input";
import { ConsensusAnswer } from "@/components/response/consensus-answer";
import { ExpertResponses } from "@/components/response/expert-responses";
import { LoadingState } from "@/components/shared/loading-state";

export default function Home() {
  const { ask, data, loading, error } = useAnswer();

  return (
    <main className="min-h-screen">
      <Navbar variant="app" />

      <section
        className="
          mx-auto
          flex
          max-w-5xl
          flex-col
          gap-10
          px-6
          py-16
        "
      >
        {!data && !loading && <ConsensusEmpty />}

        <div
          className="
            mx-auto
            w-full
            max-w-3xl
          "
        >
          <PromptInput onSubmit={ask} loading={loading} />
        </div>

        {loading && (
          <div
            className="
              mx-auto
              w-full
              max-w-3xl
            "
          >
            <LoadingState />
          </div>
        )}

        {error && (
          <p
            className="
              text-center
              text-sm
              text-destructive
            "
          >
            {error}
          </p>
        )}

        {data && (
          <section
            className="
              space-y-8
            "
          >
            <ConsensusAnswer answer={data.finalAnswer} />

            <ExpertResponses responses={data.expertResponses} />
          </section>
        )}
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  loading?: boolean;
}


export function PromptInput({
  onSubmit,
  loading = false,
}: PromptInputProps) {

  const [prompt, setPrompt] = useState("");


  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || loading) return;


    onSubmit(trimmedPrompt);

    setPrompt("");
  }


  return (

    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        bg-card
        p-4
        shadow-sm
        transition-all
        duration-200
        focus-within:border-primary/40
        focus-within:ring-4
        focus-within:ring-primary/10
      "
    >

      <Textarea

        value={prompt}

        onChange={(event) =>
          setPrompt(event.target.value)
        }

        disabled={loading}

        aria-label="Ask a question"

        placeholder="
          Ask a question and compare AI perspectives...
        "

        rows={6}

        className="
          min-h-32
          resize-none
          border-0
          bg-transparent
          px-2
          text-base
          leading-relaxed
          shadow-none
          placeholder:text-muted-foreground/70
          focus-visible:ring-0
        "

      />


      <div
        className="
          mt-4
          flex
          items-center
          justify-between
        "
      >

        <p
          className="
            text-xs
            text-muted-foreground
          "
        >
          Three AI perspectives · One refined answer
        </p>


        <Button

          type="submit"

          size="icon"

          disabled={
            loading ||
            !prompt.trim()
          }

          className="
            h-11
            w-11
            rounded-full
            bg-primary
            text-primary-foreground
            transition-transform
            hover:scale-105
          "

        >

          {
            loading ? (

              <Loader2
                className="
                  h-5
                  w-5
                  animate-spin
                "
              />

            ) : (

              <ArrowUp
                className="
                  h-5
                  w-5
                "
              />

            )
          }


          <span className="sr-only">
            {
              loading
                ? "Generating answer"
                : "Submit question"
            }
          </span>


        </Button>


      </div>


    </form>

  );
}
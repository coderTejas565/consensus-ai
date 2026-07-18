"use client";

import { useState } from "react";

import { ArrowUp } from "lucide-react";

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


    if (!trimmedPrompt) return;


    onSubmit(trimmedPrompt);

    setPrompt("");
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-2xl
        border
        bg-card
        p-3
        shadow-sm
        transition
        focus-within:ring-2
        focus-within:ring-primary/30
      "
    >

      <Textarea
        value={prompt}
        onChange={(event) =>
          setPrompt(event.target.value)
        }
        placeholder="Ask a question and compare AI perspectives..."
        rows={5}
        className="
          resize-none
          border-0
          bg-transparent
          shadow-none
          focus-visible:ring-0
          text-base
          leading-relaxed
        "
      />


      <div className="mt-3 flex items-center justify-between">

        <p className="text-xs text-muted-foreground">
          Powered by multiple AI perspectives
        </p>


        <Button
          type="submit"
          size="icon"
          disabled={loading || !prompt.trim()}
          className="
            rounded-full
            h-10
            w-10
          "
        >

          <ArrowUp className="h-5 w-5" />

          <span className="sr-only">
            {loading
              ? "Generating answer"
              : "Submit question"}
          </span>

        </Button>

      </div>

    </form>
  );
}
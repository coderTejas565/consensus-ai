"use client";

import { useState } from "react";

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
      className="space-y-4"
    >

      <Textarea
        placeholder="Ask anything..."
        value={prompt}
        onChange={(event) =>
          setPrompt(event.target.value)
        }
        rows={5}
      />


      <Button
        type="submit"
        disabled={loading || !prompt.trim()}
      >
        {loading
          ? "Thinking..."
          : "Ask"}
      </Button>

    </form>
  );
}
"use client";

import { useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  loading?: boolean;
}

export function PromptInput({ onSubmit, loading = false }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const canSubmit = prompt.trim().length > 0 && !loading;

  function submit() {
    const trimmed = prompt.trim();
    if (!trimmed || loading) return;

    onSubmit(trimmed);
    setPrompt("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-[28px] border border-border/60 bg-card p-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-200 focus-within:border-primary/50 focus-within:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] focus-within:ring-4 focus-within:ring-primary/10"
    >
      <Textarea
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        aria-label="Ask a question"
        placeholder="Ask a question and compare AI perspectives..."
        rows={5}
        className="min-h-28 resize-none border-0 bg-transparent px-1 text-lg leading-relaxed tracking-tight shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-0 md:text-xl"
      />

      <div className="mt-3 flex items-center justify-end">
        <Button
          type="submit"
          size="icon"
          disabled={!canSubmit}
          aria-label={loading ? "Generating answer" : "Submit question"}
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
        </Button>
      </div>
    </form>
  );
}

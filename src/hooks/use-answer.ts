"use client";

import { useState } from "react";

import type { AskApiResponse } from "@/types/api";

export function useAnswer() {
  const [data, setData] =
    useState<AskApiResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function ask(prompt: string) {
    try {
      setLoading(true);
      setError(null);
      setData(null);

      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const body = await response.json().catch(() => null);

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error(
              body?.message ??
                "Please enter a valid question."
            );

          case 429:
            throw new Error(
              body?.message ??
                "Daily AI quota reached. Please try again later."
            );

          case 500:
            throw new Error(
              body?.message ??
                "Something went wrong while generating the answer."
            );

          default:
            throw new Error(
              body?.message ??
                "Unable to generate an answer."
            );
        }
      }

      setData(body as AskApiResponse);
    } catch (error) {
      if (!navigator.onLine) {
        setError(
          "You're offline. Please check your internet connection."
        );
        return;
      }

      setError(
        error instanceof Error
          ? error.message
          : "Unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    ask,
    data,
    loading,
    error,
  };
}
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



  async function ask(prompt:string) {

    try {

      setLoading(true);
      setError(null);


      const response = await fetch(
        "/api/ask",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            prompt,
          }),
        }
      );


      if(!response.ok){
        throw new Error(
          "Failed to generate answer"
        );
      }


      const result:AskApiResponse =
        await response.json();


      setData(result);


    } catch(error){

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
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
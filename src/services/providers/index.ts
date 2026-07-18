import { MODELS } from "@/config/models";

import { GeminiProvider } from "./gemini.provider";
import { AIProvider } from "./provider.interface";

export function createProviders(): AIProvider[] {
  return [
    new GeminiProvider(
      "expertA",
      MODELS.expertA
    ),

    new GeminiProvider(
      "expertB",
      MODELS.expertB
    ),

    new GeminiProvider(
      "expertC",
      MODELS.expertC
    ),
  ];
}
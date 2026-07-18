import { MODELS } from "@/config/models";

import { GeminiProvider } from "./gemini.provider";
import { AIProvider } from "./provider.interface";

export function createProviders(): AIProvider[] {
  return [
    new GeminiProvider(MODELS.expertA),
    new GeminiProvider(MODELS.expertB),
    new GeminiProvider(MODELS.expertC),
  ];
}
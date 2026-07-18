import { createProviders } from "../providers";
import type { ExpertResponse } from "@/types/ai";

export class AnswerOrchestrator {
  private readonly providers = createProviders();

  async generateResponses(
    prompt: string
  ): Promise<ExpertResponse[]> {
    const results = await Promise.allSettled(
      this.providers.map(async (provider) => {
        const answer = await provider.generateResponse(prompt);

        return {
          role: provider.role,
          answer,
        };
      })
    );

    return results
      .filter(
        (
          result
        ): result is PromiseFulfilledResult<ExpertResponse> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);
  }
}
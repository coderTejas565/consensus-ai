import { createProviders } from "../providers";

export class AnswerOrchestrator {
  private readonly providers = createProviders();

  async generateResponses(prompt: string): Promise<string[]> {
    const results = await Promise.allSettled(
      this.providers.map((provider) =>
        provider.generateResponse(prompt)
      )
    );

    return results
      .filter(
        (
          result
        ): result is PromiseFulfilledResult<string> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);
  }
}
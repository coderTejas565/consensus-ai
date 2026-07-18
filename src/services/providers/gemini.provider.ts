import { geminiClient } from "@/lib/clients/gemini.client";
import { BaseProvider } from "./base.provider";
import type { AIProvider } from "./provider.interface";
import type { ModelRole } from "@/types/ai";

export class GeminiProvider
  extends BaseProvider
  implements AIProvider
{
  private readonly providerName = "Gemini";

  constructor(
    public readonly role: ModelRole,
    private readonly modelName: string
  ) {
    super();
  }

  async generateResponse(prompt: string): Promise<string> {
    return this.execute(async () => {
      const model = geminiClient.getGenerativeModel({
        model: this.modelName,
      });

      const result = await model.generateContent(prompt);

      return result.response.text();
    }, this.providerName);
  }
}
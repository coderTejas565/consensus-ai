import { geminiClient } from "@/lib/clients/gemini.client";
import { BaseProvider } from "./base.provider";
import { AIProvider } from "./provider.interface";

export class GeminiProvider
  extends BaseProvider
  implements AIProvider
{
  private readonly providerName = "Gemini";

  constructor(private readonly modelName: string) {
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
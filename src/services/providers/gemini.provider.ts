import { geminiClient } from "@/lib/clients/gemini.client";
import { BaseProvider } from "./base.provider";
import { AIProvider } from "./provider.interface";

export class GeminiProvider
  extends BaseProvider
  implements AIProvider
{
  private readonly providerName = "Gemini";

  async generateResponse(prompt: string): Promise<string> {
    return this.execute(async () => {
      const model = geminiClient.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(prompt);

      return result.response.text();
    }, this.providerName);
  }
}
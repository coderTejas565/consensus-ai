import { MODELS } from "@/config/models";
import { geminiClient } from "@/lib/clients/gemini.client";
import { buildEvaluatorPrompt } from "@/prompts/evaluator.prompt";

export class EvaluatorService {
  async evaluate(
    question: string,
    responses: string[]
  ): Promise<string> {
    const model = geminiClient.getGenerativeModel({
      model: MODELS.evaluator,
    });

    const prompt = buildEvaluatorPrompt(
      question,
      responses
    );

    const result = await model.generateContent(prompt);

    return result.response.text();
  }
}
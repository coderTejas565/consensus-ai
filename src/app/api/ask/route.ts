import { NextResponse } from "next/server";

import { askSchema } from "@/schemas/ask.schema";
import { AnswerOrchestrator } from "@/services/orchestrator/answer-orchestrator";
import { EvaluatorService } from "@/services/evaluator/evaluator.service";

const orchestrator = new AnswerOrchestrator();
const evaluator = new EvaluatorService();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prompt } = askSchema.parse(body);

    const responses = await orchestrator.generateResponses(prompt);

    const finalAnswer = await evaluator.evaluate(
      prompt,
      responses
    );

    return NextResponse.json({
  question: prompt,
  expertResponses: responses,
  finalAnswer,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
  {
    message:
      "The AI service has reached its daily free quota. Please try again later.",
  },
  {
    status: 429,
  }
);
  }
}
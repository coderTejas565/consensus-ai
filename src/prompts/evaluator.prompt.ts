export function buildEvaluatorPrompt(
  question: string,
  responses: string[]
): string {
  const expertLabels = ["Expert A", "Expert B", "Expert C"];

  const formattedResponses = responses
    .map(
      (response, index) => `
${expertLabels[index] ?? `Expert ${index + 1}`}:
${response}
`
    )
    .join("\n");

  return `
You are an expert AI evaluator.

Your task is to analyze multiple expert responses to the same user question and produce a single, high-quality answer.

User Question:
${question}

Expert Responses:
${formattedResponses}

Instructions:

- Carefully compare all expert responses.
- Identify the strongest ideas, explanations, and reasoning.
- Prefer information that appears consistently across multiple responses.
- If responses disagree, choose the explanation that is the most accurate, complete, and well-reasoned.
- Remove incorrect, repetitive, or weaker information.
- Combine the best parts into one clear, coherent, and well-structured answer.
- Do not mention the experts or compare their responses.
- Do not say which response you selected.
- Write the answer as if you generated it yourself.
- Return only the final synthesized answer.

Final Answer:
`.trim();
}
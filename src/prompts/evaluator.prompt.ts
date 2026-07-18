import type { ExpertResponse } from "@/types/ai";
export function buildEvaluatorPrompt(
 question:string,
 responses:ExpertResponse[]
){

const formattedResponses = responses
.map(
(response)=>`

${response.role.toUpperCase()}:

${response.answer}

`
)
.join("\n");


return `
You are an expert AI evaluator.

User Question:
${question}

Expert Responses:

${formattedResponses}

Instructions:

- Carefully compare all responses.
- Identify the strongest reasoning.
- Prefer accurate and consistent information.
- Remove incorrect or repetitive content.
- Create one final answer.
- Do not mention experts.

Return only the final answer.

`.trim();

}
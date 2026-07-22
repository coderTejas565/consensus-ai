export type ModelRole = "expertA" | "expertB" | "expertC" | "evaluator";

export interface ExpertResponse {
  role: ModelRole;
  answer: string;
}

export const MODELS = {
  expertA: "gemini-2.5-flash",
  expertB: "gemini-2.5-flash",
  expertC: "gemini-2.5-flash",
  evaluator: "gemini-2.5-flash",
} as const;

export type ModelRole = keyof typeof MODELS;
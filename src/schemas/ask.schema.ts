import { z } from "zod";

export const askSchema = z.object({
  prompt: z.string().trim().min(1),
});

export type AskRequest = z.infer<typeof askSchema>;
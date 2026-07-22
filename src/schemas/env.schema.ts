import { z } from "zod";

export const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;

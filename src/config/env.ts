import { envSchema } from "@/schemas/env.schema";

const parsedEnv = envSchema.parse({
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
});

export const env = parsedEnv;

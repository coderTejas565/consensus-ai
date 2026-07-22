import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "@/config/env";

export const geminiClient = new GoogleGenerativeAI(env.GEMINI_API_KEY);

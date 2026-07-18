import type { ModelRole } from "@/types/ai";

export interface AIProvider {
  role: ModelRole;

  generateResponse(prompt:string):Promise<string>;
}
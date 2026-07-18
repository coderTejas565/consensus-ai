import type { ExpertResponse } from "./ai";

export interface ConsensusResult {
  expertResponses: ExpertResponse[];
  finalAnswer: string;
}
import type { ConsensusResult } from "./response";

export interface AskRequest {
  prompt: string;
}

export interface AskApiResponse extends ConsensusResult {
  question: string;
}

import { retry } from "@/lib/retry";
import { AppError } from "@/lib/errors";

export abstract class BaseProvider {
  protected async execute<T>(
    operation: () => Promise<T>,
    providerName: string
  ): Promise<T> {
    const startTime = Date.now();

    try {
      const result = await retry(operation);

      const latency = Date.now() - startTime;
      console.log(`[${providerName}] completed in ${latency}ms`);

      return result;
    } catch (error) {
      throw new AppError(
        `${providerName} provider failed`,
        error
      );
    }
  }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class AiFactsService {
  constructor() {}
  async GetFact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

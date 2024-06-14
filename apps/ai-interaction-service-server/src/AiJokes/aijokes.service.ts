import { Injectable } from "@nestjs/common";

@Injectable()
export class AiJokesService {
  constructor() {}
  async GetJoke(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

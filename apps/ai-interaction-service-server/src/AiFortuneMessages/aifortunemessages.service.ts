import { Injectable } from "@nestjs/common";

@Injectable()
export class AiFortuneMessagesService {
  constructor() {}
  async GetFortuneMessage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

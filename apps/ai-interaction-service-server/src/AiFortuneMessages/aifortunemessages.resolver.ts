import * as graphql from "@nestjs/graphql";
import { AiFortuneMessagesService } from "./aifortunemessages.service";

export class AiFortuneMessagesResolver {
  constructor(protected readonly service: AiFortuneMessagesService) {}

  @graphql.Query(() => String)
  async GetFortuneMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetFortuneMessage(args);
  }
}

import * as graphql from "@nestjs/graphql";
import { AiFactsService } from "./aifacts.service";

export class AiFactsResolver {
  constructor(protected readonly service: AiFactsService) {}

  @graphql.Query(() => String)
  async GetFact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetFact(args);
  }
}

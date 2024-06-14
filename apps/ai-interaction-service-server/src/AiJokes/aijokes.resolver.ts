import * as graphql from "@nestjs/graphql";
import { AiJokesService } from "./aijokes.service";

export class AiJokesResolver {
  constructor(protected readonly service: AiJokesService) {}

  @graphql.Query(() => String)
  async GetJoke(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetJoke(args);
  }
}

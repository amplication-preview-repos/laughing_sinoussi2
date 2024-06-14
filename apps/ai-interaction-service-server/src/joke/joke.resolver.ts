import * as graphql from "@nestjs/graphql";
import { JokeResolverBase } from "./base/joke.resolver.base";
import { Joke } from "./base/Joke";
import { JokeService } from "./joke.service";

@graphql.Resolver(() => Joke)
export class JokeResolver extends JokeResolverBase {
  constructor(protected readonly service: JokeService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { FortuneMessageResolverBase } from "./base/fortuneMessage.resolver.base";
import { FortuneMessage } from "./base/FortuneMessage";
import { FortuneMessageService } from "./fortuneMessage.service";

@graphql.Resolver(() => FortuneMessage)
export class FortuneMessageResolver extends FortuneMessageResolverBase {
  constructor(protected readonly service: FortuneMessageService) {
    super(service);
  }
}

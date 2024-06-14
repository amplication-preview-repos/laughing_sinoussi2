import * as graphql from "@nestjs/graphql";
import { FactResolverBase } from "./base/fact.resolver.base";
import { Fact } from "./base/Fact";
import { FactService } from "./fact.service";

@graphql.Resolver(() => Fact)
export class FactResolver extends FactResolverBase {
  constructor(protected readonly service: FactService) {
    super(service);
  }
}

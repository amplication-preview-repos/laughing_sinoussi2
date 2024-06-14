/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FortuneMessage } from "./FortuneMessage";
import { FortuneMessageCountArgs } from "./FortuneMessageCountArgs";
import { FortuneMessageFindManyArgs } from "./FortuneMessageFindManyArgs";
import { FortuneMessageFindUniqueArgs } from "./FortuneMessageFindUniqueArgs";
import { CreateFortuneMessageArgs } from "./CreateFortuneMessageArgs";
import { UpdateFortuneMessageArgs } from "./UpdateFortuneMessageArgs";
import { DeleteFortuneMessageArgs } from "./DeleteFortuneMessageArgs";
import { FortuneMessageService } from "../fortuneMessage.service";
@graphql.Resolver(() => FortuneMessage)
export class FortuneMessageResolverBase {
  constructor(protected readonly service: FortuneMessageService) {}

  async _fortuneMessagesMeta(
    @graphql.Args() args: FortuneMessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FortuneMessage])
  async fortuneMessages(
    @graphql.Args() args: FortuneMessageFindManyArgs
  ): Promise<FortuneMessage[]> {
    return this.service.fortuneMessages(args);
  }

  @graphql.Query(() => FortuneMessage, { nullable: true })
  async fortuneMessage(
    @graphql.Args() args: FortuneMessageFindUniqueArgs
  ): Promise<FortuneMessage | null> {
    const result = await this.service.fortuneMessage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FortuneMessage)
  async createFortuneMessage(
    @graphql.Args() args: CreateFortuneMessageArgs
  ): Promise<FortuneMessage> {
    return await this.service.createFortuneMessage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FortuneMessage)
  async updateFortuneMessage(
    @graphql.Args() args: UpdateFortuneMessageArgs
  ): Promise<FortuneMessage | null> {
    try {
      return await this.service.updateFortuneMessage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FortuneMessage)
  async deleteFortuneMessage(
    @graphql.Args() args: DeleteFortuneMessageArgs
  ): Promise<FortuneMessage | null> {
    try {
      return await this.service.deleteFortuneMessage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

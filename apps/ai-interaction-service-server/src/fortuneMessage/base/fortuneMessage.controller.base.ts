/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FortuneMessageService } from "../fortuneMessage.service";
import { FortuneMessageCreateInput } from "./FortuneMessageCreateInput";
import { FortuneMessage } from "./FortuneMessage";
import { FortuneMessageFindManyArgs } from "./FortuneMessageFindManyArgs";
import { FortuneMessageWhereUniqueInput } from "./FortuneMessageWhereUniqueInput";
import { FortuneMessageUpdateInput } from "./FortuneMessageUpdateInput";

export class FortuneMessageControllerBase {
  constructor(protected readonly service: FortuneMessageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FortuneMessage })
  async createFortuneMessage(
    @common.Body() data: FortuneMessageCreateInput
  ): Promise<FortuneMessage> {
    return await this.service.createFortuneMessage({
      data: data,
      select: {
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FortuneMessage] })
  @ApiNestedQuery(FortuneMessageFindManyArgs)
  async fortuneMessages(
    @common.Req() request: Request
  ): Promise<FortuneMessage[]> {
    const args = plainToClass(FortuneMessageFindManyArgs, request.query);
    return this.service.fortuneMessages({
      ...args,
      select: {
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FortuneMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fortuneMessage(
    @common.Param() params: FortuneMessageWhereUniqueInput
  ): Promise<FortuneMessage | null> {
    const result = await this.service.fortuneMessage({
      where: params,
      select: {
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FortuneMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFortuneMessage(
    @common.Param() params: FortuneMessageWhereUniqueInput,
    @common.Body() data: FortuneMessageUpdateInput
  ): Promise<FortuneMessage | null> {
    try {
      return await this.service.updateFortuneMessage({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FortuneMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFortuneMessage(
    @common.Param() params: FortuneMessageWhereUniqueInput
  ): Promise<FortuneMessage | null> {
    try {
      return await this.service.deleteFortuneMessage({
        where: params,
        select: {
          createdAt: true,
          id: true,
          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
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
import { FactService } from "../fact.service";
import { FactCreateInput } from "./FactCreateInput";
import { Fact } from "./Fact";
import { FactFindManyArgs } from "./FactFindManyArgs";
import { FactWhereUniqueInput } from "./FactWhereUniqueInput";
import { FactUpdateInput } from "./FactUpdateInput";

export class FactControllerBase {
  constructor(protected readonly service: FactService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Fact })
  async createFact(@common.Body() data: FactCreateInput): Promise<Fact> {
    return await this.service.createFact({
      data: data,
      select: {
        createdAt: true,
        date: true,
        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Fact] })
  @ApiNestedQuery(FactFindManyArgs)
  async facts(@common.Req() request: Request): Promise<Fact[]> {
    const args = plainToClass(FactFindManyArgs, request.query);
    return this.service.facts({
      ...args,
      select: {
        createdAt: true,
        date: true,
        id: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Fact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fact(
    @common.Param() params: FactWhereUniqueInput
  ): Promise<Fact | null> {
    const result = await this.service.fact({
      where: params,
      select: {
        createdAt: true,
        date: true,
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
  @swagger.ApiOkResponse({ type: Fact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFact(
    @common.Param() params: FactWhereUniqueInput,
    @common.Body() data: FactUpdateInput
  ): Promise<Fact | null> {
    try {
      return await this.service.updateFact({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
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
  @swagger.ApiOkResponse({ type: Fact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFact(
    @common.Param() params: FactWhereUniqueInput
  ): Promise<Fact | null> {
    try {
      return await this.service.deleteFact({
        where: params,
        select: {
          createdAt: true,
          date: true,
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
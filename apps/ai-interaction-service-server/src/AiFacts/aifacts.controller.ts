import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiFactsService } from "./aifacts.service";

@swagger.ApiTags("aiFacts")
@common.Controller("aiFacts")
export class AiFactsController {
  constructor(protected readonly service: AiFactsService) {}

  @common.Get("/fact")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFact(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetFact(body);
      }
}

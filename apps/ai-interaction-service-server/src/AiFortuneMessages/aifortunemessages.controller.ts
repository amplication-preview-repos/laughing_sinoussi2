import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiFortuneMessagesService } from "./aifortunemessages.service";

@swagger.ApiTags("aiFortuneMessages")
@common.Controller("aiFortuneMessages")
export class AiFortuneMessagesController {
  constructor(protected readonly service: AiFortuneMessagesService) {}

  @common.Get("/fortune-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFortuneMessage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetFortuneMessage(body);
      }
}

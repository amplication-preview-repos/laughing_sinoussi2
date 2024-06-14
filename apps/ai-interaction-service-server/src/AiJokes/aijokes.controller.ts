import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiJokesService } from "./aijokes.service";

@swagger.ApiTags("aiJokes")
@common.Controller("aiJokes")
export class AiJokesController {
  constructor(protected readonly service: AiJokesService) {}

  @common.Get("/joke")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetJoke(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetJoke(body);
      }
}

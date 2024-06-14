import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JokeService } from "./joke.service";
import { JokeControllerBase } from "./base/joke.controller.base";

@swagger.ApiTags("jokes")
@common.Controller("jokes")
export class JokeController extends JokeControllerBase {
  constructor(protected readonly service: JokeService) {
    super(service);
  }
}

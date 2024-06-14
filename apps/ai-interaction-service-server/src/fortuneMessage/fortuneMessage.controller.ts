import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FortuneMessageService } from "./fortuneMessage.service";
import { FortuneMessageControllerBase } from "./base/fortuneMessage.controller.base";

@swagger.ApiTags("fortuneMessages")
@common.Controller("fortuneMessages")
export class FortuneMessageController extends FortuneMessageControllerBase {
  constructor(protected readonly service: FortuneMessageService) {
    super(service);
  }
}

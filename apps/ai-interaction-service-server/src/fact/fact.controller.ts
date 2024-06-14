import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FactService } from "./fact.service";
import { FactControllerBase } from "./base/fact.controller.base";

@swagger.ApiTags("facts")
@common.Controller("facts")
export class FactController extends FactControllerBase {
  constructor(protected readonly service: FactService) {
    super(service);
  }
}

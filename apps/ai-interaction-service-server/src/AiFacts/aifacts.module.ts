import { Module } from "@nestjs/common";
import { AiFactsService } from "./aifacts.service";
import { AiFactsController } from "./aifacts.controller";
import { AiFactsResolver } from "./aifacts.resolver";

@Module({
  controllers: [AiFactsController],
  providers: [AiFactsService, AiFactsResolver],
  exports: [AiFactsService],
})
export class AiFactsModule {}

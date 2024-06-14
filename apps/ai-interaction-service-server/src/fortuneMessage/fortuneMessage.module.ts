import { Module } from "@nestjs/common";
import { FortuneMessageModuleBase } from "./base/fortuneMessage.module.base";
import { FortuneMessageService } from "./fortuneMessage.service";
import { FortuneMessageController } from "./fortuneMessage.controller";
import { FortuneMessageResolver } from "./fortuneMessage.resolver";

@Module({
  imports: [FortuneMessageModuleBase],
  controllers: [FortuneMessageController],
  providers: [FortuneMessageService, FortuneMessageResolver],
  exports: [FortuneMessageService],
})
export class FortuneMessageModule {}

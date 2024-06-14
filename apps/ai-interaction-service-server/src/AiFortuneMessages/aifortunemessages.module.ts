import { Module } from "@nestjs/common";
import { AiFortuneMessagesService } from "./aifortunemessages.service";
import { AiFortuneMessagesController } from "./aifortunemessages.controller";
import { AiFortuneMessagesResolver } from "./aifortunemessages.resolver";

@Module({
  controllers: [AiFortuneMessagesController],
  providers: [AiFortuneMessagesService, AiFortuneMessagesResolver],
  exports: [AiFortuneMessagesService],
})
export class AiFortuneMessagesModule {}

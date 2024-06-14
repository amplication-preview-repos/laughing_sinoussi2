import { Module } from "@nestjs/common";
import { AiJokesService } from "./aijokes.service";
import { AiJokesController } from "./aijokes.controller";
import { AiJokesResolver } from "./aijokes.resolver";

@Module({
  controllers: [AiJokesController],
  providers: [AiJokesService, AiJokesResolver],
  exports: [AiJokesService],
})
export class AiJokesModule {}

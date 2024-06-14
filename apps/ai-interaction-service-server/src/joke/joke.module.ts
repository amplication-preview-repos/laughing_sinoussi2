import { Module } from "@nestjs/common";
import { JokeModuleBase } from "./base/joke.module.base";
import { JokeService } from "./joke.service";
import { JokeController } from "./joke.controller";
import { JokeResolver } from "./joke.resolver";

@Module({
  imports: [JokeModuleBase],
  controllers: [JokeController],
  providers: [JokeService, JokeResolver],
  exports: [JokeService],
})
export class JokeModule {}

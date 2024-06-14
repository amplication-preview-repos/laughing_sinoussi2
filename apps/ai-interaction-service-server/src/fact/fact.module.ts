import { Module } from "@nestjs/common";
import { FactModuleBase } from "./base/fact.module.base";
import { FactService } from "./fact.service";
import { FactController } from "./fact.controller";
import { FactResolver } from "./fact.resolver";

@Module({
  imports: [FactModuleBase],
  controllers: [FactController],
  providers: [FactService, FactResolver],
  exports: [FactService],
})
export class FactModule {}

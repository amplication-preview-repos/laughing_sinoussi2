import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FactServiceBase } from "./base/fact.service.base";

@Injectable()
export class FactService extends FactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

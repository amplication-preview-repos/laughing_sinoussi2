import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FortuneMessageServiceBase } from "./base/fortuneMessage.service.base";

@Injectable()
export class FortuneMessageService extends FortuneMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

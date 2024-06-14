import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JokeServiceBase } from "./base/joke.service.base";

@Injectable()
export class JokeService extends JokeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

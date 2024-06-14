import { Module } from "@nestjs/common";
import { FactModule } from "./fact/fact.module";
import { JokeModule } from "./joke/joke.module";
import { FortuneMessageModule } from "./fortuneMessage/fortuneMessage.module";
import { SettingsModule } from "./settings/settings.module";
import { AiFactsModule } from "./AiFacts/aifacts.module";
import { AiFortuneMessagesModule } from "./AiFortuneMessages/aifortunemessages.module";
import { AiJokesModule } from "./AiJokes/aijokes.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    FactModule,
    JokeModule,
    FortuneMessageModule,
    SettingsModule,
    AiFactsModule,
    AiFortuneMessagesModule,
    AiJokesModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

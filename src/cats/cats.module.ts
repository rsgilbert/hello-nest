import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { LoggerMiddleware } from "../logger.middleware";
import { CatsService } from "./services/cats.service";


@Module({
    controllers: [CatsController],
    providers: [CatsService]
})
export class CatsModule {}

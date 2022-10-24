import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Photo } from './users/entities/photo.entity';


@Module({
    imports: [
        CatsModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'gilbert',
            password: 'stanislav100',
            database: 'test',
            autoLoadEntities: true,
            synchronize: true
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
            .exclude('/_next/webpack-hmr')
            .forRoutes('')
    }
}




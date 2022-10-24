import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Photo } from "./entities/photo.entity";
import { User } from "./entities/user.entity";
import { PhotosController } from "./photos.controller";
import { PhotosService } from "./photos.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, Photo])],
    providers: [UsersService, PhotosService],
    controllers: [UsersController, PhotosController]
})
export class UsersModule {}
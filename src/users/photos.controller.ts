import { Body, Controller, Get, Post } from "@nestjs/common";
import { Photo } from "./entities/photo.entity";
import { PhotosService } from "./photos.service";

@Controller('photos')
export class PhotosController {
    constructor(private photosService: PhotosService) {}

    @Post()
    async save(@Body() photo: Photo) {
        await this.photosService.save(photo)
    }
}
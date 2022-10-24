import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from "./entities/photo.entity";

export class PhotosService {
    constructor(@InjectRepository(Photo) private photosRepository: Repository<Photo>) {}

    async save(photo: Photo) {
        return this.photosRepository.save(photo)
    }
}
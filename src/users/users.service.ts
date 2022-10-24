import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddPhotoDto } from "./dto/add-photo.dto";
import { Photo } from "./entities/photo.entity";
import { User } from "./entities/user.entity";


export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Photo) private photoRepository: Repository<Photo>) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find()
    }

    findOne(id: number) : Promise<User> {
        return this.usersRepository.findOneBy({ id })
    }

    async delete(id: string): Promise<void> {
        await this.usersRepository.delete(id)
    }

    async save(user: User) {
        this.usersRepository.save(user)
    }

    async addPhoto(userId: number, addPhotoDto: AddPhotoDto) {
        const user = await this.findOne(userId)
        const photo = new Photo()
        photo.mimeType = addPhotoDto.mimeType
        photo.url = addPhotoDto.url
        photo.user = user 
        await this.photoRepository.save(photo)
    }
}
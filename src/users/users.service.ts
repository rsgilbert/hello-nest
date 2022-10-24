import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";


export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

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
}
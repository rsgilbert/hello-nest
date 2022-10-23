import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Cat } from "../interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats : Cat[] = []

    create(cat: Cat) {
        return this.cats.push(cat)
    }

    findAll(): Cat[] { 
        throw new HttpException('Bad boy', HttpStatus.NOT_FOUND)
        return this.cats
    }

}
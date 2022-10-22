import { Injectable } from "@nestjs/common";
import { Cat } from "src/interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats : Cat[] = []

    create(cat: Cat) {
        return this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }

}
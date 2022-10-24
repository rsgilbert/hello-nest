import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }


    @Post()
    async create(@Body() user: User) {
        await this.usersService.save(user)
    }

    @Get(":id")
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const user = await this.usersService.findOne(id)
        console.log('photos', user.photos)
        return this.usersService.findOne(id)
    }
}
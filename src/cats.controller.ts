import { Controller, Get, Post, Req, Body, HttpCode, Redirect, Param } from '@nestjs/common'
import { Request } from 'express'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface'
import { CatsService } from './services/cats.service'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) : void {
        this.catsService.create(createCatDto)
    }

    @Get("/redir")
    @Redirect("https://stackoverflow.com", 301)
    redirectToStackoverflow() {} 

    @Get(":id")
    async findOne(@Param("id") id: string) : Promise<string> {
        return 'You are looking for a cat with id ' + id
    }
}
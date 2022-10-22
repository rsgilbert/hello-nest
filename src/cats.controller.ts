import { Controller, Get, Post, Req, Body, HttpCode, Redirect, Param } from '@nestjs/common'
import { Request } from 'express'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'Here are all the cats'
    }

    @HttpCode(203)
    @Post()
    create(@Body() createCatDto: CreateCatDto) : string {
        return 'Cat created. It is' + JSON.stringify(createCatDto)
    }

    @Get("/redir")
    @Redirect("https://stackoverflow.com", 301)
    redirectToStackoverflow() {} 

    @Get(":id")
    async findOne(@Param("id") id: string) : Promise<string> {
        return 'You are looking for a cat with id ' + id
    }
}
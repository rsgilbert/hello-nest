import { Controller, Get, Post, Req, Body, HttpCode, Redirect, Param, UseFilters, ParseIntPipe, HttpStatus, ParseBoolPipe, Query, UsePipes } from '@nestjs/common'
import { Request } from 'express'
import { HttpExceptionFilter } from 'src/http-exception.filter'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface'
import { createCatSchema } from './schemas/create-cat-schema'
import { CatsService } from './services/cats.service'
import { JoiValidationPipe, ValidationPipe } from './validation.pipe'

@UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    
    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    create(@Body() createCatDto: CreateCatDto) : void {
        this.catsService.create(createCatDto)
    }

    @Get("/redir")
    @Redirect("https://stackoverflow.com", 301)
    redirectToStackoverflow() {} 

    @Get(":id")
    async findOne(
        @Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), ValidationPipe) id: string,
        @Query("qid", ParseBoolPipe) qid: boolean) : Promise<string> {
        return 'You are looking for a cat with id ' + id + ' and qid ' + qid 
    }
}
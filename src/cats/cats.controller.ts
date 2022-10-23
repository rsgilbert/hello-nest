import { Controller, Get, Post, Req, Body, HttpCode, Redirect, Param, UseFilters, ParseIntPipe, HttpStatus, ParseBoolPipe, Query, UsePipes, DefaultValuePipe } from '@nestjs/common'
import { Request } from 'express'
import { HttpExceptionFilter } from 'src/http-exception.filter'
import { MyParseIntPipe } from 'src/my-parse-int.pipe'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface'
import { createCatSchema } from './schemas/create-cat-schema'
import { UserByUserIdPipe } from './schemas/user-by-userid.pipe'
import { CatsService } from './services/cats.service'

@UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    
    @Post()
    // @UsePipes(new JoiValidationPipe(createCatSchema))
    create(@Body() createCatDto: CreateCatDto) : void {
        this.catsService.create(createCatDto)
    }

    @Get("/redir")
    @Redirect("https://stackoverflow.com", 301)
    redirectToStackoverflow() {} 


    @Get(":id")
    async findOne(
        @Param("id",  MyParseIntPipe, new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string,
        @Query("qid", ParseBoolPipe) qid: boolean,
        @Query("userid", new DefaultValuePipe(111), UserByUserIdPipe) user: Record<string,any>) : Promise<string>{
        console.log('user is', user)
        return 'You are looking for a cat with id ' + id + ' and qid ' + qid 
    }
}

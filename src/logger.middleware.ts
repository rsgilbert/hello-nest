import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request } from "express";


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.method, req.originalUrl)
        next()
    }
}
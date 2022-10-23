import { ArgumentMetadata, Injectable, NotAcceptableException, PipeTransform } from "@nestjs/common";


@Injectable()
export class MyParseIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value)
        if(isNaN(val)) {
            throw new NotAcceptableException(value + " is not a valid integer")
        }
        return val 
    }
}
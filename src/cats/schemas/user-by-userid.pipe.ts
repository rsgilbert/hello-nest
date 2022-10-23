

import { ArgumentMetadata, Injectable, NotAcceptableException, PipeTransform } from "@nestjs/common";


@Injectable()
export class UserByUserIdPipe implements PipeTransform<string, Record<string,any>> {
    transform(value: string, metadata: ArgumentMetadata): Record<string,any> {
        return {
            userid: value,
            name: "Jonathan"
        }
    }
}
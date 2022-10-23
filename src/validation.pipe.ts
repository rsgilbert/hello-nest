import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ObjectSchema } from "joi";

@Injectable()
export class SchemaValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        if(!metadata.metatype || !this.toValidate(metadata.metatype)) { 
            return value
        }
        const object = plainToInstance(metadata.metatype, value)
        const errors = await validate(object)
        if(errors.length) {
            throw new BadRequestException(errors[0].toString())
        }
        return value 
    }

    private toValidate(metatype: Function) : boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}

    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.$.validate(value)
        if(error) {
            throw new BadRequestException("Validation failed: " + error.message)
        }
        return value 
    }
}



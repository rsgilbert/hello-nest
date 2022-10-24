import { IsString } from "class-validator"

export class AddPhotoDto {
    @IsString()
    url: string 

    @IsString()
    mimeType: string
}
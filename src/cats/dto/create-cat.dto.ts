import { IsInt, IsString } from "class-validator";

export class CreateCatDto {
    @IsString()
    name: string;

    
    @IsInt({message:"bad age"})
    age: number;

    @IsInt()
    breed: string;
}
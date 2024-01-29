import { IsNotEmpty, IsNumber, Length } from "class-validator";
export class CreateProductDto {

    @IsNotEmpty()
    @Length(1,150)
    title: string

    @IsNotEmpty()
    @Length(1,400)
    description: string

    @IsNotEmpty()
    @IsNumber()
    value: number

}
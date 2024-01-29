import { IsUUID } from "class-validator";

export class CommonParamIdDto {

    @IsUUID()
    id: string

}
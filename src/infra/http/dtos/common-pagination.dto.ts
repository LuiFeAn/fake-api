import { IsNotEmpty, IsNumber } from 'class-validator';
import { IPagnation } from 'src/application/common/interfaces/pagination';
import { Transform, TransformFnParams } from 'class-transformer';
export class CommonPaginationDto implements IPagnation {
  @IsNotEmpty()
  @IsNumber()
  @Transform((params: TransformFnParams) => parseInt(params.value))
  page: number = 1;

  @IsNotEmpty()
  @IsNumber()
  @Transform((params: TransformFnParams) => parseInt(params.value))
  quanty: number = 20;
}

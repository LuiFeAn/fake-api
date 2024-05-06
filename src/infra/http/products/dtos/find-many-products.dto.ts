import { IsOptional, IsString } from 'class-validator';
import { CommonPaginationDto } from '../../dtos/common-pagination.dto';
export class FindManyProductsDto extends CommonPaginationDto {
  @IsOptional()
  @IsString()
  title: string;
}

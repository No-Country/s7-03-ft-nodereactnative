import { IsString, IsNumber, IsUUID, Min, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  quantity: number;

  @IsUUID()
  @IsOptional()
  productCategoryId: string;
}

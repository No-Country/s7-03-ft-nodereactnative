import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantity: number;

  @IsUUID()
  @IsOptional()
  veterinaryId: string;

  @IsUUID()
  @IsNotEmpty()
  productCategoryId: string;
}

import { IsArray, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsOptional()
  imageUrl: string;
}

export class CreateProductImagesDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsOptional()
  @IsArray()
  imageUrl: string[];
}

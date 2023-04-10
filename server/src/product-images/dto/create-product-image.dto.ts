import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsOptional()
  imageUrl: string;
}

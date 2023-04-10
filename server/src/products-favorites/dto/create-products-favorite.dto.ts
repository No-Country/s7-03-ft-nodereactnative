import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductsFavoriteDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  productId: string;
}

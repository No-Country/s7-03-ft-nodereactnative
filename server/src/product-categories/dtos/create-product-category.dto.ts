import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}

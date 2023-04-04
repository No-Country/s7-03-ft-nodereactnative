import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class SearchProductCategoryById {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class SearchProductCategoryById {
  @IsString()
  @IsNotEmpty()
  id: string;
}

import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParamsReviewDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

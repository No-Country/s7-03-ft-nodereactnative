import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParamsProductsFavoriteDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}

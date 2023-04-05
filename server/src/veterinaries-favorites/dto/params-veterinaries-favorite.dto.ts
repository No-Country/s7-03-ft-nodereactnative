import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParamsVeterinariesFavoriteDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

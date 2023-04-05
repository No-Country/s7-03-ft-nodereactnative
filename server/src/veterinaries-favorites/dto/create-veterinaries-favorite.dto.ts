import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateVeterinariesFavoriteDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  veterinaryId: string;
}

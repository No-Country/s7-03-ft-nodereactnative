import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParamsVeterinaryDto {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  id: string;
}

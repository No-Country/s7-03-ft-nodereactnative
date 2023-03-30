import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class RoleParamsDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}

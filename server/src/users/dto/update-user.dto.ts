import { OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SignUpDto } from 'src/auth/dto/auth.dto';

export class UpdateUserDto extends PartialType(
  OmitType(SignUpDto, ['password', 'email', 'roleId'] as const),
) {}

export class UserParamsDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}

import { PartialType } from '@nestjs/swagger';
import { CreateVeterinaryDto } from './create-veterinary.dto';

export class UpdateVeterinaryDto extends PartialType(CreateVeterinaryDto) {}

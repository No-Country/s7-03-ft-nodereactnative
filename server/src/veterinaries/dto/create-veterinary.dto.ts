import {
  IsISO31661Alpha3,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVeterinaryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsISO31661Alpha3()
  country: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  address: string;

  @IsNotEmpty()
  @IsLatitude()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  @IsNumber()
  longitude: number;

  @IsNotEmpty()
  @IsString()
  phone: string;
}

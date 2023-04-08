import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber } from 'class-validator';

export class QueryLatitudeLongitude {
  @IsNumber()
  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsLongitude()
  @IsNotEmpty()
  longitude: number;
}

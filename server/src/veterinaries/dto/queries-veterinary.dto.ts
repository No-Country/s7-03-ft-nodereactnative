import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

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

export class QueryPaginationVeterinary {
  @IsNumber()
  @IsOptional()
  @Min(1)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number;
}

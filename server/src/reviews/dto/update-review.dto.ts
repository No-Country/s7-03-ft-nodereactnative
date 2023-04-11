import { PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateReviewDto extends PartialType(
  OmitType(CreateReviewDto, ['veterinaryId'] as const),
) {}

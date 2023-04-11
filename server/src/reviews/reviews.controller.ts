import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto, UpdateReviewDto, ParamsReviewDto } from './dto';
import { Request } from 'express';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('api/v1/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'A review has been created with the user in session id',
  })
  @Post()
  async create(@Body() createReviewDto: CreateReviewDto, @Req() req: Request) {
    const review = await this.reviewsService.create(createReviewDto, req.user);
    return { review };
  }

  @ApiOkResponse({ description: 'Returns all the reviews in the database' })
  @SkipAuth()
  @Get()
  async findAll() {
    const reviews = await this.reviewsService.findAll();

    return { reviews };
  }

  @ApiOkResponse({ description: 'Returns the review with the given id' })
  @ApiNotFoundResponse({ description: 'Review Not Found' })
  @SkipAuth()
  @Get(':id')
  async findOne(@Param() params: ParamsReviewDto) {
    const review = await this.reviewsService.findOne(params.id);

    return { review };
  }

  @ApiOkResponse({
    description: 'Returns all the reviews of the given veterinary',
  })
  @ApiNotFoundResponse({ description: 'Veterinary Not Found' })
  @SkipAuth()
  @Get('veterinaries/:id')
  async findReviewsByVeterinary(@Param() params: ParamsReviewDto) {
    const reviews = await this.reviewsService.findReviewsByVeterinary(
      params.id,
    );

    return { reviews };
  }

  @ApiOkResponse({ description: 'Returns the updated review' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param() params: ParamsReviewDto,
    @Body() updateReviewDto: UpdateReviewDto,
    @Req() req: Request,
  ) {
    return this.reviewsService.update(params.id, updateReviewDto, req.user);
  }

  @ApiNoContentResponse({ description: 'Review has been deleted' })
  @ApiBearerAuth()
  @HttpCode(204)
  @Delete(':id')
  remove(@Param() params: ParamsReviewDto, @Req() req: Request) {
    return this.reviewsService.remove(params.id, req.user);
  }
}

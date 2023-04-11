import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ProductsFavoritesService } from './products-favorites.service';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { CreateProductsFavoriteDto, ParamsProductsFavoriteDto } from './dto';

@ApiTags('Products Favorites')
@ApiBearerAuth()
@Controller('/api/v1/products-favorites')
export class ProductsFavoritesController {
  constructor(
    private readonly productsFavoritesService: ProductsFavoritesService,
  ) {}

  @ApiCreatedResponse({ description: 'Added product to favorites' })
  @ApiNotFoundResponse({
    description: 'Product either does not exist or was deleted',
  })
  @ApiConflictResponse({
    description: "Product is already in the user's favorite list",
  })
  @Post()
  async create(
    @Body() createProductsFavoriteDto: CreateProductsFavoriteDto,
    @Req() req: Request,
  ) {
    const productFavorite = await this.productsFavoritesService.create(
      createProductsFavoriteDto,
      req.user,
    );

    return { productFavorite };
  }

  @ApiOkResponse({
    description: 'Returns all favorites products of the user in session',
  })
  @Get()
  async findAllUsersFavorite(@Req() req: Request) {
    const productsFavorites =
      await this.productsFavoritesService.findAllUsersFavorite(req.user);

    return { productsFavorites };
  }

  @ApiNoContentResponse({
    description: 'Favorite Product was removed from the user favorites',
  })
  @ApiNotFoundResponse({
    description: 'Product either does not exist or was deleted',
  })
  @HttpCode(204)
  @Delete(':id')
  async remove(
    @Param() params: ParamsProductsFavoriteDto,
    @Req() req: Request,
  ) {
    return this.productsFavoritesService.remove(params.id, req.user);
  }
}

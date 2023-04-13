import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductCategoriesService } from './product-categories.service';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateProductCategoryDTO } from './dtos/create-product-category.dto';
import { SearchProductCategoryById } from './dtos/search-by-id.dto';
import { UpdateProductCategoryDTO } from './dtos/update-product-category.dto';

@ApiTags('Product-Categories')
@Controller('api/v1/product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesServices: ProductCategoriesService,
  ) {}

  @SkipAuth()
  @HttpCode(200)
  @Get()
  async findAndCount(@Query() query: any) {
    return this.productCategoriesServices.findAndCount(query);
  }

  @HttpCode(201)
  @ApiBearerAuth()
  @Post()
  async createProductCategory(@Body() body: CreateProductCategoryDTO) {
    const productCategory = await this.productCategoriesServices.create(body);
    return { productCategory };
  }

  @SkipAuth()
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param() params: SearchProductCategoryById) {
    const productCategory = await this.productCategoriesServices.findOne(
      params.id,
    );
    return { productCategory };
  }

  @HttpCode(200)
  @ApiBearerAuth()
  @Patch(':id')
  async updateProductCategory(
    @Param() params: SearchProductCategoryById,
    @Body() body: UpdateProductCategoryDTO,
  ) {
    const productCategory = await this.productCategoriesServices.update(
      params.id,
      body,
    );
    return { productCategory };
  }

  @HttpCode(200)
  @ApiBearerAuth()
  @Delete(':id')
  async removeProductCategory(@Param() params: SearchProductCategoryById) {
    const productCategory = await this.productCategoriesServices.remove(
      params.id,
    );
    return { productCategory };
  }
}

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
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'returns all available product categories' })
  @ApiOkResponse({
    description: 'Returns all available product categories',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            results: {
              type: 'object',
              properties: {
                count: {
                  type: 'integer',
                  example: '1',
                },
                totalPages: {
                  type: 'integer',
                  example: '1',
                },
                currentPage: {
                  type: 'integer',
                  example: '1',
                },
                results: {
                  type: 'array',
                  example: '[]',
                },
              },
            },
          },
        },
      },
    },
  })
  async findAndCount(@Query() query: any) {
    return this.productCategoriesServices.findAndCount(query);
  }

  @HttpCode(201)
  @ApiBearerAuth()
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBody({
    description: 'fields needed to create a new product category',
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
    },
    required: true,
  })
  @ApiCreatedResponse({
    description: 'Product category created successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'integer',
              example: 401,
            },
            message: {
              type: 'string',
              example: 'Unauthorized',
            },
          },
        },
      },
    },
  })
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

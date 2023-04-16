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
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateProductDto } from './dtos/create-product';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadProductImage } from 'src/utils/firebase';
import { ProductImagesService } from 'src/product-images/product-images.service';
import { CreateProductImagesDto } from 'src/product-images/dto/create-product-image.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@ApiTags('Products')
@Controller('api/v1/products')
export class ProductsController {
  constructor(
    private readonly productsServices: ProductsService,
    private readonly productImagesServices: ProductImagesService,
  ) {}

  @SkipAuth()
  @HttpCode(200)
  @Get()
  async findAndCount(@Query() query: any) {
    return this.productsServices.findAndCount(query);
  }

  @Get(':id')
  @SkipAuth()
  @HttpCode(200)
  async getProductById(@Param('id') id: string) {
    return this.productsServices.productExist(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('product-image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description:
      'Fields required to create a product, only admins and vet type users can create products',
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        price: {
          type: 'integer',
        },
        quantity: {
          type: 'integer',
        },
        productCategoryId: {
          type: 'string',
        },
        veterinaryId: {
          type: 'string',
        },
        'product-image': {
          type: 'string',
          format: 'binary',
        },
      },
    },
    required: true,
  })
  async createProduct(
    @Body() body: CreateProductDto,
    @Request() req: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user = req.user;
    console.log(user);

    const product = await this.productsServices.create(body);
    const uploadImageDto: CreateProductImagesDto = {
      imageUrl: [],
      productId: product.id,
    };

    const imageUrl = await uploadProductImage(file);
    uploadImageDto.imageUrl.push(imageUrl);

    const createProductImage = await this.productImagesServices.uploadImage(
      uploadImageDto,
    );
    return {
      message: 'Product created successfully',
      product,
      createProductImage,
    };
  }

  @Patch(':id')
  @ApiBearerAuth()
  async updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsServices.update(id, body);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async deleteProduct(@Param('id') id: string) {
    this.productsServices.delete(id);
    return {
      message: 'Product is removed',
    };
  }
}

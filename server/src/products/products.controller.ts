import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateProductDto } from './dtos/create-product';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadProductImages } from 'src/utils/firebase';
import { ProductImagesService } from 'src/product-images/product-images.service';
import { CreateProductImageDto } from 'src/product-images/dto/create-product-image.dto';

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

  @Post()
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('product-image'))
  async createProduct(
    @Body() body: CreateProductDto,
    @Request() req: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user = req.user;
    console.log(user);

    const product = await this.productsServices.create(body);
    const uploadImageDto: CreateProductImageDto = {
      imageUrl: '',
      productId: product.id,
    };

    const imageUrl = await uploadProductImages(file);
    uploadImageDto.imageUrl = imageUrl;

    const createProductImage = await this.productImagesServices.uploadImage(
      uploadImageDto,
    );
    return {
      message: 'Product created successfully',
      product,
      createProductImage,
    };
  }
}

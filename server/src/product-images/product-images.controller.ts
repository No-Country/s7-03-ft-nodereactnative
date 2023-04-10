import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadProductImages } from 'src/utils/firebase';

@Controller('api/v1/product-images')
export class ProductImagesController {
  constructor(private readonly productImagesServices: ProductImagesService) {}

  @SkipAuth()
  @Post()
  @UseInterceptors(FileInterceptor('product-image'))
  async upload(
    @Body() body: CreateProductImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = await uploadProductImages(file);
    body.imageUrl = imageUrl;
    const productImage = await this.productImagesServices.uploadImage(body);
    return {
      message: 'Upload Success',
      productImage,
    };
  }
}

import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { CreateProductImagesDto } from './dto/create-product-image.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { uploadProductImage } from 'src/utils/firebase';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Product-Images')
@Controller('api/v1/product-images')
export class ProductImagesController {
  constructor(private readonly productImagesServices: ProductImagesService) {}

  @ApiBearerAuth()
  @Post()
  @UseInterceptors(FilesInterceptor('product-image', 3))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description:
      'Administrators or veterinarians can upload multiple images associated with a product',
    schema: {
      type: 'object',
      properties: {
        productId: {
          type: 'string',
        },
        'product-image': {
          type: 'array',
          maxItems: 3,
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
    required: true,
  })
  async upload(
    @Body() body: CreateProductImagesDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const imagesUrl: string[] = [];
    for (const file of files) {
      const imageUrl = await uploadProductImage(file);
      imagesUrl.push(imageUrl);
    }
    body.imageUrl = imagesUrl;

    const productImage = await this.productImagesServices.uploadImage(body);
    return {
      message: 'Upload Success',
      productImage,
    };
  }
}

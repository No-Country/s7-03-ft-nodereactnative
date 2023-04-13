import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductImagesDto } from './dto/create-product-image.dto';

@Injectable()
export class ProductImagesService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadImage(body: CreateProductImagesDto) {
    try {
      const productImages = [];
      for (const imageUrl of body.imageUrl) {
        const productImage = await this.prisma.productImage.create({
          data: {
            productId: body.productId,
            imageUrl,
          },
          select: {
            imageUrl: true,
            productId: true,
            createdAt: true,
            updatedAt: true,
          },
        });
        productImages.push(productImage);
      }
      return productImages;
    } catch (error) {
      console.log(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';

@Injectable()
export class ProductImagesService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadImage(body: CreateProductImageDto) {
    try {
      const productImage = await this.prisma.productImage.create({
        data: {
          ...body,
        },
        select: {
          imageUrl: true,
          productId: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return productImage;
    } catch (error) {
      console.log(error);
    }
  }
}

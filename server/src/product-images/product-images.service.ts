import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductImagesDto } from './dto/create-product-image.dto';
import { deleteProductImage } from 'src/utils/firebase';

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
      console.warn(error);
    }
  }

  async removeImage(id: string) {
    try {
      const productImage = await this.prisma.productImage.findFirst({
        where: {
          id: id,
        },
      });
      if (!productImage) {
        throw new NotFoundException(
          'No se encontró ninguna imagen con ese id y url',
        );
      }
      await deleteProductImage(productImage?.imageUrl);
      await this.prisma.productImage.delete({
        where: {
          id,
        },
      });
      return 'Imagen eliminada exitosamente';
    } catch (error) {
      console.log(error);
    }
  }

  async removeImage(id: string) {
    try {
      const productImage = await this.prisma.productImage.findFirst({
        where: {
          id: id,
        },
      });
      if (!productImage) {
        throw new NotFoundException(
          'No se encontró ninguna imagen con ese id y url',
        );
      }
      await deleteProductImage(productImage?.imageUrl);
      await this.prisma.productImage.delete({
        where: {
          id,
        },
      });
      return 'Imagen eliminada exitosamente';
    } catch (error) {
      console.log(error);
    }
  }
}

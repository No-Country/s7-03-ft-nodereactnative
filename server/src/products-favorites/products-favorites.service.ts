import { ProductFavorite } from '@prisma/client';
import { CreateProductsFavoriteDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { UserSession } from 'src/types/users/user.type';

@Injectable()
export class ProductsFavoritesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductsService,
  ) {}

  async create(
    createProductsFavoriteDto: CreateProductsFavoriteDto,
    userSession: UserSession,
  ): Promise<ProductFavorite> {
    const product = await this.productService.productExist(
      createProductsFavoriteDto.productId,
    );

    const productFavorite = await this.prisma.productFavorite.create({
      data: { productId: product.id, userId: userSession.id },
    });

    return productFavorite;
  }

  async findAllUsersFavorite(
    userSession: UserSession,
  ): Promise<ProductFavorite[]> {
    const productsFavorites = await this.prisma.productFavorite.findMany({
      where: { userId: userSession.id },
    });

    return productsFavorites;
  }

  async remove(id: string): Promise<void> {
    const productFavorite = await this.productFavoriteExists(id);

    await this.prisma.productFavorite.delete({
      where: { id: productFavorite.id },
    });

    return;
  }

  async productFavoriteExists(id: string): Promise<ProductFavorite> {
    const productFavorite = await this.prisma.productFavorite.findFirst({
      where: { id },
    });

    if (!productFavorite) {
      throw new NotFoundException('Product Favorite Not Found');
    }

    return productFavorite;
  }
}

import { UsersService } from './../users/users.service';
import { Product, ProductFavorite, Prisma } from '@prisma/client';
import { CreateProductsFavoriteDto } from './dto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { UserSession } from 'src/types/users/user.type';

@Injectable()
export class ProductsFavoritesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductsService,
    private readonly usersService: UsersService,
  ) {}

  async create(
    createProductsFavoriteDto: CreateProductsFavoriteDto,
    userSession: UserSession,
  ): Promise<ProductFavorite> {
    try {
      const product = await this.productService.productExist(
        createProductsFavoriteDto.productId,
      );

      const productFavorite = await this.prisma.productFavorite.create({
        data: { productId: product.id, userId: userSession.id },
      });

      return productFavorite;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new ConflictException('Product already added to favorites');
        }
      }
      throw e;
    }
  }

  async findAllUsersFavorite(userSession: UserSession): Promise<
    (ProductFavorite & {
      product: Product;
    })[]
  > {
    const productsFavorites = await this.prisma.productFavorite.findMany({
      where: { userId: userSession.id },
      include: { product: true },
    });

    return productsFavorites;
  }

  async remove(id: string, userSession: UserSession): Promise<void> {
    const productFavorite = await this.productFavoriteExists(id);

    await this.usersService.protectUsersAccount(
      productFavorite.userId,
      userSession,
    );

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

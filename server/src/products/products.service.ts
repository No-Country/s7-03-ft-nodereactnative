import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAndCount(query: any) {
    const { id, size = 10, page = 1 } = query;
    const numericSize = parseInt(size, 10);
    const numericPage = parseInt(page, 10);
    const where = id ? { isActive: true, id } : { isActive: true };

    const [products, count] = await Promise.all([
      this.prisma.product.findMany({
        where,
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          quantity: true,
          veterinaryId: true,
          productCategoryId: true,
          createdAt: true,
          productCategory: {
            select: {
              id: true,
              name: true,
              createdAt: true,
            },
          },
          productImage: {
            select: {
              id: true,
              imageUrl: true,
              createdAt: true,
            },
          },
        },
        take: numericSize,
        skip: (numericPage - 1) * numericSize,
      }),
      this.prisma.product.count({ where }),
    ]);
    const totalPages = numericSize === 0 ? 1 : Math.ceil(count / numericSize);

    return {
      count,
      totalPages,
      currentPage: page,
      results: products,
    };
  }

  async productExist(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: { id, isActive: true },
    });
    if (!product) {
      throw new NotFoundException('Product Not Found');
    }
    return product;
  }

  async create(body: CreateProductDto): Promise<Product> {
    try {
      const product = await this.prisma.product.create({
        data: {
          ...body,
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          quantity: true,
          veterinaryId: true,
          productCategoryId: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

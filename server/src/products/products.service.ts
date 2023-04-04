import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product';

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

  async create(body: CreateProductDto) {
    try {
      const product = await this.prisma.product.create({
        data: {
          ...body,
        },
        select: {
          name: true,
          description: true,
          price: true,
          quantity: true,
          veterinaryId: true,
          productCategoryId: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  }
}
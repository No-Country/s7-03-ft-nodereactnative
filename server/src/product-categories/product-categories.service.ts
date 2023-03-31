import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductCategoryDTO } from './dtos/CreateProductCategory.dto';
import { UpdateProductCategoryDTO } from './dtos/UpdateProductCategory.dto';


@Injectable()
export class ProductCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAndCount() {
    const productCategories = await this.prisma.productCategory.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
      take: 100,
    });
    return productCategories;
  }

  async create(body: CreateProductCategoryDTO) {
    try {
      const newProductCategory = await this.prisma.productCategory.create({
        data: {
          ...body,
        },
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return newProductCategory;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    const productCategory = await this.prisma.productCategory.findFirst({
      where: { id, isActive: true },
    });

    if (!productCategory)
      throw new NotFoundException('product category not found');
    return productCategory;
  }

  async update(id: string, dataProductCategory: UpdateProductCategoryDTO) {
    const productCategory = await this.findOne(id);
    if (productCategory) {
      const updateProductCategory = await this.prisma.productCategory.update({
        where: { id: productCategory.id },
        data: { ...dataProductCategory },
      });
      return updateProductCategory;
    } else {
      return new NotFoundException('error updating product category');
    }
  }

  async remove(id: string) {
    const productCategory = await this.findOne(id);
    if (productCategory) {
      const updateProductCategory = await this.prisma.productCategory.update({
        where: { id },
        data: { isActive: false },
      });
      return {
        productCategory: updateProductCategory,
        message: 'product category removed',
      };
    } else {
      return new NotFoundException('error removed product category');
    }
  }
}

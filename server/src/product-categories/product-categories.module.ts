import { Module } from '@nestjs/common';
import { ProductCategoriesController } from './product-categories.controller';
import { ProductCategoriesService } from './product-categories.service';

@Module({
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService],
})
export class ProductCategoriesModule {}

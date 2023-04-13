import { Module } from '@nestjs/common';
import { ProductsFavoritesService } from './products-favorites.service';
import { ProductsFavoritesController } from './products-favorites.controller';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [ProductsFavoritesController],
  providers: [ProductsFavoritesService],
})
export class ProductsFavoritesModule {}

import { TransformInterceptor } from './interceptors/transform.interceptor';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UsersModule } from './users/users.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { RolesGuard } from './auth/guards/role-auth.guard';
import { RolesModule } from './roles/roles.module';
import { VeterinariesModule } from './veterinaries/veterinaries.module';
import { ProductsModule } from './products/products.module';
import { VeterinariesFavoritesModule } from './veterinaries-favorites/veterinaries-favorites.module';
import { MulterModule } from '@nestjs/platform-express';
import { ProductImagesModule } from './product-images/product-images.module';
import { ProductsFavoritesModule } from './products-favorites/products-favorites.module';
import { ReviewsModule } from './reviews/reviews.module';
import * as multer from 'multer';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule,
    ProductCategoriesModule,
    RolesModule,
    VeterinariesModule,
    ProductsModule,
    VeterinariesFavoritesModule,
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
    ProductImagesModule,
    ProductsFavoritesModule,
    ReviewsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  controllers: [],
})
export class AppModule {}

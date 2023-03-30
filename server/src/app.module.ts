import { TransformInterceptor } from './interceptors/transform.interceptor';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UsersModule } from './users/users.module';
import { ProductCategoriesService } from './product-categories/product-categories.service';
import { ProductCategoriesController } from './product-categories/product-categories.controller';
import { ProductCategoriesModule } from './product-categories/product-categories.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule,
    ProductCategoriesModule,
  ],
  providers: [
    //PrismaService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    ProductCategoriesService,
  ],
  controllers: [
    /* ProductCategoriesController */
  ],
})
export class AppModule {}

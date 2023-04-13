import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateProductDto } from './dtos/create-product';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Products')
@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}

  @SkipAuth()
  @HttpCode(200)
  @Get()
  async findAndCount(@Query() query: any) {
    return this.productsServices.findAndCount(query);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createProduct(@Body() body: CreateProductDto, @Request() req: any) {
    const user = req.user;
    console.log(user);
    const product = await this.productsServices.create(body);
    return {
      message: 'Product created successfully',
      product,
    };
  }
}

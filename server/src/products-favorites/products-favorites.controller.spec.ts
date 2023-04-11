import { Test, TestingModule } from '@nestjs/testing';
import { ProductsFavoritesController } from './products-favorites.controller';
import { ProductsFavoritesService } from './products-favorites.service';

describe('ProductsFavoritesController', () => {
  let controller: ProductsFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsFavoritesController],
      providers: [ProductsFavoritesService],
    }).compile();

    controller = module.get<ProductsFavoritesController>(ProductsFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

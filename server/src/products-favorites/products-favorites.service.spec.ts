import { Test, TestingModule } from '@nestjs/testing';
import { ProductsFavoritesService } from './products-favorites.service';

describe('ProductsFavoritesService', () => {
  let service: ProductsFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsFavoritesService],
    }).compile();

    service = module.get<ProductsFavoritesService>(ProductsFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

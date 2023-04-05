import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariesFavoritesService } from './veterinaries-favorites.service';

describe('VeterinariesFavoritesService', () => {
  let service: VeterinariesFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeterinariesFavoritesService],
    }).compile();

    service = module.get<VeterinariesFavoritesService>(
      VeterinariesFavoritesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

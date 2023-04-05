import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariesFavoritesController } from './veterinaries-favorites.controller';
import { VeterinariesFavoritesService } from './veterinaries-favorites.service';

describe('VeterinariesFavoritesController', () => {
  let controller: VeterinariesFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeterinariesFavoritesController],
      providers: [VeterinariesFavoritesService],
    }).compile();

    controller = module.get<VeterinariesFavoritesController>(
      VeterinariesFavoritesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

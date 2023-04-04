import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariesController } from './veterinaries.controller';
import { VeterinariesService } from './veterinaries.service';

describe('VeterinariesController', () => {
  let controller: VeterinariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeterinariesController],
      providers: [VeterinariesService],
    }).compile();

    controller = module.get<VeterinariesController>(VeterinariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

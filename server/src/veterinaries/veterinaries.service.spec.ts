import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariesService } from './veterinaries.service';

describe('VeterinariesService', () => {
  let service: VeterinariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeterinariesService],
    }).compile();

    service = module.get<VeterinariesService>(VeterinariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { VeterinariesFavoritesService } from './veterinaries-favorites.service';
import { VeterinariesFavoritesController } from './veterinaries-favorites.controller';
import { VeterinariesModule } from 'src/veterinaries/veterinaries.module';

@Module({
  imports: [VeterinariesModule],
  controllers: [VeterinariesFavoritesController],
  providers: [VeterinariesFavoritesService],
})
export class VeterinariesFavoritesModule {}
